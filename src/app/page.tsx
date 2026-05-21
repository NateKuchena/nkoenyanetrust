import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Btn from '@/components/ui/Btn';
import Divider from '@/components/ui/Divider';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <StatsStrip />
        <Divider from="#F8F5EE" to="#F8F5EE" />
        <MissionVision />
        <Divider from="#F8F5EE" to="#3D5220" />
        <SustainabilityStrip />
        <Divider from="#3D5220" to="#F8F5EE" />
        <FarmTeaser />
        <IncomeStreams />
        <LeadershipQuote />
        <Divider from="#3D5220" to="#F8F5EE" />
        <ImpactSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <header
      style={{
        position: 'relative',
        minHeight: '86vh',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'clamp(72px,9vw,144px) clamp(24px,5vw,96px) 80px',
        color: 'var(--color-bone)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(135deg,rgba(248,245,238,0.04) 0 18px,rgba(248,245,238,0.08) 18px 36px),linear-gradient(180deg,#3a4720 0%,#1c2410 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.55) 60%,rgba(0,0,0,0.78) 100%)',
        }}
      />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'var(--color-gold-soft)', marginBottom: 24 }}>
          <span>—</span>NKOENYANE FAMILY TRUST · BETHLEHEM, FREE STATE
        </div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '14ch', marginBottom: 24 }}>
          Rooted in the Land.<br />Built for the Future.
        </h1>
        <p
          style={{
            color: 'rgba(248,245,238,0.85)',
            fontSize: 'clamp(17px,1.4vw,21px)',
            maxWidth: '56ch',
            marginBottom: 36,
          }}
        >
          200 hectares. Four income streams. One generational vision.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Btn href="/the-farm" variant="gold" arrow>Explore the Farm</Btn>
          <Btn href="/invest" variant="ghost" arrow>Investment Overview</Btn>
        </div>
      </div>
    </header>
  );
}

