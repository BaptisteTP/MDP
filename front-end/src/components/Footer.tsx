import LOGO_TOULOUSE from '../assets/logo-maison-toulouse.png'

export default function Footer() {
  return (
    <footer className="footer-charcoal" style={{ width: '100%', marginTop: 'auto' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '48px 24px 32px',
          fontFamily: 'Poppins, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '36px',
          }}
        >
          {/* Logo & Coordonnées */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '420px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '8px 16px',
                borderRadius: '10px',
                width: 'fit-content',
              }}
            >
              <img
                src={LOGO_TOULOUSE}
                alt="Maison Ronald McDonald Toulouse"
                style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <h4
              style={{
                fontFamily: '"The Seasons", "Playfair Display", serif',
                fontWeight: 600,
                fontSize: '18px',
                margin: '6px 0 0',
                color: 'var(--rose-pale)',
              }}
            >
              Maison Ronald McDonald de Toulouse
            </h4>
            <p style={{ fontSize: '13.5px', lineHeight: 1.7, color: '#D9CFC4', margin: 0 }}>
              105 avenue de Casselardit, 31300 Toulouse
              <br />
              Tél :{' '}
              <a
                href="tel:0763103529"
                style={{ color: '#F9F5EC', textDecoration: 'none', fontWeight: 600 }}
              >
                07.63.10.35.29
              </a>
              <br />
              Mail :{' '}
              <a
                href="mailto:evenement.mdptoulouse@gmail.com"
                style={{ color: 'var(--rose-pale)', textDecoration: 'none' }}
              >
                evenement.mdptoulouse@gmail.com
              </a>
            </p>
          </div>

          {/* Navigation rapide & Soirée */}
          <div>
            <h4
              style={{
                fontFamily: '"The Seasons", "Playfair Display", serif',
                fontWeight: 600,
                fontSize: '18px',
                margin: '0 0 12px',
                color: 'var(--rose-pale)',
              }}
            >
              Soirée caritative 2026
            </h4>
            <p style={{ fontSize: '13.5px', lineHeight: 1.8, color: '#D9CFC4', margin: 0 }}>
              AU CŒUR DES COULEURS
              <br />
              24 novembre 2026 dès 18h30
              <br />
              Les Espaces du Stadium Toulouse FC
            </p>
          </div>

          {/* Réseaux sociaux cliquables */}
          <div>
            <h4
              style={{
                fontFamily: '"The Seasons", "Playfair Display", serif',
                fontWeight: 600,
                fontSize: '18px',
                margin: '0 0 12px',
                color: 'var(--rose-pale)',
              }}
            >
              Suivez-nous
            </h4>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="https://www.facebook.com/fondationronaldmcdonald/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#F9F5EC',
                  textDecoration: 'none',
                  fontSize: '13px',
                  background: 'rgba(255,255,255,0.08)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  transition: 'background 0.2s ease',
                }}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/maison_ronald_mcdonald_tlse/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#F9F5EC',
                  textDecoration: 'none',
                  fontSize: '13px',
                  background: 'rgba(255,255,255,0.08)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  transition: 'background 0.2s ease',
                }}
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/maison-ronald-mcdonald-toulouse/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#F9F5EC',
                  textDecoration: 'none',
                  fontSize: '13px',
                  background: 'rgba(255,255,255,0.08)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  transition: 'background 0.2s ease',
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Mentions légales & Crédits */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,.15)',
            paddingTop: '20px',
            fontSize: '12px',
            color: '#B7AA9C',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span>Association Dessine-moi une Maison — Maison Ronald McDonald de Toulouse</span>
          <span>Mentions légales — Conception &amp; Réalisation : Baptiste</span>
        </div>
      </div>
    </footer>
  )
}
