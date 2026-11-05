import { useState } from 'react'
import { SubpageHeader } from '../components/SubpageHeader'
import { BACKEND_URL } from '../services/socket'

const PRESET_AMOUNTS = [20, 50, 100, 250, 500, 1000]

export default function Promesse() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    montant: '',
  })
  const [acceptedRgpd, setAcceptedRgpd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMessage(null)

    if (!acceptedRgpd) {
      setErrorMessage('Veuillez accepter les mentions de confidentialité RGPD pour valider votre promesse.')
      return
    }

    const amountNum = parseFloat(form.montant)
    if (isNaN(amountNum) || amountNum <= 0) {
      setErrorMessage('Veuillez sélectionner ou saisir un montant supérieur à 0 €.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${BACKEND_URL}/api/donations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: form.nom,
          prenom: form.prenom,
          email: form.email,
          telephone: form.telephone,
          montant: amountNum,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'enregistrement de votre promesse.')
      }

      setSubmitted(true)
    } catch (err: any) {
      setErrorMessage(err.message || 'Une erreur est survenue lors de l\'envoi.')
    } finally {
      setLoading(false)
    }
  }

  function handleSelectPreset(val: number) {
    setForm(prev => ({ ...prev, montant: val.toString() }))
  }

  function handleReset() {
    setForm({ nom: '', prenom: '', email: '', telephone: '', montant: '' })
    setAcceptedRgpd(false)
    setSubmitted(false)
    setErrorMessage(null)
  }

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '32px 24px 100px' }}>
      <SubpageHeader eyebrow="Soirée Caritative 2026" title="Promesse de don" />

      <div
        style={{
          background: 'var(--white, #FFFFFF)',
          borderRadius: '20px',
          padding: '40px 36px',
          boxShadow: '0 4px 24px rgba(58, 48, 42, 0.08)',
          border: '1px solid #EFE8DE',
          marginTop: '20px',
        }}
      >
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 10px' }}>
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: '#ECFDF5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                margin: '0 auto 20px',
              }}
            >
              ✓
            </div>
            <h2
              style={{
                fontFamily: '"The Seasons", "Playfair Display", serif',
                fontSize: '30px',
                color: 'var(--rose-deep, #B83A4B)',
                margin: '0 0 16px',
              }}
            >
              Merci pour votre générosité !
            </h2>
            <p
              style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '20px',
                lineHeight: 1.6,
                color: 'var(--charcoal, #3A302A)',
                marginBottom: '14px',
              }}
            >
              Votre promesse de don a bien été transmise à l'équipe organisatrice.
            </p>
            <p
              style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '17px',
                color: 'var(--charcoal-soft, #6E6259)',
                marginBottom: '32px',
              }}
            >
              Vos informations restent strictement confidentielles et ne sont pas affichées publiquement.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-gold"
              style={{ padding: '14px 32px', fontSize: '15px' }}
            >
              Faire une nouvelle promesse
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <p
                style={{
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '18px',
                  lineHeight: 1.5,
                  color: 'var(--charcoal-soft, #6E6259)',
                  margin: 0,
                }}
              >
                Remplissez les informations ci-dessous pour enregistrer votre promesse de don. Vos données personnelles restent strictement confidentielles et ne sont jamais diffusées.
              </p>
            </div>

            {errorMessage && (
              <div
                style={{
                  background: '#FEF2F2',
                  border: '1px solid #F87171',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#991B1B',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '13px',
                }}
              >
                {errorMessage}
              </div>
            )}

            {/* CHOIX DU MONTANT */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--charcoal, #3A302A)',
                  marginBottom: '10px',
                }}
              >
                Montant de la promesse de don (€) *
              </label>

              {/* Boutons de montants rapides */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                  gap: '10px',
                  marginBottom: '12px',
                }}
              >
                {PRESET_AMOUNTS.map(val => (
                  <button
                    type="button"
                    key={val}
                    onClick={() => handleSelectPreset(val)}
                    style={{
                      padding: '10px',
                      borderRadius: '10px',
                      border:
                        form.montant === val.toString()
                          ? '2px solid var(--rose-deep, #B83A4B)'
                          : '1px solid #D9CFC4',
                      background: form.montant === val.toString() ? '#FDF2F4' : '#FFFFFF',
                      color:
                        form.montant === val.toString()
                          ? 'var(--rose-deep, #B83A4B)'
                          : 'var(--charcoal, #3A302A)',
                      fontWeight: 600,
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {val} €
                  </button>
                ))}
              </div>

              {/* Saisie montant libre */}
              <input
                type="number"
                min="1"
                step="any"
                placeholder="Ou saisissez un montant libre (€)"
                value={form.montant}
                onChange={e => setForm(f => ({ ...f, montant: e.target.value }))}
                required
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid #D9CFC4',
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '18px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* PRÉNOM & NOM */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--charcoal, #3A302A)',
                    marginBottom: '6px',
                  }}
                >
                  Prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Votre prénom"
                  value={form.prenom}
                  onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid #D9CFC4',
                    fontFamily: 'EB Garamond, serif',
                    fontSize: '17px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--charcoal, #3A302A)',
                    marginBottom: '6px',
                  }}
                >
                  Nom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Votre nom"
                  value={form.nom}
                  onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid #D9CFC4',
                    fontFamily: 'EB Garamond, serif',
                    fontSize: '17px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            {/* NUMÉRO DE TÉLÉPHONE */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: 'var(--charcoal, #3A302A)',
                  marginBottom: '6px',
                }}
              >
                Numéro de téléphone *
              </label>
              <input
                type="tel"
                required
                placeholder="ex. 06 12 34 56 78"
                value={form.telephone}
                onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid #D9CFC4',
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '17px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* ADRESSE EMAIL (OPTIONNELLE) */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: 'var(--charcoal, #3A302A)',
                  marginBottom: '6px',
                }}
              >
                Adresse email <span style={{ color: '#8C827A', fontWeight: 400 }}>(optionnel - pour reçu fiscal)</span>
              </label>
              <input
                type="email"
                placeholder="votre.email@exemple.fr"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid #D9CFC4',
                  fontFamily: 'EB Garamond, serif',
                  fontSize: '17px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* CONSENTEMENT RGPD */}
            <label
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                cursor: 'pointer',
                marginTop: '4px',
              }}
            >
              <input
                type="checkbox"
                checked={acceptedRgpd}
                onChange={e => setAcceptedRgpd(e.target.checked)}
                style={{ marginTop: '3px', accentColor: 'var(--rose-deep, #B83A4B)', cursor: 'pointer' }}
              />
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12px',
                  color: 'var(--charcoal-soft, #6E6259)',
                  lineHeight: 1.45,
                }}
              >
                J'accepte que mes coordonnées soient enregistrées pour la gestion de ma promesse de don par l'association (RGPD). Les données restent strictement confidentielles et ne sont transmises à aucun tiers ni affichées en public. *
              </span>
            </label>

            <button
              type="submit"
              disabled={loading || !acceptedRgpd}
              className="btn btn-gold"
              style={{
                width: '100%',
                padding: '15px 20px',
                fontSize: '15px',
                fontWeight: 600,
                opacity: acceptedRgpd && !loading ? 1 : 0.5,
                cursor: acceptedRgpd && !loading ? 'pointer' : 'not-allowed',
                boxShadow: '0 4px 14px rgba(185,143,83,.35)',
                marginTop: '8px',
              }}
            >
              {loading ? 'Validation en cours...' : 'Valider ma promesse de don'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
