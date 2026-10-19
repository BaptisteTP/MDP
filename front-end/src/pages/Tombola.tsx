import { SubpageHeader } from '../components/SubpageHeader'
import { HeartDivider } from '../components/Signature'

const IMAGE_TOMBOLA = 'https://www.figma.com/api/mcp/asset/60c07e05-2f54-4823-a7ea-b141d4b1ac05'

const lots = [
  { title: 'Entraînement CrossFit', partner: 'avec Vincent Clair' },
  { title: 'Dîner pour deux', partner: 'Restaurant étoilé - à venir' },
  { title: 'Séjour en gîte', partner: 'Partenaire hébergement - à venir' },
  { title: 'Bijou artisanal', partner: 'Créateur local - à venir' },
  { title: 'Billetterie événement sportif', partner: 'Partenaire sportif - à venir' },
  { title: 'Lot surprise', partner: 'à découvrir le soir J' },
]

export default function Tombola() {
  return (
    <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 32px 120px' }}>

      <SubpageHeader eyebrow="Onglet 4" title="Tombola caritative" />

      {/* Intro */}
      <section
        style={{
          padding: '50px 0 20px',
          textAlign: 'center',
          maxWidth: '780px',
          margin: '0 auto',
        }}
      >
        <div className="eyebrow" style={{ marginBottom: '8px', color: 'var(--rose-deep)' }}>
          Tombola
        </div>
        <h1
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: '34px',
            color: 'var(--rose-deep)',
            margin: '8px 0 6px',
            lineHeight: 1.2,
          }}
        >
          Tentez votre chance
        </h1>
        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontStyle: 'italic',
            fontSize: '19px',
            color: 'var(--charcoal-soft)',
            margin: '0 0 14px',
          }}
        >
          Pour soutenir la Maison Ronald McDonald de Toulouse
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0' }}>
          <HeartDivider />
        </div>
        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '18px',
            lineHeight: 1.6,
            color: 'var(--charcoal-soft)',
            margin: '14px 0 0',
          }}
        >
          Afin que chacun puisse participer, la tombola est organisée en deux formats : une tombola
          payante sur place pour les participants présents, et une tombola réservée aux personnes ne
          pouvant pas assister à l'événement. Tirage au sort le soir du dîner de gala, à 22h45.
        </p>
      </section>

      {/* Hero image */}
      <div
        style={{
          margin: '40px 0',
          height: '320px',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'var(--cream)',
        }}
      >
        <img src={IMAGE_TOMBOLA} alt="Tombola" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Lots */}
      <section style={{ marginBottom: '60px' }}>
        <div className="eyebrow" style={{ marginBottom: '8px', color: 'var(--rose-deep)' }}>
          Lots à gagner
        </div>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
            fontSize: '26px',
            color: 'var(--charcoal)',
            margin: '0 0 24px',
          }}
        >
          Des expériences exclusives offertes par nos partenaires
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {lots.map((l, i) => (
            <div className="pastille" key={i}>
              <div className="num" style={{ fontSize: '20px', lineHeight: 1.2 }}>{l.title}</div>
              <div className="lbl" style={{ marginTop: '8px' }}>{l.partner}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Info + CTA */}
      <section
        style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
          padding: '40px',
          background: 'var(--white)',
          borderRadius: '16px',
          boxShadow: '0 2px 10px rgba(58,48,42,.08)',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 320px' }}>
          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '17px',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            <span style={{ color: 'var(--charcoal)', fontWeight: 600 }}>Prix du billet : X / </span>
            <span style={{ color: 'var(--charcoal-soft)' }}>
              Cette participation ne donne pas droit à un reçu fiscal.{' '}
            </span>
            <span style={{ color: 'var(--charcoal-soft)', fontStyle: 'italic' }}>
              Seuls les dons peuvent bénéficier d'une défiscalisation.
            </span>
          </p>
        </div>
        <button className="btn btn-gold">Participer à la tombola</button>
      </section>

    </div>
  )
}
