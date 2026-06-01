import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// Icons as inline SVG components
function SteamIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.522.63c.956.4 1.409 1.497 1.009 2.452-.397.957-1.497 1.41-2.454 1.015zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.662 0 3.015-1.35 3.015-3.015zm-5.273.016c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z" />
    </svg>
  )
}

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
            <a href="#download" className="btn-primary">
              <DownloadIcon size={18} />
              Download SteamLookup.exe
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

      {/* Download section */}
      <section id="download" style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="divider-label" style={{ marginBottom: 56 }}>
            Get started
          </div>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: 'clamp(32px, 5vw, 60px)',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 40,
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: -80,
              right: -80,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(77,157,224,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative' }}>
              <div style={{ marginBottom: 12 }}>
                <span className="badge" style={{
                  background: 'rgba(40,200,100,0.1)',
                  border: '1px solid rgba(40,200,100,0.25)',
                  color: '#4cdb7f',
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4cdb7f', display: 'inline-block' }} />
                  Free download
                </span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 800,
                margin: '0 0 14px',
                letterSpacing: '-0.02em',
              }}>
                SteamLookup.exe
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px', maxWidth: 480 }}>
                Windows portable app — no installation required. Just download and run.
              </p>
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                {[
                  { label: 'Platform', value: 'Windows' },
                  { label: 'Type', value: 'Portable EXE' },
                  { label: 'Price', value: 'Free' },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-primary)', fontWeight: 700 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
              <a
                href="https://github.com/Panos-Jr/SteamLookup/releases/download/v1.2/SteamLookup.exe"
                className="btn-primary"
                style={{ whiteSpace: 'nowrap', fontSize: 15, padding: '15px 28px' }}
              >
                <DownloadIcon size={18} />
                Download .exe
              </a>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', textAlign: 'center' }}>
                Windows 10 / 11
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Discord / Footer */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-card)',
        padding: '60px 24px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, textAlign: 'center' }}>
          <div style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: 'rgba(88,101,242,0.12)',
            border: '1px solid rgba(88,101,242,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#7289da',
          }}>
            <DiscordIcon size={30} />
          </div>

          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 800,
              margin: '0 0 10px',
              letterSpacing: '-0.02em',
            }}>
              Join the community
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, margin: 0, lineHeight: 1.6, maxWidth: 420 }}>
              Have questions? Join the <strong style={{ color: 'var(--text-primary)' }}>Sailing Support</strong> Discord server for help, feedback, and updates.
            </p>
          </div>

          <a
            href="https://discord.gg/CYR8WvkejJ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-discord"
          >
            <DiscordIcon size={20} />
            Join the server — Sailing Support
          </a>

          <div style={{ marginTop: 20, paddingTop: 24, borderTop: '1px solid var(--border)', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
            <div style={{ color: 'var(--steam-blue)', opacity: 0.7 }}><SteamIcon size={15} /></div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
              SteamLookup — Built by Sailing Support
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
