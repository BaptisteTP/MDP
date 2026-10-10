import { SubpageHeader } from '../components/SubpageHeader'
import { HeartDivider } from '../components/Signature'
import SALLE_ACCUEIL from '../assets/Toulouse_archi-14_HD.jpg'

const programme = [
  { time: 'À partir de 18h30', text: 'Accueil apéritif' },
  { time: '19h00 – 20h00', text: 'Collecte de dons' },
  { time: '20h30 – 22h30', text: 'Cocktail dînatoire, animations & vente aux enchères' },
]

export default function DinerGala() {
  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
        padding: '32px 24px 100px',
      }}
    >
      <SubpageHeader
        eyebrow="Soirée caritative 2026"
        title="Au cœur des couleurs"
      />

      {/* CHAPÔ */}
      <section
        style={{
          background: 'var(--white)',
          borderRadius: '16px',
          padding: '40px 36px',
          boxShadow: '0 4px 18px rgba(58, 48, 42, 0.08)',
          marginBottom: '56px',
          textAlign: 'center',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--gold-dark)', marginBottom: '8px' }}>
          1ère Soirée caritative
        </div>
        <h1
          style={{
            fontFamily: '"The Seasons", "Playfair Display", serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 38px)',
            color: 'var(--rose-deep)',
            margin: '0 0 12px',
          }}
        >
          AU CŒUR DES COULEURS
        </h1>
        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '20px',
            fontStyle: 'italic',
            color: 'var(--charcoal-soft)',
            maxWidth: '780px',
            margin: '0 auto 20px',
            lineHeight: 1.5,
          }}
        >
          1ère Soirée caritative de la Maison Ronald McDonald de Toulouse.
          <br />
          Le 24 novembre 2026, aux Espaces du Stadium de Toulouse.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HeartDivider />
        </div>
      </section>

      {/* AU PROGRAMME */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'flex-start',
          marginBottom: '64px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="eyebrow" style={{ color: 'var(--rose-deep)' }}>
            Déroulé
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
            Au programme de la soirée
          </h2>
          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--charcoal-soft)',
              margin: 0,
            }}
          >
            Une soirée prestigieuse, solidaire et festive réunissant acteurs du territoire,
            entreprises et bienfaiteurs autour d’une même cause.
          </p>
          <div style={{ marginTop: '12px' }}>
            <a
              href="https://www.helloasso.com/associations/dessine-moi-une-maison/evenements/soiree-caritative-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Je m'inscris à la soirée
            </a>
          </div>
        </div>

        {/* TIMELINE */}
        <div
          style={{
            background: 'var(--white)',
            borderRadius: '16px',
            padding: '36px 30px',
            boxShadow: '0 4px 18px rgba(58, 48, 42, 0.08)',
          }}
        >
          <div className="timeline">
            {programme.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="tl-time">{item.time}</div>
                <div className="tl-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LE PROJET 2026 FINANCÉ GRÂCE À VOTRE GÉNÉROSITÉ */}
      <section
        style={{
          background: 'var(--cream)',
          borderRadius: '18px',
          padding: '40px 32px',
          marginBottom: '64px',
          boxShadow: '0 4px 16px rgba(58, 48, 42, 0.06)',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '32px' }}>
          <div className="eyebrow" style={{ color: 'var(--gold-dark)', marginBottom: '8px' }}>
            Projet 2026
          </div>
          <h2
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontWeight: 600,
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              color: 'var(--charcoal)',
              margin: '0 0 16px',
              lineHeight: 1.25,
            }}
          >
            Le projet 2026 financé grâce à votre générosité — un espace dédié à l’accueil des familles
          </h2>
          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '19px',
              lineHeight: 1.65,
              color: 'var(--charcoal-soft)',
              margin: 0,
            }}
          >
            L'arrivée à la Maison est souvent un moment difficile pour une famille. La nouvelle
            zone d'accueil, au cœur de la Maison, offrira un espace dédié pour recevoir chaque
            famille avec plus de confidentialité et d’intimité.
          </p>
        </div>

        {/* EMPLACEMENT VIDÉO DU PROJET AVEC PHOTO SALLE D'ACCUEIL ACTUELLE */}
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(58, 48, 42, 0.14)',
            maxWidth: '820px',
            margin: '0 auto',
            height: '420px',
            background: 'var(--charcoal)',
          }}
        >
          <img
            src={SALLE_ACCUEIL}
            alt="Salle d'accueil actuelle de la Maison Ronald McDonald"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(transparent, rgba(58, 48, 42, 0.92))',
              padding: '24px 28px',
              color: 'var(--white)',
            }}
          >
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--rose-pale)',
                marginBottom: '4px',
              }}
            >
              Salle d'accueil actuelle
            </div>
            <p
              style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '16px',
                margin: 0,
                color: '#F9F5EC',
              }}
            >
              Emplacement dédié à la vidéo de présentation du futur projet d’accueil (en cours de réalisation).
            </p>
          </div>
        </div>
      </section>

      {/* COMMENT SE DÉROULE LA COLLECTE DE DONS ? */}
      <section
        style={{
          background: 'var(--white)',
          borderRadius: '16px',
          padding: '40px 36px',
          boxShadow: '0 4px 18px rgba(58, 48, 42, 0.08)',
          marginBottom: '64px',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--rose-deep)', marginBottom: '8px' }}>
          Mécanisme solidaire
        </div>
        <h2
          style={{
            fontFamily: '"The Seasons", "Playfair Display", serif',
            fontWeight: 600,
            fontSize: '28px',
            color: 'var(--charcoal)',
            margin: '0 0 16px',
          }}
        >
          Comment se déroule la collecte de dons ?
        </h2>
        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '18.5px',
            lineHeight: 1.7,
            color: 'var(--charcoal-soft)',
            margin: '0 0 24px',
          }}
        >
          Chaque participant recevra à son arrivée un numéro unique associé à un code couleur. La
          collecte de dons s’organisera par palier allant de <strong>20€ à 5 000€</strong>. Chaque
          participant lèvera son numéro pour contribuer à la levée de fonds qui financera le projet 2026.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            padding: '20px',
            background: 'var(--cream-light)',
            borderRadius: '12px',
          }}
        >
          <div style={{ textAlign: 'center', padding: '12px' }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '13px', color: 'var(--gold-dark)', textTransform: 'uppercase' }}>
              1. Accueil
            </div>
            <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '16px', color: 'var(--charcoal-soft)', marginTop: '4px' }}>
              Remise de votre numéro unique &amp; code couleur
            </div>
          </div>
          <div style={{ textAlign: 'center', padding: '12px' }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '13px', color: 'var(--rose-deep)', textTransform: 'uppercase' }}>
              2. Paliers
            </div>
            <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '16px', color: 'var(--charcoal-soft)', marginTop: '4px' }}>
              Dons par étapes de 20€ à 5 000€
            </div>
          </div>
          <div style={{ textAlign: 'center', padding: '12px' }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '13px', color: 'var(--charcoal)', textTransform: 'uppercase' }}>
              3. Levée de fonds
            </div>
            <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '16px', color: 'var(--charcoal-soft)', marginTop: '4px' }}>
              Financement direct de la nouvelle zone d'accueil
            </div>
          </div>
        </div>
      </section>

      {/* VOS DONS SONT-ILS DÉFISCALISABLES ? */}
      <section style={{ marginBottom: '64px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="eyebrow" style={{ color: 'var(--rose-deep)', marginBottom: '6px' }}>
            Avantages fiscaux
          </div>
          <h2
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontWeight: 600,
              fontSize: '28px',
              color: 'var(--charcoal)',
              margin: '0 0 12px',
            }}
          >
            Vos dons sont-ils défiscalisables ?
          </h2>
          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '18px',
              color: 'var(--charcoal-soft)',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            La contribution que vous faites lors de la soirée AU CŒUR DES COULEURS — 1ère soirée
            caritative au profit de la Maison Ronald McDonald de Toulouse, vous donne droit à une
            réduction annuelle d’impôt :
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {/* ENTREPRISES */}
          <div
            style={{
              background: 'var(--white)',
              borderRadius: '16px',
              padding: '32px 28px',
              boxShadow: '0 4px 16px rgba(58, 48, 42, 0.08)',
              borderTop: '4px solid var(--gold)',
            }}
          >
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--gold-dark)',
                marginBottom: '10px',
              }}
            >
              Pour les entreprises
            </div>
            <p
              style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '18px',
                lineHeight: 1.6,
                color: 'var(--charcoal)',
                margin: '0 0 14px',
              }}
            >
              Réduction d'impôt équivalente à <strong>60%</strong> du montant du don, dans la limite
              de 5‰ du chiffre d'affaires.
            </p>
            <div
              style={{
                background: 'var(--cream-light)',
                padding: '14px 18px',
                borderRadius: '8px',
                fontFamily: 'EB Garamond, serif',
                fontSize: '16px',
                color: 'var(--charcoal-soft)',
                fontStyle: 'italic',
              }}
            >
              Exemple : pour un don de 1 000€, 600€ sont déduits de l'impôt, soit un <strong>coût réel de 400€</strong> pour l'entreprise.
            </div>
          </div>

          {/* PARTICULIERS */}
          <div
            style={{
              background: 'var(--white)',
              borderRadius: '16px',
              padding: '32px 28px',
              boxShadow: '0 4px 16px rgba(58, 48, 42, 0.08)',
              borderTop: '4px solid var(--rose-deep)',
            }}
          >
            <div
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--rose-deep)',
                marginBottom: '10px',
              }}
            >
              Pour les particuliers
            </div>
            <p
              style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '18px',
                lineHeight: 1.6,
                color: 'var(--charcoal)',
                margin: '0 0 14px',
              }}
            >
              Réduction d'impôt sur le revenu de <strong>66%</strong> du montant versé, dans la
              limite de 20% du revenu imposable.
            </p>
            <div
              style={{
                background: 'var(--cream-light)',
                padding: '14px 18px',
                borderRadius: '8px',
                fontFamily: 'EB Garamond, serif',
                fontSize: '16px',
                color: 'var(--charcoal-soft)',
                fontStyle: 'italic',
              }}
            >
              Exemple : pour un don de 100€, 66€ sont déduits de l'impôt, soit un <strong>coût réel de 34€</strong>.
            </div>
          </div>
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
            fontSize: '26px',
            color: 'var(--charcoal)',
            margin: '0 0 12px',
          }}
        >
          Rejoignez-nous le 24 novembre 2026
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
          Réservez votre place dès aujourd'hui sur notre billetterie en ligne HelloAsso.
        </p>
        <a
          href="https://www.helloasso.com/associations/dessine-moi-une-maison/evenements/soiree-caritative-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold"
          style={{ fontSize: '15px', padding: '14px 34px' }}
        >
          Je m'inscris
        </a>
      </section>
    </div>
  )
}
