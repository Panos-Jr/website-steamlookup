import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { ArrowLeftIcon, SteamIcon } from './icons'

export type LegalBlock =
  | { type: 'p'; content: ReactNode }
  | { type: 'list'; items: ReactNode[]; tone?: 'default' | 'negative' }
  | { type: 'code'; content: string }
  | { type: 'heading'; content: ReactNode }
  | { type: 'caps'; content: ReactNode }

export type LegalSection = {
  id: string
  title: string
  blocks: LegalBlock[]
}

type LegalPageProps = {
  eyebrow: string
  title: string
  lastUpdated: string
  intro: ReactNode
  sections: LegalSection[]
}

export const CONTACT_EMAIL = 'panos.etos@gmail.com'
export const GOOGLE_PERMISSIONS_URL = 'https://myaccount.google.com/permissions'

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="legal-link">
      {children}
    </a>
  )
}

export function LegalPage({ eyebrow, title, lastUpdated, intro, sections }: LegalPageProps) {
  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
      <nav className="legal-nav">
        <div className="legal-nav-inner">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--text-primary)' }}>
            <span style={{ color: 'var(--steam-blue)', display: 'flex' }}>
              <SteamIcon size={22} />
            </span>
            <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em' }}>
              Steam<span style={{ color: 'var(--steam-blue)' }}>Lookup</span>
            </span>
          </Link>
          <Link to="/" className="btn-secondary" style={{ padding: '8px 16px', fontSize: 13 }}>
            <ArrowLeftIcon size={14} />
            Back to home
          </Link>
        </div>
      </nav>

      <header className="legal-hero">
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div className="hero-glow" style={{
          width: 520,
          height: 520,
          background: 'radial-gradient(circle, rgba(77,157,224,0.16) 0%, transparent 70%)',
          top: -160,
          left: '50%',
          transform: 'translateX(-50%)',
        }} />
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div className="fade-up fade-up-1" style={{ marginBottom: 22 }}>
            <span className="badge" style={{
              background: 'var(--steam-blue-glow)',
              border: '1px solid rgba(77,157,224,0.25)',
              color: 'var(--steam-blue)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--steam-blue)', display: 'inline-block' }} />
              {eyebrow}
            </span>
          </div>
          <h1 className="legal-title fade-up fade-up-2">{title}</h1>
          <p className="legal-intro fade-up fade-up-3">{intro}</p>
          <div className="legal-meta fade-up fade-up-4">
            <span className="term-label">last_updated:</span> <span className="term-val">{lastUpdated}</span>
          </div>
        </div>
      </header>

      <div className="legal-layout fade-up fade-up-5">
        <aside className="legal-toc">
          <div className="legal-toc-label">Contents</div>
          <ol>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span className="legal-toc-num">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <main className="legal-body">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="legal-section">
              <h2>
                <span className="legal-section-num">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </h2>
              {s.blocks.map((b, j) => <Block key={j} block={b} />)}
            </section>
          ))}

          <div className="legal-disclaimer">
            SteamLookup is an independent project and is not affiliated with Valve Corporation or Google LLC.
          </div>
        </main>
      </div>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>© {new Date().getFullYear()} SteamLookup</span>
          <div className="site-footer-links">
            <Link to="/" className="link-hover">Home</Link>
            <Link to="/terms" className="link-hover">Terms of Service</Link>
            <Link to="/privacy" className="link-hover">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'p':
      return <p>{block.content}</p>
    case 'heading':
      return <h3>{block.content}</h3>
    case 'caps':
      return <p className="legal-caps">{block.content}</p>
    case 'code':
      return (
        <div className="terminal-box legal-code">
          <div className="terminal-body">
            <span className="term-key">{block.content}</span>
          </div>
        </div>
      )
    case 'list':
      return (
        <ul className={block.tone === 'negative' ? 'legal-list legal-list-negative' : 'legal-list'}>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
  }
}
