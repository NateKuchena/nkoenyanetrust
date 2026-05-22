import type { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Divider from '@/components/ui/Divider';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Our Farm | Khatleng Farms',
  description: '200 hectares of freehold farmland in Bethlehem, Free State. Five operational zones — grain fields, tunnel farming, livestock handling, grazing camps and operational hub.',
};

export default function OurFarmPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        <FarmFactsBar />
        <Divider from="#3D4F1F" to="#F4EBDD" />
        <MasterplanSection />
        <Divider from="#F4EBDD" to="#E8D5C0" />
        <LandTable />
        <Divider from="#E8D5C0" to="#F4EBDD" />
        <OperationalZones />
        <Divider from="#F4EBDD" to="#2F2F2F" />
        <InfrastructureSection />
        <Divider from="#2F2F2F" to="#F4EBDD" />
        <ClimateSection />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <header style={{ position: 'relative', minHeight: '56vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(96px,10vw,160px) clamp(24px,5vw,96px) 72px', color: 'var(--color-bone)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg,rgba(244,235,221,0.03) 0 20px,rgba(244,235,221,0.06) 20px 40px),linear-gradient(180deg,#3a3520 0%,#1e1a0c 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.6) 60%,rgba(0,0,0,0.78) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'rgba(244,235,221,0.6)', marginBottom: 20 }}><span>—</span>BLK 25 FOURIE FARM · BETHLEHEM, FREE STATE</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '16ch', marginBottom: 20, fontWeight: 400 }}>BLK 25 Fourie Farm</h1>
        <p style={{ color: 'rgba(244,235,221,0.82)', fontSize: 'clamp(16px,1.4vw,20px)', maxWidth: '52ch' }}>
          Bethlehem, Free State — 200 hectares of freehold agricultural land, owned since 2000.
        </p>
      </div>
    </header>
  );
}

