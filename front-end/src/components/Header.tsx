import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LOGO_TOULOUSE from '../assets/logo-maison-toulouse.png'
import LOGO_ASSO from '../assets/dessinemoi.webp'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/la-maison', label: 'Présentation de la Maison' },
  { href: '/soiree-gala', label: 'Soirée caritative 2026' },
  { href: '/inscription', label: 'Inscription' },
  { href: '/infos-pratiques', label: 'Infos pratiques' },
]

export default function Header() {
  const { pathname } = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      style={{
        background: 'var(--cream-light)',
        borderBottom: '1px solid #E4D9C8',
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* LOGOS : Maison Toulouse + Association Dessine-moi une Maison */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <img
            src={LOGO_TOULOUSE}
            alt="Maison Ronald McDonald Toulouse"
            style={{
              height: '52px',
              width: 'auto',
              maxHeight: '52px',
              objectFit: 'contain',
            }}
          />
          <span
            style={{
              width: '1px',
              height: '34px',
              background: '#D9CFC4',
              display: 'inline-block',
            }}
          />
          <img
            src={LOGO_ASSO}
            alt="Association Dessine-moi une Maison"
            style={{
              height: '46px',
              width: 'auto',
              maxHeight: '46px',
              objectFit: 'contain',
            }}
          />
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav
          className="hidden lg:flex"
          style={{
            alignItems: 'center',
            gap: '22px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  color: isActive ? 'var(--rose-deep)' : 'var(--charcoal)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                  borderBottom: isActive
                    ? '2px solid var(--rose-deep)'
                    : '2px solid transparent',
                  paddingBottom: '4px',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--rose-deep)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive
                    ? 'var(--rose-deep)'
                    : 'var(--charcoal)')
                }
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* BOUTON DÉTACHÉ "FAIRE UN DON" & BOUTON MENU MOBILE */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="https://www.helloasso.com/associations/dessine-moi-une-maison/formulaires/6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{
              padding: '10px 22px',
              fontSize: '13px',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 6px rgba(185,143,83,.25)',
            }}
          >
            Faire un don
          </a>

          {/* Bouton burger mobile */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            style={{
              background: 'transparent',
              border: '1px solid #D9CFC4',
              borderRadius: '8px',
              padding: '8px 10px',
              cursor: 'pointer',
              color: 'var(--charcoal)',
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden"
          style={{
            background: 'var(--white)',
            borderTop: '1px solid #E4D9C8',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color:
                  pathname === link.href ? 'var(--rose-deep)' : 'var(--charcoal)',
                textDecoration: 'none',
                padding: '8px 0',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/don"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: 'var(--gold-dark)',
              textDecoration: 'none',
              padding: '8px 0',
            }}
          >
            Avantages fiscaux &amp; mécénat
          </Link>
        </div>
      )}
    </header>
  )
}
