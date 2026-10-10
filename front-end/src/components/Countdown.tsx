import { useEffect, useState } from 'react'

const EVENT_DATE = new Date('2026-11-24T18:30:00+01:00').getTime()

function getTimeRemaining() {
  const now = new Date().getTime()
  const difference = EVENT_DATE - now

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      finished: true,
    }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    finished: false,
  }
}

export function Countdown() {
  const [time, setTime] = useState(getTimeRemaining())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (time.finished) {
    return (
      <div
        style={{
          textAlign: 'center',
          fontFamily: '"Playfair Display", serif',
          fontSize: '24px',
          fontWeight: 600,
          color: 'var(--rose-deep)',
        }}
      >
        La soirée a commencé !
      </div>
    )
  }

  const formatNumber = (num: number) => String(num).padStart(2, '0')

  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <div className="countdown-cell">
        <div className="n">{formatNumber(time.days)}</div>
        <div className="u">Jours</div>
      </div>
      <div className="countdown-cell">
        <div className="n">{formatNumber(time.hours)}</div>
        <div className="u">Heures</div>
      </div>
      <div className="countdown-cell">
        <div className="n">{formatNumber(time.minutes)}</div>
        <div className="u">Minutes</div>
      </div>
      <div className="countdown-cell">
        <div className="n">{formatNumber(time.seconds)}</div>
        <div className="u">Secondes</div>
      </div>
    </div>
  )
}