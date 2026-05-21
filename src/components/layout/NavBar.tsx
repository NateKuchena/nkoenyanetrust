'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/',             label: 'Home' },
  { href: '/our-story',   label: 'Our Story' },
  { href: '/the-farm',    label: 'The Farm' },
  { href: '/our-products',label: 'Our Products' },
  { href: '/governance',  label: 'Governance' },
  { href: '/invest',      label: 'Invest' },
  { href: '/contact',     label: 'Contact Us' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close on route change */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  /* trap focus: close on Escape */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between border-b"
        style={{
          padding: '20px clamp(24px,5vw,96px)',
          background: scrolled
            ? 'rgba(61,82,32,0.97)'
            : 'rgba(248,245,238,0.92)',
          backdropFilter: 'saturate(140%) blur(8px)',
          borderColor: scrolled
            ? 'rgba(248,245,238,0.15)'
            : 'rgba(26,26,26,0.12)',
          transition: 'background .3s ease, border-color .3s ease',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 22,
            color: scrolled ? 'var(--color-bone)' : 'var(--color-green)',
            letterSpacing: '0.04em',
          }}
        >
          <span
            style={{
              width: 36,
              height: 36,
              background: 'var(--color-green)',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--color-gold)',
              fontFamily: 'var(--font-serif)',
              fontSize: 18,
              flexShrink: 0,
            }}
          >
            N
          </span>
          <span>Nkoenyane Family Trust</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 flex-nowrap" style={{ display: 'flex' }}
          id="desktop-nav"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: 13,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: scrolled ? 'rgba(248,245,238,0.85)' : 'var(--color-ink)',
                padding: '6px 0',
                borderBottom: isActive(href)
                  ? `1px solid ${scrolled ? 'var(--color-gold)' : 'var(--color-green)'}`
                  : '1px solid transparent',
                transition: 'border-color .2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e =>
                ((e.target as HTMLElement).style.borderBottomColor = 'var(--color-gold)')
              }
              onMouseLeave={e => {
                if (!isActive(href))
                  (e.target as HTMLElement).style.borderBottomColor = 'transparent';
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/invest"
            style={{
              marginLeft: 12,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 20px',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: 'var(--color-gold)',
              color: 'var(--color-ink)',
              border: '1px solid var(--color-gold)',
              transition: 'background .2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Partner With Us
          </Link>
        </div>

        {/* Hamburger — shown below 1180px via inline style (media query in globals) */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(v => !v)}
          style={{
            display: 'none',
            background: 'transparent',
            border: `1px solid ${scrolled ? 'rgba(248,245,238,0.3)' : 'rgba(26,26,26,0.2)'}`,
            color: scrolled ? 'var(--color-bone)' : 'var(--color-green)',
            fontSize: 20,
            padding: '4px 10px',
            cursor: 'pointer',
            lineHeight: 1,
          }}
          className="hamburger-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            background: 'var(--color-green)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px clamp(24px,5vw,60px)',
            gap: 8,
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px,6vw,52px)',
                color: isActive(href) ? 'var(--color-gold)' : 'var(--color-bone)',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/invest"
            style={{
              marginTop: 24,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: 'var(--color-gold)',
              color: 'var(--color-ink)',
              alignSelf: 'flex-start',
            }}
          >
            Partner With Us →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1180px) {
          #desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
