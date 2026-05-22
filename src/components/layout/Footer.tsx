import Link from 'next/link';
import SocialLink from './SocialLink';

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About Us' },
  { href: '/our-farm',   label: 'Our Farm' },
  { href: '/production', label: 'Production' },
  { href: '/projects',   label: 'Projects' },
  { href: '/gallery',    label: 'Gallery' },
  { href: '/contact',    label: 'Contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-ink)',
        color: 'var(--color-bone)',
        padding: 'clamp(64px,8vw,96px) clamp(24px,5vw,96px) 32px',
      }}
    >
      <div
        className="container footer-grid"
        style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48 }}
      >
        {/* Brand */}
        <div>
          <Link
            href="/"
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600,
              color: 'var(--color-bone)', letterSpacing: '0.02em', marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 36, height: 36, background: 'var(--color-green)',
                display: 'grid', placeItems: 'center',
                color: 'var(--color-bone)', fontFamily: 'var(--font-serif)',
                fontSize: 17, fontWeight: 700, flexShrink: 0,
              }}
            >
              K
            </span>
            <span>Khatleng Farms</span>
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-serif)', fontSize: 20,
              color: 'var(--color-brown-light)', maxWidth: '22ch',
              lineHeight: 1.3, margin: '0 0 16px',
            }}
          >
            Cultivating Futures. Grounded in Purpose.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 style={colHeadStyle}>Navigate</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navLinks.map(({ href, label }) => (
              <li key={href} style={{ padding: '5px 0' }}>
                <Link href={href} style={linkStyle}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={colHeadStyle}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'ntebo@hlapane.com',
              '082 411 8481',
              '011 760 9348',
              'BLK 25 Fourie Farm',
              'Bethlehem, Free State',
              'South Africa, 9701',
            ].map(item => (
              <li key={item} style={{ ...linkStyle, padding: '5px 0' }}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 style={colHeadStyle}>Connect</h4>
          <div style={{ display: 'flex', gap: 10 }}>
            <SocialLink href="#" label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9a.55.55 0 0 0 .55-.55V3.55A.55.55 0 0 0 20.45 3zM8.34 18.34H5.67V9.75h2.67v8.59zM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.76h-2.67V14.2c0-1 0-2.27-1.38-2.27s-1.6 1.08-1.6 2.2v4.21H10V9.75h2.56v1.17h.04c.36-.67 1.22-1.38 2.52-1.38 2.7 0 3.2 1.78 3.2 4.08v4.72z"/>
              </svg>
            </SocialLink>
            <SocialLink href="#" label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                <path d="M14.5 21v-7.7h2.6l.4-3h-3V8.4c0-.9.3-1.5 1.5-1.5H17.6V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.3H9v3h2.5V21h3z"/>
              </svg>
            </SocialLink>
            <SocialLink href="#" label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={16} height={16}>
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/>
                <circle cx="12" cy="12" r="3.8"/>
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className="container footer-bottom"
        style={{
          marginTop: 56, paddingTop: 20,
          borderTop: '1px solid rgba(244,235,221,0.15)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
          fontSize: 12, color: 'rgba(244,235,221,0.45)', letterSpacing: '0.07em',
        }}
      >
        <span>© 2026 Khatleng Farms | Operated by Nkoenyane Family Trust | IT 1254/00</span>
        <span>Bethlehem · Free State · ZA</span>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

const colHeadStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 11, letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--color-brown-light)',
  marginBottom: 18, fontWeight: 500,
};

const linkStyle: React.CSSProperties = {
  fontSize: 14, color: 'rgba(244,235,221,0.7)',
};
