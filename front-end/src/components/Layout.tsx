import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--cream-light)' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />

      {/* Floating CTA bar on desktop */}
      <div
        className="hidden md:flex"
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '24px',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 40,
        }}
      >
        <a
          href="https://www.helloasso.com/associations/dessine-moi-une-maison/formulaires/6"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{
            padding: '10px 20px',
            fontSize: '13px',
            background: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 4px 14px rgba(58, 48, 42, 0.12)',
            backdropFilter: 'blur(6px)',
          }}
        >
          Je fais un don
        </a>
        <a
          href="https://www.helloasso.com/associations/dessine-moi-une-maison/evenements/soiree-caritative-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold"
          style={{
            padding: '10px 20px',
            fontSize: '13px',
            boxShadow: '0 4px 14px rgba(185, 143, 83, 0.35)',
          }}
        >
          Je m'inscris
        </a>
      </div>
    </div>
  )
}
