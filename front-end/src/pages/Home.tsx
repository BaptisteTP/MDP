import { Link } from 'react-router-dom'
import { Countdown } from '../components/Countdown'
import { HeartDivider } from '../components/Signature'
import LOGO_TOULOUSE from '../assets/logo-maison-toulouse.png'
import DEVANTURE_MAISON from '../assets/Toulouse_archi-5_HD.jpg'

const chiffresClesCourts = [
  {
    num: '18 000',
    lbl: 'familles accueillies depuis 2005',
  },
  {
    num: '2 min',
    lbl: 'à pied de l’hôpital des enfants du CHU de Toulouse Purpan',
  },
  {
    num: '392 nuits',
    lbl: 'le séjour le plus long',
  },
]

export default function Home() {
  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
        padding: '32px 24px 100px',
      }}
    >
      {/* HERO PLEIN ÉCRAN DANS LE CADRE RUBAN */}
      <div className="ribbon-frame" style={{ marginBottom: '64px' }}>
        <div className="ribbon-bg" />
        <div className="ribbon-content">
          {/* LOGOS DU HERO */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                background: 'var(--white)',
                padding: '8px 16px',
                borderRadius: '12px',
                border: '1px solid #E4D9C8',
                boxShadow: '0 2px 6px rgba(58,48,42,.06)',
              }}
            >
              <img
                src={LOGO_TOULOUSE}
                alt="Maison Ronald McDonald Toulouse"
                style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* EYEBROW */}
          <div className="eyebrow" style={{ marginBottom: '8px' }}>
            1ère Soirée caritative
          </div>

          {/* TITRE PRINCIPAL */}
          <h1
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 5.5vw, 52px)',
              color: 'var(--rose-deep)',
              margin: '8px 0 6px',
              lineHeight: 1.15,
            }}
          >
            AU CŒUR DES COULEURS
          </h1>

          {/* SOUS-TITRE */}
          <div
            style={{
              fontFamily: 'EB Garamond, serif',
              fontStyle: 'italic',
              fontSize: '20px',
              color: 'var(--charcoal-soft)',
              marginBottom: '20px',
            }}
          >
            Maison Ronald McDonald de Toulouse
          </div>

          {/* BADGE DATE */}
          <div
            style={{
              display: 'inline-block',
              background: 'var(--gold)',
              color: 'var(--white)',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.06em',
              padding: '11px 28px',
              borderRadius: '6px',
              fontSize: '15px',
              marginBottom: '10px',
              boxShadow: '0 2px 8px rgba(185,143,83,.3)',
            }}
          >
            24 NOVEMBRE 2026
          </div>

          {/* LIEU ET HORAIRE */}
          <div
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontSize: '18px',
              color: 'var(--charcoal)',
              marginBottom: '26px',
            }}
          >
            Le 24 novembre 2026 — Accueil à partir de 18h30 — Les Espaces du Stadium, Toulouse FC
          </div>

          {/* COMPTE À REBOURS */}
          <div style={{ marginBottom: '26px' }}>
            <Countdown />
          </div>

          {/* 2 BOUTONS D'ACTION */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              margin: '20px 0 8px',
            }}
          >
            <a
              href="https://www.helloasso.com/associations/dessine-moi-une-maison/evenements/soiree-caritative-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Je m'inscris
            </a>

            <a
              href="https://www.helloasso.com/associations/dessine-moi-une-maison/formulaires/6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Je fais un don
            </a>
          </div>
        </div>
      </div>

      {/* MOT D'ACCUEIL DU PRÉSIDENT PAUL SÉCAIL */}
      <section
        style={{
          marginBottom: '72px',
          background: 'var(--white)',
          borderRadius: '16px',
          padding: '44px 36px',
          boxShadow: '0 4px 18px rgba(58, 48, 42, 0.08)',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--rose-deep)', marginBottom: '8px' }}>
            Mot d'accueil
          </div>
          <h2
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontSize: '28px',
              color: 'var(--charcoal)',
              margin: '0 0 16px',
            }}
          >
            Bienvenue à la 1ère Soirée caritative
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 20px' }}>
            <HeartDivider />
          </div>

          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '19px',
              lineHeight: 1.7,
              color: 'var(--charcoal)',
              fontStyle: 'italic',
              margin: '0 0 20px',
            }}
          >
            « C'est avec une immense joie que nous vous accueillons pour cette toute première
            édition de notre soirée caritative AU CŒUR DES COULEURS. Depuis 20 ans à Toulouse, notre
            Maison est un lieu de vie et de réconfort essentiel permettant aux familles de rester
            unies auprès de leur enfant hospitalisé. Cette soirée exceptionnelle est l'occasion de
            mobiliser notre communauté pour financer le projet 2026 : la création d'un nouvel espace
            d'accueil au cœur de la Maison, conçu pour offrir à chaque famille toute l'intimité et
            la sérénité dont elle a besoin. Du fond du cœur, merci pour votre engagement et votre
            précieuse générosité. »
          </p>

          <div
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--gold-dark)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Paul Sécail
          </div>
          <div
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '15px',
              color: 'var(--charcoal-soft)',
              marginTop: '2px',
            }}
          >
            Président de l'association Dessine-moi une Maison
          </div>
        </div>
      </section>

      {/* BANDEAU CHIFFRES CLÉS VERSION COURTE */}
      <section style={{ marginBottom: '72px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="eyebrow" style={{ color: 'var(--rose-deep)', marginBottom: '6px' }}>
            Impact &amp; Solidarité
          </div>
          <h2
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontWeight: 600,
              fontSize: '28px',
              margin: 0,
              color: 'var(--charcoal)',
            }}
          >
            La Maison en chiffres clés
          </h2>
        </div>

        <div className="pastilles-grid">
          {chiffresClesCourts.map((item, index) => (
            <div className="pastille" key={index}>
              <div className="num">{item.num}</div>
              <div className="lbl">{item.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VISUEL : DEVANTURE DE LA MAISON */}
      <section
        style={{
          marginBottom: '64px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          background: 'var(--cream)',
          borderRadius: '18px',
          padding: '36px',
          boxShadow: '0 4px 16px rgba(58, 48, 42, 0.07)',
        }}
      >
        <div
          style={{
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(58, 48, 42, 0.12)',
            height: '320px',
          }}
        >
          <img
            src={DEVANTURE_MAISON}
            alt="Devanture de la Maison Ronald McDonald de Toulouse"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold-dark)' }}>
            Un lieu de vie chaleureux
          </div>
          <h3
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontWeight: 600,
              fontSize: '26px',
              color: 'var(--charcoal)',
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            « Un lieu de vie comme à la Maison »
          </h3>
          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--charcoal-soft)',
              margin: 0,
            }}
          >
            Située à 2 minutes à pied de l’hôpital des enfants du CHU de Toulouse Purpan, la Maison Ronald
            McDonald de Toulouse accueille chaque jour les familles dans un cadre chaleureux et
            bienveillant, préservant le lien familial durant l’épreuve de l’hospitalisation.
          </p>
          <div style={{ marginTop: '8px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/la-maison" className="btn btn-gold">
              Découvrir la Maison
            </Link>
            <Link to="/soiree-gala" className="btn btn-ghost">
              Le programme de la soirée
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}