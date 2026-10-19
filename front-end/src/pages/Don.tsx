import { SubpageHeader } from '../components/SubpageHeader'
import { HeartDivider } from '../components/Signature'

export default function Don() {
  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
        padding: '32px 24px 100px',
      }}
    >
      <SubpageHeader eyebrow="Mécénat &amp; Dons" title="Faire un don" />

      {/* CHAPÔ */}
      <section
        style={{
          maxWidth: '820px',
          margin: '0 auto 48px',
          textAlign: 'center',
          background: 'var(--white)',
          borderRadius: '16px',
          padding: '40px 36px',
          boxShadow: '0 4px 18px rgba(58, 48, 42, 0.08)',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--gold-dark)', marginBottom: '8px' }}>
          Soutien &amp; Défiscalisation
        </div>
        <h1
          style={{
            fontFamily: '"The Seasons", "Playfair Display", serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 38px)',
            color: 'var(--rose-deep)',
            margin: '0 0 16px',
          }}
        >
          AU CŒUR DES COULEURS
        </h1>

        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '20px',
            lineHeight: 1.6,
            color: 'var(--charcoal)',
            margin: '0 auto 20px',
          }}
        >
          Dans le cadre du mécénat, les contributions versées lors de la soirée AU CŒUR DES
          COULEURS - 1ère soirée caritative au profit de la Maison Ronald McDonald de Toulouse
          ouvrent droit à des avantages fiscaux.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HeartDivider />
        </div>
      </section>

      {/* BLOCS DÉFISCALISATION */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}
      >
        {/* ENTREPRISES */}
        <div
          style={{
            background: 'var(--white)',
            borderRadius: '16px',
            padding: '36px 30px',
            boxShadow: '0 4px 16px rgba(58, 48, 42, 0.08)',
            borderTop: '5px solid var(--gold)',
          }}
        >
          <div
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--gold-dark)',
              marginBottom: '10px',
            }}
          >
            Pour les entreprises
          </div>
          <h2
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontSize: '24px',
              color: 'var(--charcoal)',
              margin: '0 0 12px',
            }}
          >
            60% de réduction d'impôt
          </h2>
          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--charcoal-soft)',
              margin: '0 0 16px',
            }}
          >
            Réduction d'impôt équivalente à <strong>60%</strong> du montant du don, dans la limite
            de 5‰ du chiffre d'affaires.
          </p>
          <div
            style={{
              background: 'var(--cream-light)',
              padding: '16px 20px',
              borderRadius: '10px',
              fontFamily: 'EB Garamond, serif',
              fontSize: '16.5px',
              color: 'var(--charcoal)',
              fontStyle: 'italic',
            }}
          >
            Exemple : pour un don de <strong>1 000€</strong>, <strong>600€</strong> sont déduits de
            l'impôt, soit un coût réel de <strong>400€</strong> pour l'entreprise.
          </div>
        </div>

        {/* PARTICULIERS */}
        <div
          style={{
            background: 'var(--white)',
            borderRadius: '16px',
            padding: '36px 30px',
            boxShadow: '0 4px 16px rgba(58, 48, 42, 0.08)',
            borderTop: '5px solid var(--rose-deep)',
          }}
        >
          <div
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--rose-deep)',
              marginBottom: '10px',
            }}
          >
            Pour les particuliers
          </div>
          <h2
            style={{
              fontFamily: '"The Seasons", "Playfair Display", serif',
              fontSize: '24px',
              color: 'var(--charcoal)',
              margin: '0 0 12px',
            }}
          >
            66% de réduction d'impôt
          </h2>
          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '18px',
              lineHeight: 1.6,
              color: 'var(--charcoal-soft)',
              margin: '0 0 16px',
            }}
          >
            Réduction d'impôt sur le revenu de <strong>66%</strong> du montant versé, dans la limite
            de 20% du revenu imposable.
          </p>
          <div
            style={{
              background: 'var(--cream-light)',
              padding: '16px 20px',
              borderRadius: '10px',
              fontFamily: 'EB Garamond, serif',
              fontSize: '16.5px',
              color: 'var(--charcoal)',
              fontStyle: 'italic',
            }}
          >
            Exemple : pour un don de <strong>100€</strong>, <strong>66€</strong> sont déduits de
            l'impôt, soit un coût réel de <strong>34€</strong>.
          </div>
        </div>
      </section>

      {/* REÇU FISCAL & CTA */}
      <section
        style={{
          background: 'var(--cream)',
          borderRadius: '18px',
          padding: '44px 32px',
          textAlign: 'center',
          boxShadow: '0 4px 16px rgba(58, 48, 42, 0.06)',
          maxWidth: '780px',
          margin: '0 auto',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--gold-dark)', marginBottom: '8px' }}>
          Reçu fiscal
        </div>
        <h3
          style={{
            fontFamily: '"The Seasons", "Playfair Display", serif',
            fontSize: '24px',
            color: 'var(--charcoal)',
            margin: '0 0 14px',
          }}
        >
          Émission immédiate de votre reçu fiscal
        </h3>
        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '18.5px',
            color: 'var(--charcoal-soft)',
            margin: '0 auto 28px',
            maxWidth: '620px',
            lineHeight: 1.6,
          }}
        >
          Un reçu fiscal est adressé dès réception du règlement, à l'adresse indiquée par le
          donateur lors de sa contribution.
        </p>

        <a
          href="https://www.helloasso.com/associations/dessine-moi-une-maison/formulaires/6"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold"
          style={{
            fontSize: '16px',
            padding: '16px 40px',
            boxShadow: '0 4px 15px rgba(185,143,83,.35)',
          }}
        >
          Faire un don en ligne (HelloAsso)
        </a>
      </section>
    </div>
  )
}
