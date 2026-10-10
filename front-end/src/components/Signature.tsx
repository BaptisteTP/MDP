export function HeartDivider() {
  return (
    <div className="heart-divider">
      <span className="line" />
      <svg viewBox="0 0 32 29" aria-hidden="true">
        <path d="M16 29C7 22 0 16.5 0 9.6 0 4.3 4.2 0 9.4 0c3 0 5.5 1.5 6.6 3.8C17.1 1.5 19.6 0 22.6 0 27.8 0 32 4.3 32 9.6 32 16.5 25 22 16 29z" />
      </svg>
      <span className="line" />
    </div>
  )
}

export function HouseCard({
  eyebrow,
  title,
  italic,
  children,
  className = '',
}: {
  eyebrow: string
  title: string
  italic?: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={`house-card ${className}`}>
      <div className="house-roof" />
      <div
        className="eyebrow"
        style={{ fontSize: '10px', letterSpacing: '0.14em', marginBottom: '6px' }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 600,
          fontSize: '20px',
          color: 'var(--rose-deep)',
          margin: '6px 0 14px',
        }}
      >
        {title}
      </div>
      <HeartDivider />
      {italic && (
        <div
          style={{
            fontFamily: 'EB Garamond, serif',
            fontStyle: 'italic',
            fontSize: '13px',
            color: 'var(--charcoal-soft)',
          }}
        >
          {italic}
        </div>
      )}
      {children}
    </div>
  )
}
