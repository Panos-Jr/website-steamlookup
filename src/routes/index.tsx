import { Link, createFileRoute } from '@tanstack/react-router'
import { SteamIcon } from '../components/icons'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// Icons as inline SVG components
function WikiIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

function DownloadIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function ShieldIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function SearchIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function LinkIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ZapIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function DiscordIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.057a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.104a13.201 13.201 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

function ChevronRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(16px)',
        background: 'rgba(13, 15, 20, 0.85)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ color: 'var(--steam-blue)' }}>
              <SteamIcon size={22} />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em' }}>
              Steam<span style={{ color: 'var(--steam-blue)' }}>Lookup</span>
            </span>
          </div>
          <a
            href="#download"
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: 13 }}
          >
            <DownloadIcon size={15} />
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: 140, paddingBottom: 100, overflow: 'hidden' }}>
        {/* Grid bg */}
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />

        {/* Glow orbs */}
        <div className="hero-glow" style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(77,157,224,0.18) 0%, transparent 70%)',
          top: -100,
          left: '50%',
          transform: 'translateX(-50%)',
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          {/* Badge */}
          <div className="fade-up fade-up-1" style={{ marginBottom: 28, display: 'flex', justifyContent: 'center' }}>
            <span className="badge" style={{
              background: 'var(--steam-blue-glow)',
              border: '1px solid rgba(77,157,224,0.25)',
              color: 'var(--steam-blue)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--steam-blue)', display: 'inline-block' }} />
              Free Windows App
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-up fade-up-2" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(42px, 8vw, 76px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            textAlign: 'center',
            margin: '0 0 20px',
            maxWidth: 820,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Every game detail,<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--steam-blue) 0%, #7ec8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              instantly.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="fade-up fade-up-3" style={{
            fontSize: 18,
            color: 'var(--text-secondary)',
            textAlign: 'center',
            maxWidth: 560,
            margin: '0 auto 44px',
            lineHeight: 1.65,
            fontWeight: 400,
          }}>
            Steam Lookup pulls live game data, DRM information, and download sources — with direct links to PCGamingWiki and Steam.
          </p>

          {/* CTA buttons */}
          <div className="fade-up fade-up-4" style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a href="https://github.com/Panos-Jr/SteamLookup/releases/download/v1.8/SteamLookup_setup.exe" className="btn-primary">
              <DownloadIcon size={18} />
              Download SteamLookup_setup.exe
            </a>
            <a href="#features" className="btn-secondary">
              See what it does
              <ChevronRightIcon size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="divider-label" style={{ marginBottom: 56 }}>
          What it does
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {[
            {
              icon: <SearchIcon size={20} />,
              title: 'Live Game Details',
              desc: 'Pulls real-time data straight from Steam — titles, IDs, release dates, publishers, and more. Always current, never stale.',
            },
            {
              icon: <ShieldIcon size={20} />,
              title: 'DRM Information',
              desc: 'Instantly see what DRM a game uses. Know before you buy or play — no surprises, no digging through forums.',
            },
            {
              icon: <DownloadIcon size={20} />,
              title: 'Download Sources',
              desc: 'Find available download sources aggregated in one place. Skip the searching — get straight to what you need.',
            },
            {
              icon: <WikiIcon size={20} />,
              title: 'Direct Links',
              desc: 'One click to the PCGamingWiki page or Steam store — exactly where you need to go, generated automatically per game.',
            },
            {
              icon: <ZapIcon size={20} />,
              title: 'Lightweight & Fast',
              desc: 'A single portable .exe with no installer, no bloat. Runs instantly on any Windows PC.',
            },
          ].map((f) => (
            <div key={f.title} className="feature-card">
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: 'rgba(77,157,224,0.12)',
                border: '1px solid rgba(77,157,224,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--steam-blue)',
                marginBottom: 20,
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 17, margin: '0 0 10px', letterSpacing: '-0.01em' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* External links */}
      <section style={{ padding: '20px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="divider-label" style={{ marginBottom: 40 }}>
          External resources
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            {
              href: 'https://www.pcgamingwiki.com',
              label: 'PCGamingWiki',
              sublabel: 'pcgamingwiki.com',
              icon: <WikiIcon size={18} />,
              iconBg: 'rgba(61,191,160,0.1)',
              iconBorder: 'rgba(61,191,160,0.2)',
              iconColor: 'var(--accent-teal)',
            },
            {
              href: 'https://store.steampowered.com',
              label: 'Steam Store',
              sublabel: 'store.steampowered.com',
              icon: <SteamIcon size={18} />,
              iconBg: 'var(--steam-blue-glow)',
              iconBorder: 'rgba(77,157,224,0.2)',
              iconColor: 'var(--steam-blue)',
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '20px 24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                textDecoration: 'none',
                color: 'var(--text-primary)',
                transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--border-bright)'
                el.style.background = 'var(--bg-card-hover)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--border)'
                el.style.background = 'var(--bg-card)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: link.iconBg,
                border: `1px solid ${link.iconBorder}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: link.iconColor,
                flexShrink: 0,
              }}>
                {link.icon}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{link.label}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {link.sublabel} <LinkIcon size={11} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>© {new Date().getFullYear()} SteamLookup · Not affiliated with Valve or Google</span>
          <div className="site-footer-links">
            <Link to="/terms" className="link-hover">Terms of Service</Link>
            <Link to="/privacy" className="link-hover">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