function FarmFactsBar() {
  const facts = [
    { label: 'GPS Coordinates', value: 'Lat −28.138 / Long 28.141' },
    { label: 'Altitude', value: '1,651m above sea level' },
    { label: 'Annual Rainfall', value: '772mm average' },
    { label: 'Water Supply', value: '3 Boreholes + Eskom + Solar' },
  ];
  return (
    <div style={{ background: 'var(--color-green-deep)', color: 'var(--color-bone)', padding: '0 clamp(24px,5vw,96px)' }}>
      <div className="container facts-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {facts.map(({ label, value }, i) => (
          <div key={label} style={{ padding: '36px 0', borderRight: i < facts.length - 1 ? '1px solid rgba(244,235,221,0.15)' : 'none', paddingRight: 28, paddingLeft: i > 0 ? 28 : 0 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-brown-light)', marginBottom: 8 }}>{label}</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(16px,1.6vw,22px)', color: 'var(--color-bone)' }}>{value}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:860px){.facts-bar{grid-template-columns:1fr 1fr!important}.facts-bar>div{border-right:none!important;border-bottom:1px solid rgba(244,235,221,0.15);padding-left:0!important;padding-right:0!important}}`}</style>
    </div>
  );
}

function MasterplanSection() {
  const zones = [
    { color: '#4A7FCB', name: 'Grain Fields', meta: '100ha · Maize & Sunflower' },
    { color: '#556B2F', name: 'Tunnel Farming', meta: '8 tunnels, 8m × 30m' },
    { color: '#C0392B', name: 'Livestock Handling', meta: 'Pens, ramps, crush' },
    { color: '#E67E22', name: 'Grazing Camps', meta: '80.7ha + 25.2ha natural' },
    { color: '#2F2F2F', name: 'Operational Hub', meta: 'Workshop, silos, homestead' },
  ];
  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,72px)' }}>
          <SectionLabel number="" label="Farm Masterplan" />
          <h2 style={{ fontWeight: 400 }}>Five operational zones. One integrated system.</h2>
        </div>
        <div style={{ position: 'relative', height: 'clamp(380px,48vw,640px)', background: 'repeating-linear-gradient(135deg,rgba(85,107,47,0.06) 0 18px,rgba(85,107,47,0.12) 18px 36px),linear-gradient(180deg,#d4c4ae,#b9a98c)', border: '1px solid rgba(47,47,47,0.12)', marginBottom: 24 }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
            <polygon points="80,80 420,80 420,300 80,300" fill="rgba(74,127,203,0.5)" stroke="#4A7FCB" strokeWidth={2}/>
            <text x="250" y="198" textAnchor="middle" fontSize={13} fill="#fff" fontFamily="monospace">Grain Fields</text>
            <polygon points="430,80 580,80 580,200 430,200" fill="rgba(85,107,47,0.6)" stroke="#556B2F" strokeWidth={2}/>
            <text x="505" y="148" textAnchor="middle" fontSize={11} fill="#fff" fontFamily="monospace">Tunnels</text>
            <polygon points="430,210 580,210 580,310 430,310" fill="rgba(192,57,43,0.5)" stroke="#C0392B" strokeWidth={2}/>
            <text x="505" y="268" textAnchor="middle" fontSize={10} fill="#fff" fontFamily="monospace">Livestock</text>
            <polygon points="80,310 420,310 420,450 80,450" fill="rgba(230,126,34,0.4)" stroke="#E67E22" strokeWidth={2}/>
            <text x="250" y="387" textAnchor="middle" fontSize={13} fill="#fff" fontFamily="monospace">Grazing Camps</text>
            <polygon points="590,80 720,80 720,310 590,310" fill="rgba(47,47,47,0.6)" stroke="#2F2F2F" strokeWidth={2}/>
            <text x="655" y="200" textAnchor="middle" fontSize={10} fill="#fff" fontFamily="monospace">Op. Hub</text>
            <text x="700" y="440" fontSize={11} fill="rgba(47,47,47,0.5)" fontFamily="monospace">N ↑</text>
          </svg>
          <div style={{ position: 'absolute', top: 12, left: 14, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 10px', background: 'rgba(244,235,221,0.92)', border: '1px solid rgba(47,47,47,0.18)' }}>
            BLK 25 Fourie Farm · Bethlehem, Free State
          </div>
        </div>
        <div className="legend-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12 }}>
          {zones.map(({ color, name, meta }) => (
            <div key={name} style={{ display: 'flex', gap: 10, padding: '14px 16px', border: '1px solid rgba(47,47,47,0.1)', background: 'var(--color-bone-deep)', alignItems: 'flex-start' }}>
              <div style={{ width: 16, height: 16, background: color, flexShrink: 0, marginTop: 3 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, lineHeight: 1.2, marginBottom: 3 }}>{name}</div>
                <div style={{ fontSize: 11, color: 'var(--color-ink-mute)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1100px){.legend-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:860px){.legend-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

function LandTable() {
  const rows = [
    { component: 'Dryland arable — maize', ha: '80ha', use: 'Yellow maize production' },
    { component: 'Dryland arable — sunflower', ha: '20ha', use: 'Sunflower rotation, oilseed' },
    { component: 'Improved pasture', ha: '80.7ha', use: 'Livestock grazing and fodder' },
    { component: 'Natural grazing', ha: '25.2ha', use: 'Extensive livestock support' },
    { component: 'Infrastructure & roads', ha: '~4ha', use: 'Farm operations, access, homestead' },
    { component: 'TOTAL', ha: '200ha', use: '', total: true },
  ];
  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="" label="Land Composition" />
          <h2 style={{ fontWeight: 400 }}>How the land is composed.</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(47,47,47,0.15)' }}>
                {['Land Component', 'Hectares', 'Use'].map(h => (
                  <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-mute)', fontFamily: 'var(--font-sans)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ component, ha, use, total }) => (
                <tr key={component} style={{ borderBottom: '1px solid rgba(47,47,47,0.08)', background: total ? 'rgba(85,107,47,0.07)' : 'transparent' }}>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: total ? 600 : 400 }}>{component}</td>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--color-green)', fontWeight: total ? 600 : 400 }}>{ha}</td>
                  <td style={{ padding: '18px 20px', fontSize: 14, color: 'var(--color-ink-mute)' }}>{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function OperationalZones() {
  const zones = [
    { num: 'i.', label: 'Grain Fields', title: 'Dryland Crops', body: '80ha of yellow maize in rotation with 20ha of sunflower. The backbone of the farm\'s annual production cycle. SAFEX spot price at delivery through AFGRI Bethlehem Silo.', facts: [{ k: 'Area', v: '100ha total' }, { k: 'Crops', v: 'Yellow Maize + Sunflower' }, { k: 'Off-take', v: 'AFGRI Bethlehem Silo' }], img: 'img · dryland maize fields · golden hour' },
    { num: 'ii.', label: 'Tunnel Farming', title: 'Production Tunnels', body: '8 tunnels, 8m × 30m each, with drip irrigation and raised beds. Multi-crop cycles run year-round. First harvest October 2026, reaching full production by December.', facts: [{ k: 'Tunnels', v: '8 × (8m × 30m)' }, { k: 'Crops', v: 'Tomatoes, Peppers, Spinach, Lettuce' }, { k: 'Buyer', v: 'Bethlehem Fresh Produce Market' }], img: 'img · tunnel interior · vegetables' },
    { num: 'iii.', label: 'Livestock', title: 'Livestock Handling', body: 'Opening herd of 50 cattle and 50 sheep with full auction-ready infrastructure. Bonsmara/Simmental stud programme anchored by 5 stud bulls.', facts: [{ k: 'Cattle', v: '50 head' }, { k: 'Sheep', v: '50 head' }, { k: 'Stud bulls', v: '5' }], img: 'img · cattle herd · Free State veld' },
    { num: 'iv.', label: 'Grazing Camps', title: 'Rotational Grazing', body: 'Rotational grazing across 80.7ha improved pasture and 25.2ha natural grass veld. Water troughs, fencing and paddock divisions maintain optimal condition scoring.', facts: [{ k: 'Improved Pasture', v: '80.7ha' }, { k: 'Natural Veld', v: '25.2ha' }, { k: 'System', v: 'Rotational grazing' }], img: 'img · Free State veld · grazing cattle' },
    { num: 'v.', label: 'Operational Hub', title: 'Farm Hub', body: 'Workshop, machinery shed, fuel tanks, grain storage silos, three operational boreholes and a solar energy system. Main house, cottage, 3 staff quarters and storage sheds.', facts: [{ k: 'Water', v: '3 boreholes (~100m)' }, { k: 'Energy', v: 'Solar + Eskom grid' }, { k: 'Accommodation', v: 'Main house + cottage + staff quarters' }], img: 'img · farm hub · workshop silos' },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(56px,7vw,88px)' }}>
          <SectionLabel number="" label="Operational Zones" />
          <h2 style={{ fontWeight: 400 }}>Five zones, one coherent system.</h2>
        </div>
        {zones.map(({ num, label, title, body, facts, img }, i) => (
          <div key={title} className={i % 2 === 0 ? 'zone-row' : 'zone-row zone-rev'} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,5vw,80px)', alignItems: 'center', padding: 'clamp(40px,5vw,72px) 0', borderTop: i > 0 ? '1px solid rgba(47,47,47,0.08)' : 'none' }}>
            <div className={i % 2 !== 0 ? 'zone-body' : ''}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 13, color: 'var(--color-brown)', letterSpacing: '0.08em', marginBottom: 4 }}>{num} {label}</div>
              <h3 style={{ marginBottom: 16 }}>{title}</h3>
              <p style={{ color: 'var(--color-ink-mute)', maxWidth: '52ch', marginBottom: 0, lineHeight: 1.75 }}>{body}</p>
              <div style={{ margin: '20px 0 0', borderTop: '1px solid rgba(47,47,47,0.1)' }}>
                {facts.map(({ k, v }) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(47,47,47,0.08)', gap: 20 }}>
                    <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ink-mute)' }}>{k}</span>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: 17 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={i % 2 !== 0 ? 'zone-img' : ''} style={{ height: 'clamp(300px,36vw,460px)' }}>
              <ImagePlaceholder caption={img} height="100%" />
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:860px){
          .zone-row,.zone-rev{grid-template-columns:1fr!important}
          .zone-body{order:1}.zone-img{order:0}
        }
        @media(min-width:861px){
          .zone-rev .zone-body{order:2}.zone-rev .zone-img{order:1}
        }
      `}</style>
    </section>
  );
}

