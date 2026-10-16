import { SubpageHeader } from '../components/SubpageHeader'
import { HeartDivider } from '../components/Signature'
import AMBIANCE_TOULOUSE from '../assets/Toulouse_ambiance-34_HD.jpg'
import CARTE_FRANCE from '../assets/Locations-France_icon-RGB-fr.png'

const pastillesStats = [
  { num: '2 min', lbl: 'à pied séparent la Maison de l’hôpital' },
  { num: '18 000', lbl: 'familles accueillies depuis 2005' },
  { num: '392 nuits', lbl: 'le séjour le plus long' },
  { num: '9', lbl: 'salariés engagés au quotidien' },
  { num: '1 235', lbl: 'séjours en 2025' },
  { num: '900', lbl: 'familles accompagnées en 2025' },
]

export default function LaMaison() {
  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
        padding: '32px 24px 100px',
      }}
    >
      <SubpageHeader
        eyebrow="Présentation"
        title="La Maison Ronald McDonald de Toulouse"
      />

      {/* MAISON RONALD MCDONALD FRANCE */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div className="eyebrow" style={{ color: 'var(--rose-deep)' }}>
            Un réseau national engagé
          </div>
          <h2
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontWeight: 600,
              fontSize: '28px',
              color: 'var(--charcoal)',
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            Maison Ronald McDonald France
          </h2>
          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '18.5px',
              lineHeight: 1.65,
              color: 'var(--charcoal-soft)',
              margin: 0,
            }}
          >
            Depuis plus de 30 ans, Maison Ronald McDonald France a pour mission de faire qu'aucun
            enfant hospitalisé ne soit privé de sa famille, grâce à ses 10 Maisons et sa Parenthèse
            Ronald McDonald situées à moins de 5 minutes à pied des hôpitaux pédiatriques. Ces
            établissements accueillent les familles d'enfants hospitalisés et leur permettent de
            rester au plus près de leurs enfants, en préservant le noyau familial dans ces
            situations difficiles.
          </p>
          <div
            style={{
              background: 'var(--white)',
              borderLeft: '4px solid var(--gold)',
              padding: '16px 20px',
              borderRadius: '0 10px 10px 0',
              boxShadow: '0 2px 8px rgba(58,48,42,.06)',
            }}
          >
            <p
              style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '18px',
                fontStyle: 'italic',
                color: 'var(--charcoal)',
                margin: 0,
              }}
            >
              À ce jour, les Maisons Ronald McDonald couvrent environ <strong>40%</strong> des
              solutions d'hébergement des familles d'enfants hospitalisés en France.
            </p>
          </div>
        </div>

        <div
          style={{
            height: '360px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(58,48,42,.1)',
            background: 'var(--white)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <img
            src={CARTE_FRANCE}
            alt="Implantation des Maisons Ronald McDonald en France"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </section>

      {/* LA MAISON RONALD MCDONALD DE TOULOUSE */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '64px',
        }}
      >
        <div
          style={{
            height: '360px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(58,48,42,.1)',
            order: 2,
          }}
        >
          <img
            src={AMBIANCE_TOULOUSE}
            alt="La Maison Ronald McDonald de Toulouse"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', order: 1 }}>
          <div className="eyebrow" style={{ color: 'var(--gold-dark)' }}>
            À Toulouse depuis 2005
          </div>
          <h2
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontWeight: 600,
              fontSize: '28px',
              color: 'var(--charcoal)',
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            La Maison Ronald McDonald de Toulouse
          </h2>
          <div
            style={{
              fontFamily: 'EB Garamond, serif',
              fontStyle: 'italic',
              fontSize: '21px',
              color: 'var(--rose-deep)',
            }}
          >
            « Un lieu de vie comme à la Maison »
          </div>
          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '18.5px',
              lineHeight: 1.65,
              color: 'var(--charcoal-soft)',
              margin: 0,
            }}
          >
            La Maison Ronald McDonald de Toulouse, gérée par l'association Dessine-moi une Maison,
            a ouvert ses portes en 2005. En 20 ans, elle a accueilli plus de 18 000 familles et les
            a accompagnées durant toute la durée de l'hospitalisation de leurs enfants. Accompagnées
            par une équipe de 9 salariés engagés, les familles y trouvent une parenthèse de
            réconfort pour traverser l'épreuve de l'hospitalisation.
          </p>
        </div>
      </section>

      {/* NOTRE MISSION */}
      <section
        style={{
          background: 'var(--white)',
          borderRadius: '16px',
          padding: '40px 32px',
          textAlign: 'center',
          boxShadow: '0 4px 18px rgba(58,48,42,.08)',
          marginBottom: '64px',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--rose-deep)', marginBottom: '8px' }}>
          Notre raison d'être
        </div>
        <h2
          style={{
            fontFamily: '"The Seasons", "Playfair Display", serif',
            fontSize: '26px',
            color: 'var(--charcoal)',
            margin: '0 0 14px',
          }}
        >
          Notre mission
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <HeartDivider />
        </div>
        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '22px',
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: 'var(--charcoal)',
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          « Prendre soin des familles et maintenir le lien familial durant l'hospitalisation de leur enfant. »
        </p>
      </section>

      {/* LA MAISON EN CHIFFRES */}
      <section style={{ marginBottom: '64px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="eyebrow" style={{ color: 'var(--rose-deep)', marginBottom: '6px' }}>
            Impact &amp; Activité
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
            La Maison en chiffres
          </h2>
        </div>

        <div className="pastilles-grid">
          {pastillesStats.map((item, index) => (
            <div className="pastille" key={index}>
              <div className="num">{item.num}</div>
              <div className="lbl">{item.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAS DE PAGE */}
      <section
        style={{
          textAlign: 'center',
          background: 'var(--cream)',
          borderRadius: '16px',
          padding: '44px 28px',
          boxShadow: '0 4px 16px rgba(58,48,42,.06)',
        }}
      >
        <h3
          style={{
            fontFamily: '"The Seasons", "Playfair Display", serif',
            fontSize: '24px',
            color: 'var(--charcoal)',
            margin: '0 0 16px',
          }}
        >
          Vous souhaitez soutenir notre action ?
        </h3>
        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '18px',
            color: 'var(--charcoal-soft)',
            maxWidth: '600px',
            margin: '0 auto 24px',
          }}
        >
          Chaque contribution permet d'offrir aux familles d'enfants hospitalisés le réconfort et
          la proximité dont elles ont tant besoin.
        </p>
        <a
          href="https://www.helloasso.com/associations/dessine-moi-une-maison/formulaires/6"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold"
          style={{ fontSize: '15px', padding: '14px 34px' }}
        >
          Je soutiens la Maison
        </a>
      </section>
    </div>
  )
}
