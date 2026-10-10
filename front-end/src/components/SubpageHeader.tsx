export function SubpageHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="subpage-header" style={{ maxWidth: '1080px', margin: '0 auto 48px' }}>
      <div className="header-content">
        <div className="eyebrow" style={{ fontSize: '11.5px', color: 'var(--gold-dark)' }}>
          {eyebrow}
        </div>
        <h3
          style={{
            fontFamily: '"The Seasons", "Playfair Display", serif',
            fontWeight: 600,
            fontSize: 'clamp(24px, 4vw, 34px)',
            color: 'var(--rose-deep)',
            margin: '8px 0 0',
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
      </div>
      <div className="header-ribbon" />
    </div>
  )
}
