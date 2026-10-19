import { SubpageHeader } from '../components/SubpageHeader'
import { HeartDivider } from '../components/Signature'
import { Link } from 'react-router-dom'

export default function Inscription() {
  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
        padding: '32px 24px 100px',
      }}
    >
      <SubpageHeader eyebrow="Billetterie" title="Inscription" />

      <section
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '56px',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--rose-deep)', marginBottom: '8px' }}>
          Participer à la soirée
        </div>
        <h1
          style={{
            fontFamily: '"The Seasons", "Playfair Display", serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 38px)',
            color: 'var(--charcoal)',
            margin: '0 0 16px',
          }}
        >
          Pour vous inscrire
        </h1>

        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '20px',
            lineHeight: 1.6,
            color: 'var(--charcoal-soft)',
            margin: '0 auto 12px',
          }}
        >
          Achetez votre place pour la <strong>1ère Soirée caritative</strong> de la Maison Ronald McDonald de Toulouse.
        </p>

        <div
          style={{
            display: 'inline-block',
            background: 'var(--rose-pale)',
            color: 'var(--rose-deep)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '13.5px',
            padding: '8px 18px',
            borderRadius: '20px',
            margin: '0 auto 20px',
            letterSpacing: '0.02em',
          }}
        >
          Pour participer à la soirée : inscription obligatoire
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HeartDivider />
        </div>
      </section>

      {/* CARTE TARIF BILLETTERIE */}
      <section
        style={{
          maxWidth: '620px',
          margin: '0 auto 64px',
          background: 'var(--white)',
          borderRadius: '20px',
          padding: '48px 36px',
          textAlign: 'center',
          boxShadow: '0 8px 30px rgba(58, 48, 42, 0.1)',
          borderTop: '5px solid var(--gold)',
        }}
      >
        <div className="eyebrow" style={{ color: 'var(--gold-dark)', marginBottom: '12px' }}>
          Tarif unique
        </div>

        <div
          style={{
            fontFamily: '"The Seasons", "Playfair Display", serif',
            fontWeight: 700,
            fontSize: '56px',
            color: 'var(--rose-deep)',
            lineHeight: 1,
            marginBottom: '8px',
          }}
        >
          120€
          <span
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '20px',
              fontWeight: 400,
              color: 'var(--charcoal-soft)',
              marginLeft: '6px',
            }}
          >
            / place
          </span>
        </div>

        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '17px',
            color: 'var(--charcoal-soft)',
            fontStyle: 'italic',
            margin: '16px auto 28px',
            maxWidth: '460px',
            lineHeight: 1.5,
          }}
        >
          Ce billet ne donne pas droit à un reçu fiscal. Seuls les dons peuvent bénéficier d'une défiscalisation.
        </p>

        <a
          href="https://www.helloasso.com/associations/dessine-moi-une-maison/evenements/soiree-caritative-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold"
          style={{
            fontSize: '16px',
            padding: '16px 40px',
            boxShadow: '0 4px 15px rgba(185,143,83,.35)',
          }}
        >
          Accéder à la billetterie en ligne
        </a>
      </section>

      {/* ENCART RAPPEL DATE & INFORMATIONS */}
      <section
        style={{
          background: 'var(--cream)',
          borderRadius: '16px',
          padding: '36px 32px',
          maxWidth: '780px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontFamily: '"The Seasons", "Playfair Display", serif',
            fontSize: '22px',
            color: 'var(--charcoal)',
            margin: '0 0 10px',
          }}
        >
          Le 24 novembre 2026 dès 18h30
        </h3>
        <p
          style={{
            fontFamily: 'EB Garamond, serif',
            fontSize: '17.5px',
            color: 'var(--charcoal-soft)',
            margin: '0 0 18px',
          }}
        >
          Les Espaces du Stadium Toulouse FC - 1 allée Gabriel Biénès, 31400 Toulouse
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/infos-pratiques" className="btn btn-ghost" style={{ fontSize: '13px' }}>
            Consulter les infos pratiques
          </Link>
          <Link to="/don" className="btn btn-outline" style={{ fontSize: '13px' }}>
            Faire un don défiscalisable
          </Link>
        </div>
      </section>
    </div>
  )
}