/* ── Stats ── */
function StatsStrip() {
  const stats = [
    { number: '200', unit: 'ha', label: 'Freehold Land — Owned Since 2000' },
    { number: '100', unit: 'ha', label: 'Production-Ready Arable Land' },
    { number: '4', label: 'Diversified Income Streams' },
    { number: '18–25', label: 'Jobs Created in Year 1' },
    { number: 'R6.2M', label: 'Projected Revenue by Year 5' },
  ];

  return (
    <>
      <div
        className="stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5,1fr)',
          borderTop: '1px solid rgba(26,26,26,0.12)',
          borderBottom: '1px solid rgba(26,26,26,0.12)',
        }}
      >
        {stats.map(({ number, unit, label }, i) => (
          <div
            key={i}
            style={{
              padding: 'clamp(32px,4vw,48px) clamp(16px,2.5vw,36px)',
              borderRight: i < stats.length - 1 ? '1px solid rgba(26,26,26,0.12)' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px,3vw,48px)',
                color: 'var(--color-green)',
                lineHeight: 1,
                marginBottom: 10,
              }}
            >
              {number}
              {unit && (
                <small
                  style={{
                    color: 'var(--color-gold)',
                    fontSize: '0.5em',
                    verticalAlign: 'super',
                    marginLeft: 3,
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {unit}
                </small>
              )}
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-ink-mute)',
                lineHeight: 1.4,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:1100px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:860px){.stats-grid{grid-template-columns:1fr!important}}
        .stats-grid>div{border-bottom:1px solid rgba(26,26,26,0.12)}
      `}</style>
    </>
  );
}

/* ── Mission / Vision ── */
function MissionVision() {
  return (
    <section className="section-pad" id="our-purpose">
      <div className="container">
        <div className="twocol-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }}>
          <div>
            <SectionLabel number="01" label="Our Purpose" />
            <h2 style={{ marginBottom: 24 }}>
              Cultivating food, livelihoods and legacy from the Free State heartland.
            </h2>
            <p className="lede">
              To leverage technology, disciplined governance, and responsible stewardship to create a
              profitable, scalable, and socially impactful agricultural business that delivers enduring
              value to investors, customers, and the broader community.
            </p>
          </div>
          <div>
            <SectionLabel number="02" label="Our Vision" />
            <h2 style={{ marginBottom: 24 }}>
              A flagship rural enterprise that proves modern South African agriculture can be premium,
              traceable and proudly local.
            </h2>
            <p className="lede">
              To be a leading producer of premium, fully traceable, and sustainably cultivated
              agricultural products — recognised for exceptional operational standards, stewardship,
              and integrity.
            </p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.twocol-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ── Sustainability strip ── */
function SustainabilityStrip() {
  const items = [
    {
      icon: (
        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
          <path d="M12 2 L20 7 L20 17 L12 22 L4 17 L4 7 Z"/><path d="M12 2 L12 22 M4 7 L20 17 M20 7 L4 17"/>
        </svg>
      ),
      title: 'Fully Traceable Provenance',
      body: 'Verified quality and origin for every product — from soil to shelf.',
    },
    {
      icon: (
        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
          <circle cx={12} cy={12} r={3}/><path d="M12 2V6M12 18V22M2 12H6M18 12H22M5 5L8 8M16 16L19 19M5 19L8 16M16 8L19 5"/>
        </svg>
      ),
      title: '4IR Technology Integration',
      body: 'IoT monitoring, data analytics, and automated workflows embedded into every operational zone.',
    },
    {
      icon: (
        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
          <circle cx={12} cy={12} r={10}/><path d="M2 12H22M12 2C15 6 15 18 12 22C9 18 9 6 12 2"/>
        </svg>
      ),
      title: '10% Farm Worker Profit Sharing',
      body: 'Formal trust resolution — all permanent staff share in the enterprise they help build.',
    },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-green)', color: 'var(--color-bone)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="03" label="Principles of Practice" gold />
          <h2 style={{ color: 'var(--color-bone)' }}>Built on traceability, technology and shared prosperity.</h2>
        </div>
        <div className="sus-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(32px,5vw,80px)' }}>
          {items.map(({ icon, title, body }) => (
            <div key={title}>
              <div style={{ width: 56, height: 56, marginBottom: 24, display: 'grid', placeItems: 'center', border: '1px solid var(--color-gold)', color: 'var(--color-gold)' }}>{icon}</div>
              <h3 style={{ color: 'var(--color-bone)', marginBottom: 12 }}>{title}</h3>
              <p style={{ color: 'rgba(248,245,238,0.75)', margin: 0, maxWidth: '36ch' }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.sus-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ── Farm teaser ── */
function FarmTeaser() {
  return (
    <section style={{ padding: '40px clamp(24px,5vw,96px) clamp(72px,9vw,144px)' }}>
      <div className="container">
        <div style={{ height: 'clamp(440px,50vw,620px)', position: 'relative', overflow: 'hidden' }}>
          <ImagePlaceholder caption="img · aerial farm masterplan · 2400×1400 · warm tones" height="100%" />
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.6))',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              padding: 'clamp(32px,5vw,56px)', color: 'var(--color-bone)',
            }}
          >
            <SectionLabel number="04" label="The Farm" gold />
            <h2 style={{ color: 'var(--color-bone)', maxWidth: '22ch', marginBottom: 16 }}>
              BLK 25 Fourie Farm — Bethlehem, Free State.
            </h2>
            <p style={{ maxWidth: '60ch', color: 'rgba(248,245,238,0.85)', marginBottom: 28 }}>
              200 hectares of freehold agricultural land, owned since 2000 and held unencumbered.
              No mortgage, no rental, no tenure risk.
            </p>
            <div><Btn href="/the-farm" variant="gold" arrow>Explore the Farm</Btn></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Income streams ── */
function IncomeStreams() {
  const streams = [
    { phase: 'Stream 01', title: 'Dryland Crops', body: '80ha Yellow Maize + 20ha Sunflower. Rotation improves soil health and income diversification.', items: ['Yellow Maize (80ha)', 'Sunflower (20ha)', 'AFGRI Bethlehem Silo off-take'], tag: 'Live · Year 1', future: false },
    { phase: 'Stream 02', title: 'Tunnel Vegetables', body: '8 production tunnels, 8m × 30m each. Drip irrigation, multi-crop cycles, year-round harvests.', items: ['Tomatoes', 'Peppers', 'Spinach', 'Lettuce'], tag: 'Live · Year 1', future: false },
    { phase: 'Stream 03', title: 'Commercial Livestock', body: 'Opening herd: 50 cattle and 50 sheep. Monthly and quarterly auctions at Bethlehem.', items: ['50 Cattle (Bonsmara/Simmental)', '50 Sheep', 'Monthly & quarterly auctions'], tag: 'Live · Year 1', future: false },
    { phase: 'Stream 04', title: 'Beef Stud Programme', body: '5 stud bulls — 12+ month maturation. First stud sales Year 2 at R80,000–R150,000 per animal.', items: ['Bonsmara/Simmental genetics', '5 stud bulls', 'Premium stud sales from Year 2'], tag: 'Year 2 →', future: true },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="05" label="What We Produce" />
          <h2 style={{ marginBottom: 16 }}>Four income streams. One resilient operation.</h2>
          <p className="lede">Diversified by design — no single buyer exceeds 50% of revenue.</p>
        </div>
        <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {streams.map(({ phase, title, body, items, tag, future }) => (
            <article
              key={title}
              style={{
                background: future ? 'var(--color-green-deep)' : 'var(--color-bone)',
                border: `1px solid ${future ? 'var(--color-green-deep)' : 'rgba(26,26,26,0.12)'}`,
                padding: '32px 28px', display: 'flex', flexDirection: 'column', minHeight: 440,
              }}
            >
              <div style={{ height: 120, margin: '-8px -28px 20px' }}>
                <ImagePlaceholder caption={`img · ${title.toLowerCase()}`} dark={future} height={120} />
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--color-gold)', marginBottom: 6 }}>{phase}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: future ? 'var(--color-bone)' : 'var(--color-ink)', marginBottom: 10, lineHeight: 1.2 }}>{title}</div>
              <p style={{ fontSize: 13, color: future ? 'rgba(248,245,238,0.75)' : 'var(--color-ink-mute)', marginBottom: 0 }}>{body}</p>
              <ul style={{ padding: 0, margin: 'auto 0 0', listStyle: 'none', borderTop: `1px solid ${future ? 'rgba(248,245,238,0.15)' : 'rgba(26,26,26,0.12)'}` }}>
                {items.map(item => (
                  <li key={item} style={{ padding: '8px 0', borderBottom: `1px solid ${future ? 'rgba(248,245,238,0.15)' : 'rgba(26,26,26,0.12)'}`, fontSize: 13, color: future ? 'rgba(248,245,238,0.8)' : 'var(--color-ink)', display: 'flex', gap: 8 }}>
                    <span style={{ color: 'var(--color-gold)' }}>—</span>{item}
                  </li>
                ))}
              </ul>
              <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: future ? 'var(--color-gold-soft)' : 'var(--color-ink-mute)', marginTop: 12 }}>{tag}</div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1100px){.cards-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:860px){.cards-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

/* ── Leadership quote ── */
function LeadershipQuote() {
  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,96px)',
        background: 'var(--color-green)',
        color: 'var(--color-bone)',
        overflow: 'hidden',
      }}
    >
      <span aria-hidden="true" style={{ position: 'absolute', top: 24, left: 'clamp(24px,5vw,96px)', fontFamily: 'var(--font-serif)', fontSize: 200, lineHeight: 1, color: 'var(--color-gold)', opacity: 0.5, pointerEvents: 'none' }}>
        &ldquo;
      </span>
      <div className="container quote-inner" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 48, alignItems: 'center' }}>
        <ImagePlaceholder caption="portrait · b&w" dark style={{ width: 160, height: 200 }} />
        <div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px,2.4vw,36px)', lineHeight: 1.25, color: 'var(--color-bone)', maxWidth: '40ch', margin: 0 }}>
            Our goal is not simply to farm land — it is to build an institution. One that is accountable, traceable, and built to outlast us.
          </p>
          <div style={{ marginTop: 28, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
            Mmatebogo Elizabeth Nkoenyane
            <small style={{ display: 'block', color: 'rgba(248,245,238,0.7)', marginTop: 5, letterSpacing: '0.08em' }}>Trustee</small>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.quote-inner{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ── Impact ── */
function ImpactSection() {
  const impacts = [
    { stat: '100%', title: 'Black-Owned, Female-Led', body: 'DALRRD and BFS transformation priority enterprise.' },
    { stat: '46/50', title: 'BFS Scorecard (Est.)', body: 'Minimum required: 20 points. Full compliance across all criteria.' },
    { stat: 'SDG 1,2,8,9,15', title: 'Global Alignment', body: 'Measurable contribution to people, planet and the rural economy.' },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="04" label="Our Impact" />
          <h2>Transformation by design, not by default.</h2>
        </div>
        <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {impacts.map(({ stat, title, body }) => (
            <div key={title} style={{ borderTop: '2px solid var(--color-gold)', paddingTop: 28 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,4vw,58px)', color: 'var(--color-green)', lineHeight: 1, marginBottom: 12 }}>{stat}</div>
              <h3 style={{ marginBottom: 10 }}>{title}</h3>
              <p style={{ color: 'var(--color-ink-mute)', margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.impact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ── News ── */
function NewsSection() {
  const articles = [
    { img: 'img · tunnel install', category: 'Operations', date: '15 · 04 · 2026', title: 'First tunnel commissioned ahead of Q2 planting cycle.', body: 'Tunnel 01 is online — drip irrigation, climate sensors and substrate beds calibrated for the first crop.' },
    { img: 'img · cattle in veld', category: 'Livestock', date: '02 · 04 · 2026', title: 'Rotational grazing programme expanded to the eastern camp.', body: 'A measured rotation across natural Free State grass veld — better soil, better animals, better meat.' },
    { img: 'img · meeting room', category: 'Governance', date: '22 · 03 · 2026', title: 'Trust formalises three-year financial reporting cadence.', body: 'Quarterly investor reporting, audited annuals, and an independent compliance review from day one.' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="06" label="Latest News" />
          <h2 style={{ marginTop: 20 }}>News &amp; updates.</h2>
        </div>
        <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {articles.map(({ img, category, date, title, body }) => (
            <article key={title} style={{ display: 'flex', flexDirection: 'column' }}>
              <ImagePlaceholder caption={img} height={220} style={{ marginBottom: 20 }} />
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 12, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-mute)' }}>
                <span style={{ color: 'var(--color-green)', border: '1px solid var(--color-green)', padding: '2px 8px' }}>{category}</span>
                {date}
              </div>
              <h3 style={{ fontSize: 'clamp(20px,1.8vw,26px)', lineHeight: 1.2, marginBottom: 8 }}>{title}</h3>
              <p style={{ color: 'var(--color-ink-mute)', fontSize: 14, marginBottom: 0 }}>{body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(26,26,26,0.12)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-green)' }}>
                Read article →
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.news-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
