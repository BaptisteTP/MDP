import { SubpageHeader } from '../components/SubpageHeader'
import { HeartDivider } from '../components/Signature'

const hotels = [
  {
    name: "Lagrange Apart'hôtel",
    url: 'https://www.lagrange-aparthotel.com/toulouse/',
    desc: 'Résidence hôtelière moderne à proximité du Stadium et des transports',
  },
  {
    name: 'Hôtel Gascogne – Toulouse',
    url: 'https://www.hotel-gascogne.com/fr/',
    desc: 'Hôtel chaleureux situé dans le quartier Saint-Cyprien',
  },
  {
    name: 'Hôtel Croix Baragnon Toulouse',
    url: 'https://www.hotelcroixbaragnon.com/',
    desc: 'Hôtel de charme au cœur du centre historique toulousain',
  },
]

export default function Info() {
  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
        padding: '32px 24px 100px',
      }}
    >
      <SubpageHeader eyebrow="Logistique &amp; Accès" title="Informations pratiques" />

      {/* INTRO */}
      <section
        style={{
          maxWidth: '780px',
          margin: '0 auto 48px',
          textAlign: 'center',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--gold-dark)', marginBottom: '8px' }}>
          Préparez votre venue
        </div>
        <h1
          style={{
            fontFamily: '"The Seasons", "Playfair Display", serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 36px)',
            color: 'var(--charcoal)',
            margin: '0 0 14px',
          }}
        >
          Tout ce qu'il faut savoir pour la soirée
        </h1>
        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '20px',
            fontStyle: 'italic',
            color: 'var(--charcoal-soft)',
            margin: '0 auto 20px',
          }}
        >
          Retrouvez l'ensemble des informations logistiques pour vous rendre à la soirée caritative
          AU CŒUR DES COULEURS.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HeartDivider />
        </div>
      </section>

      {/* LIEU, HORAIRES, CONTACT & CARTE */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          marginBottom: '56px',
        }}
      >
        {/* CARTE INFOS PRINCIPALES */}
        <div
          style={{
            background: 'var(--white)',
            borderRadius: '16px',
            padding: '36px 30px',
            boxShadow: '0 4px 18px rgba(58, 48, 42, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* LIEU */}
          <div>
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--gold-dark)',
                marginBottom: '4px',
              }}
            >
              Lieu
            </div>
            <div
              style={{
                fontFamily: '"The Seasons", "Playfair Display", serif',
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--charcoal)',
                marginBottom: '4px',
              }}
            >
              Les Espaces du Stadium Toulouse FC
            </div>
            <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '17px', color: 'var(--charcoal-soft)' }}>
              1 allée Gabriel Biénès — 31400 Toulouse
            </div>
          </div>

          {/* HORAIRES */}
          <div>
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--rose-deep)',
                marginBottom: '4px',
              }}
            >
              Horaires
            </div>
            <div
              style={{
                fontFamily: '"The Seasons", "Playfair Display", serif',
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--charcoal)',
                marginBottom: '4px',
              }}
            >
              Mardi 24 novembre 2026
            </div>
            <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '17px', color: 'var(--charcoal-soft)' }}>
              Accueil à partir de <strong>18h30</strong>
            </div>
          </div>

          {/* STATIONNEMENT */}
          <div>
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--gold-dark)',
                marginBottom: '4px',
              }}
            >
              Stationnement
            </div>
            <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '17px', color: 'var(--charcoal-soft)', marginBottom: '8px' }}>
              Parkings publics situés à proximité immédiate du Stadium.
            </div>
            <a
              href="https://www.google.com/maps/search/parking+/@43.5855151,1.4330107,1434m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--rose-deep)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              Voir tous les parkings sur Google Maps →
            </a>
          </div>

          {/* CONTACT */}
          <div style={{ borderTop: '1px solid #E4D9C8', paddingTop: '18px' }}>
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--gold-dark)',
                marginBottom: '6px',
              }}
            >
              Contact organisation
            </div>
            <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '18px', color: 'var(--charcoal)', fontWeight: 600 }}>
              Claire Renaud
            </div>
            <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '17px', color: 'var(--charcoal-soft)', marginTop: '4px' }}>
              Tél :{' '}
              <a
                href="tel:0763103529"
                style={{ color: 'var(--charcoal)', textDecoration: 'none', fontWeight: 600 }}
              >
                07.63.10.35.29
              </a>
              <br />
              Mail :{' '}
              <a
                href="mailto:evenement.mdptoulouse@gmail.com"
                style={{ color: 'var(--rose-deep)', textDecoration: 'none' }}
              >
                evenement.mdptoulouse@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* GOOGLE MAPS EMBED */}
        <div
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 18px rgba(58, 48, 42, 0.08)',
            minHeight: '380px',
            background: 'var(--cream)',
          }}
        >
          <iframe
            title="Les Espaces du Stadium Toulouse FC"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.1772648834994!2d1.4304218766162393!3d43.58305715767839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb26f4bd5eaf%3A0x4a8a8c1f23d97f6f!2sStadium%20de%20Toulouse!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '380px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* HÔTELS À PROXIMITÉ DU STADIUM */}
      <section style={{ marginBottom: '64px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="eyebrow" style={{ color: 'var(--rose-deep)', marginBottom: '6px' }}>
            Hébergement
          </div>
          <h2
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontWeight: 600,
              fontSize: '28px',
              color: 'var(--charcoal)',
              margin: 0,
            }}
          >
            Hôtels à proximité du Stadium
          </h2>
          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '18px',
              color: 'var(--charcoal-soft)',
              maxWidth: '640px',
              margin: '8px auto 0',
            }}
          >
            Pour faciliter votre séjour, voici une sélection d’établissements recommandés à
            proximité du Stadium Toulouse FC :
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {hotels.map((h, i) => (
            <div
              key={i}
              style={{
                background: 'var(--white)',
                borderRadius: '14px',
                padding: '28px 24px',
                boxShadow: '0 4px 14px rgba(58, 48, 42, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
                transition: 'transform 0.2s ease',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: '"The Seasons", "Playfair Display", serif',
                    fontSize: '20px',
                    color: 'var(--charcoal)',
                    margin: '0 0 8px',
                  }}
                >
                  {h.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'EB Garamond, serif',
                    fontSize: '16.5px',
                    color: 'var(--charcoal-soft)',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {h.desc}
                </p>
              </div>

              <a
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  fontSize: '13px',
                  padding: '10px 20px',
                  textAlign: 'center',
                }}
              >
                Consulter le site officiel →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
