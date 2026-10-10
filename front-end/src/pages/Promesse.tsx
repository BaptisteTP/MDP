import { useState } from 'react'
import { SubpageHeader } from '../components/SubpageHeader'

function InputField({
  label,
  type = 'text',
  value,
  onChange,
  required,
}: {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '12.5px',
          letterSpacing: '0.05em',
          color: 'var(--charcoal)',
          fontWeight: 600,
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        style={{
          background: 'var(--white)',
          border: '1px solid #E4D9C8',
          borderRadius: '10px',
          padding: '12px 14px',
          fontFamily: 'EB Garamond, serif',
          fontSize: '17px',
          color: 'var(--charcoal)',
          outline: 'none',
        }}
      />
    </div>
  )
}

export default function Promesse() {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', montant: '' })
  const [accepted, setAccepted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!accepted) return
    setSubmitted(true)
  }

  return (
    <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 32px 120px' }}>

      <SubpageHeader eyebrow="Don" title="Faire une promesse de don" />

      <section
        style={{
          display: 'flex',
          gap: '48px',
          alignItems: 'flex-start',
          padding: '60px 0',
          flexWrap: 'wrap',
        }}
      >
        {/* Info block */}
        <div
          style={{
            flex: '1 1 320px',
            background: 'var(--white)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 2px 10px rgba(58,48,42,.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div className="eyebrow" style={{ color: 'var(--rose-deep)' }}>Informations</div>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
              fontSize: '24px',
              color: 'var(--charcoal)',
              margin: 0,
            }}
          >
            À propos de la promesse
          </h2>
          <p
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '17px',
              lineHeight: 1.55,
              color: 'var(--charcoal-soft)',
              margin: 0,
            }}
          >
            Une promesse de don est un engagement moral, non contractuel. Vous serez invité(e) à
            finaliser votre don dans les prochains jours.
          </p>
          <ul
            style={{
              fontFamily: 'EB Garamond, serif',
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'var(--charcoal-soft)',
              paddingLeft: '20px',
              margin: 0,
            }}
          >
            <li>Aucune obligation légale de finalisation</li>
            <li>Elle reste confidentielle</li>
            <li>Elle peut être annulée sur demande</li>
          </ul>
        </div>

        {/* Form */}
        <div style={{ flex: '1 1 420px' }}>
          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', padding: '60px 0' }}>
              <p
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '26px',
                  fontWeight: 600,
                  color: 'var(--rose-deep)',
                  margin: 0,
                }}
              >
                Merci pour votre promesse de don !
              </p>
              <p
                style={{
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '18px',
                  color: 'var(--charcoal-soft)',
                  textAlign: 'center',
                  margin: 0,
                }}
              >
                Vous serez contacté(e) prochainement pour finaliser votre don.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InputField
                label="Nom"
                value={form.nom}
                onChange={v => setForm(f => ({ ...f, nom: v }))}
                required
              />
              <InputField
                label="Prénom"
                value={form.prenom}
                onChange={v => setForm(f => ({ ...f, prenom: v }))}
                required
              />
              <InputField
                label="Email"
                type="email"
                value={form.email}
                onChange={v => setForm(f => ({ ...f, email: v }))}
                required
              />
              <InputField
                label="Montant de la promesse de don (€)"
                type="number"
                value={form.montant}
                onChange={v => setForm(f => ({ ...f, montant: v }))}
                required
              />

              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  cursor: 'pointer',
                  marginTop: '6px',
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '17px',
                  color: 'var(--charcoal-soft)',
                }}
              >
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={e => setAccepted(e.target.checked)}
                  style={{ marginTop: '4px', accentColor: 'var(--rose-deep)' }}
                />
                <span>J'accepte les conditions d'utilisation</span>
              </label>

              <button
                type="submit"
                disabled={!accepted}
                className="btn btn-gold"
                style={{
                  marginTop: '8px',
                  alignSelf: 'flex-start',
                  opacity: accepted ? 1 : 0.4,
                  cursor: accepted ? 'pointer' : 'not-allowed',
                }}
              >
                Envoyer
              </button>
            </form>
          )}
        </div>

      </section>
    </div>
  )
}
