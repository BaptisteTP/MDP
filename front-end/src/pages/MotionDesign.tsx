import { useEffect, useState, useRef } from 'react'
import { socket } from '../services/socket'
import LOGO_TOULOUSE from '../assets/logo-maison-toulouse.png'
import IMG_ETAPE_1 from '../assets/Toulouse_archi-14_HD.jpg'
import IMG_ETAPE_2 from '../assets/Toulouse_ambiance-34_HD.jpg'

interface TotalStats {
  totalAmount: number
  totalDonations: number
}

// 🎯 CONFIGURATION
const MAX_AMOUNT_TARGET = 20000 // Montant cible en euros pour atteindre l'image 2 à 100%
const MAX_DURATION_MINUTES = 7  // Durée maximale en minutes (progression automatique vers l'image 2)
const MAX_DURATION_MS = MAX_DURATION_MINUTES * 60 * 1000

export default function MotionDesign() {
  const [stats, setStats] = useState<TotalStats>({ totalAmount: 0, totalDonations: 0 })
  const [displayedAmount, setDisplayedAmount] = useState<number>(0)
  const [isPulsing, setIsPulsing] = useState<boolean>(false)
  const [connected, setConnected] = useState<boolean>(socket.connected)
  const [lastDiff, setLastDiff] = useState<number | null>(null)
  
  // Progression basée sur le temps écoulé depuis l'ouverture de la page
  const [timeRatio, setTimeRatio] = useState<number>(0)
  const startTimeRef = useRef<number>(Date.now())

  const animationFrameRef = useRef<number | null>(null)
  const pulseTimeoutRef = useRef<any>(null)

  // 1. Horloge automatique (Max 7 minutes) pour garantir l'avancée vers l'image 2
  useEffect(() => {
    startTimeRef.current = Date.now()

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current
      const ratio = Math.min(1, elapsed / MAX_DURATION_MS)
      setTimeRatio(ratio)
      if (ratio >= 1) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // 2. Initialisation & Écoute WebSocket temps réel des dons
  useEffect(() => {
    fetch('/api/donations/total')
      .then(res => res.json())
      .then((data: TotalStats) => {
        if (typeof data.totalAmount === 'number') {
          setStats(data)
          setDisplayedAmount(data.totalAmount)
        }
      })
      .catch(err => console.log('Erreur fetch initial stats', err))

    function onConnect() {
      setConnected(true)
    }

    function onDisconnect() {
      setConnected(false)
    }

    function onTotalUpdated(newStats: TotalStats) {
      setStats(prev => {
        const diff = newStats.totalAmount - prev.totalAmount
        if (diff > 0) {
          setLastDiff(diff)
          setIsPulsing(true)
          if (pulseTimeoutRef.current) clearTimeout(pulseTimeoutRef.current)
          pulseTimeoutRef.current = setTimeout(() => {
            setIsPulsing(false)
            setLastDiff(null)
          }, 3500)
        }
        return newStats
      })
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('total_updated', onTotalUpdated)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('total_updated', onTotalUpdated)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      if (pulseTimeoutRef.current) clearTimeout(pulseTimeoutRef.current)
    }
  }, [])

  // 3. Compteur fluide vers la cible exacte
  useEffect(() => {
    const target = stats.totalAmount
    const animate = () => {
      setDisplayedAmount(prev => {
        const diff = target - prev
        if (Math.abs(diff) < 0.2) return target
        const next = prev + diff * 0.1
        animationFrameRef.current = requestAnimationFrame(animate)
        return next
      })
    }

    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [stats.totalAmount])

  // 4. Calcul combiné : le plus avancé entre les dons réels ET le temps écoulé (max 7 min)
  const amountRatio = Math.min(1, Math.max(0, displayedAmount / MAX_AMOUNT_TARGET))
  const transitionRatio = Math.min(1, Math.max(amountRatio, timeRatio))

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#120E0C',
        color: '#FFFFFF',
        fontFamily: '"The Seasons", "Playfair Display", Georgia, serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4vh 5vw',
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {/* ============================================================== */}
      {/* 🖼️ TRANSITION FLUIDE ENTRE IMAGE 1 ET IMAGE 2 (EN TOILE DE FOND) */}
      {/* ============================================================== */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* IMAGE 1 (État initial - fondation / départ) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${IMG_ETAPE_1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.38) contrast(1.1) saturate(0.85)',
            transform: `scale(${1 + transitionRatio * 0.05})`,
            transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* IMAGE 2 (État final - se dévoile avec les dons ou au fil des 7 minutes) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${IMG_ETAPE_2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: transitionRatio,
            filter: 'brightness(0.42) contrast(1.15) saturate(1.2)',
            transform: `scale(${1.05 - (1 - transitionRatio) * 0.05})`,
            transition: 'opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Masque dégradé élégant pour assurer la lisibilité */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(18, 14, 12, 0.45) 0%, rgba(18, 14, 12, 0.88) 100%)',
          }}
        />
      </div>

      {/* FLASH / PULSATION DORÉE LORS D'UN NOUVEAU DON */}
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isPulsing ? '750px' : '450px',
          height: isPulsing ? '750px' : '450px',
          background: isPulsing
            ? 'radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, rgba(184, 58, 75, 0.25) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 1,
        }}
      />

      {/* HEADER : LOGO & STATUT EN DIRECT */}
      <header
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <img
          src={LOGO_TOULOUSE}
          alt="Maison Ronald McDonald Toulouse"
          style={{
            height: 'clamp(50px, 7vw, 85px)',
            filter: 'brightness(1.15) drop-shadow(0 4px 18px rgba(0,0,0,0.7))',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(20, 16, 14, 0.65)',
            backdropFilter: 'blur(10px)',
            padding: '8px 18px',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: connected ? '#10B981' : '#EF4444',
              boxShadow: connected ? '0 0 10px #10B981' : '0 0 10px #EF4444',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              fontWeight: 600,
            }}
          >
            {connected ? 'Collecte en direct' : 'Reconnexion...'}
          </span>
        </div>
      </header>

      {/* CENTRE : LE MONTANT CUMULÉ & ANIMATION CÉLÉBRATION */}
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <div
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(12px, 1.5vw, 16px)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#D4AF37',
            marginBottom: '10px',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          }}
        >
          Soirée Caritative 2026
        </div>

        {/* NOTIFICATION SURGISSANTE (+XXX € !) */}
        {lastDiff && (
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              background: 'linear-gradient(135deg, #B83A4B 0%, #D4AF37 100%)',
              color: '#FFFFFF',
              padding: '8px 28px',
              borderRadius: '28px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(20px, 2.5vw, 30px)',
              fontWeight: 700,
              boxShadow: '0 8px 32px rgba(184, 58, 75, 0.65)',
              animation: 'bounceIn 0.5s ease forwards',
            }}
          >
            +{lastDiff.toLocaleString('fr-FR')} € !
          </div>
        )}

        {/* MONTANT GÉANT */}
        <div
          style={{
            fontSize: 'clamp(72px, 14vw, 160px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: isPulsing ? '#F5C57A' : '#FFFFFF',
            filter: isPulsing
              ? 'drop-shadow(0 0 45px rgba(245, 197, 122, 0.85))'
              : 'drop-shadow(0 6px 25px rgba(0,0,0,0.9))',
            transform: isPulsing ? 'scale(1.05)' : 'scale(1)',
            transition: 'color 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.4s ease',
          }}
        >
          {Math.round(displayedAmount).toLocaleString('fr-FR')} €
        </div>

        <div
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            color: 'rgba(255, 255, 255, 0.9)',
            fontStyle: 'italic',
            marginTop: '8px',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          }}
        >
          {stats.totalDonations} {stats.totalDonations > 1 ? 'donateurs mobilisés' : 'donateur mobilisé'}
        </div>
      </main>

      {/* PIED DE PAGE DISCRET : ÉLÉGANT & SANS AUCUNE PRESSION NI BARRE */}
      <footer
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(11px, 1.1vw, 13px)',
            letterSpacing: '0.12em',
            color: 'rgba(255, 255, 255, 0.45)',
            textTransform: 'uppercase',
            textAlign: 'center',
            textShadow: '0 2px 6px rgba(0,0,0,0.6)',
          }}
        >
          Maison Ronald McDonald de Toulouse • Merci pour votre générosité
        </div>
      </footer>
    </div>
  )
}