function InfrastructureSection() {
  const items = [
    { title: '3 Operational Boreholes', sub: 'Year-round water security, ~100m depth' },
    { title: 'Eskom Grid Connection', sub: 'Reliable grid electricity across the farm' },
    { title: 'Solar Energy System', sub: 'Own contribution — energy independence' },
    { title: 'Main House + Cottage + 3 Quarters', sub: '200sqm staff accommodation on farm' },
    { title: '100ha Production-Ready Land', sub: 'Cleared, prepared and ready for planting' },
    { title: 'Complete Perimeter Fencing', sub: 'Full perimeter and internal paddock fencing' },
  ];
  return (
    <section className="section-pad" style={{ background: 'var(--color-ink)', color: 'var(--color-bone)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,72px)' }}>
          <SectionLabel number="" label="Infrastructure" light />
          <h2 style={{ color: 'var(--color-bone)', fontWeight: 400 }}>Everything needed. Nothing borrowed.</h2>
        </div>
        <div className="infra-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
          {items.map(({ title, sub }, i) => (
            <div key={title} style={{ padding: '32px 28px', borderBottom: '1px solid rgba(244,235,221,0.08)', borderRight: (i % 3) < 2 ? '1px solid rgba(244,235,221,0.08)' : 'none' }}>
              <div style={{ width: 28, height: 1, background: 'var(--color-brown-light)', marginBottom: 20 }} />
              <h3 style={{ color: 'var(--color-bone)', fontSize: 'clamp(16px,1.5vw,20px)', marginBottom: 8 }}>{title}</h3>
              <p style={{ color: 'rgba(244,235,221,0.55)', margin: 0, fontSize: 13, lineHeight: 1.6 }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.infra-grid{grid-template-columns:1fr!important}.infra-grid>div{border-right:none!important}}`}</style>
    </section>
  );
}

function ClimateSection() {
  const data = [
    { metric: 'Average annual rainfall', value: '772mm (30.4 inches)' },
    { metric: 'Rainy days per year', value: '93' },
    { metric: 'Wettest months', value: 'October–March' },
    { metric: 'Driest months', value: 'June–August (ideal for harvest)' },
    { metric: 'Altitude', value: '1,651m above sea level' },
    { metric: 'Classification', value: 'Cwb Köppen-Geiger — Subtropical Highland' },
    { metric: 'Annual sunshine hours', value: '~4,047 hours/year' },
  ];
  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="" label="Climate" />
          <h2 style={{ fontWeight: 400 }}>A productive climate by any measure.</h2>
          <p className="lede" style={{ marginTop: 16 }}>In 8 of the last 9 recorded seasons, rainfall exceeded 600mm — well above the 450mm minimum for dryland maize production.</p>
        </div>
        <div style={{ maxWidth: 760 }}>
          {data.map(({ metric, value }, i) => (
            <div key={metric} style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 0', borderBottom: i < data.length - 1 ? '1px solid rgba(47,47,47,0.09)' : 'none', gap: 24, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--color-ink-mute)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{metric}</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, textAlign: 'right' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
