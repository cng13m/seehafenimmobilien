import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  X,
} from 'lucide-react';
import './styles.css';

const primaryServices = [
  {
    slug: 'immobilienverkauf',
    title: 'Immobilienverkauf',
    hero: '/assets/property-hero.jpg',
    detailImage: '/assets/team-1.jpg',
    lead: 'Wir positionieren Ihre Immobilie klar und begleiten den Verkauf persönlich bis zum Abschluss.',
    heading: 'Ein Verkauf mit Plan und persönlicher Begleitung.',
    copy: 'Von der ersten Einschätzung bis zur Schlüsselübergabe erhalten Sie eine klare Strategie, eine hochwertige Präsentation und einen festen Ansprechpartner.',
    points: ['Marktgerechte Positionierung', 'Professionelle Vermarktung', 'Besichtigungen und Verhandlungen', 'Begleitung bis zum Vertragsabschluss'],
  },
  {
    slug: 'immobilienbewertung',
    title: 'Immobilienbewertung',
    hero: '/assets/property-1.jpg',
    detailImage: '/assets/team-3.jpg',
    lead: 'Eine fundierte Bewertung schafft Sicherheit für Verkauf, Kauf und langfristige Entscheidungen.',
    heading: 'Klarheit über den Wert Ihrer Immobilie.',
    copy: 'Wir verbinden Marktkenntnis, Lage, Zustand und Potenzial zu einer nachvollziehbaren Einschätzung – verständlich erklärt und auf Ihre Situation abgestimmt.',
    points: ['Analyse von Lage und Objekt', 'Vergleich mit dem aktuellen Markt', 'Einschätzung von Potenzialen', 'Persönliche Besprechung der Ergebnisse'],
  },
  {
    slug: 'stockwerkeigentum',
    title: 'Stockwerkeigentum',
    hero: '/assets/about.jpg',
    detailImage: '/assets/team-2.jpg',
    lead: 'Wir verwalten Stockwerkeigentum strukturiert, transparent und mit Blick auf die Gemeinschaft.',
    heading: 'Verwaltung, die Eigentümer entlastet.',
    copy: 'Wir koordinieren Administration, Unterhalt und Versammlungen zuverlässig und sorgen für klare Kommunikation zwischen allen Beteiligten.',
    points: ['Eigentümerversammlungen', 'Budget und Abrechnungen', 'Unterhalt und technische Koordination', 'Transparente Eigentümerkommunikation'],
  },
  {
    slug: 'mietliegenschaften',
    title: 'Mietliegenschaften',
    hero: '/assets/property-2.jpg',
    detailImage: '/assets/property-3.jpg',
    lead: 'Eine verlässliche Bewirtschaftung schützt den Wert Ihrer Liegenschaft und entlastet Sie im Alltag.',
    heading: 'Persönlich betreut. Nachhaltig bewirtschaftet.',
    copy: 'Von der Vermietung bis zur Abrechnung übernehmen wir die laufende Betreuung Ihrer Mietliegenschaft effizient und nachvollziehbar.',
    points: ['Mieterbetreuung und Vermietung', 'Mietzinsinkasso und Mahnwesen', 'Nebenkostenabrechnungen', 'Unterhalt und Objektkontrollen'],
  },
];

const additionalServices = [
  {
    id: 'erstvermietung',
    title: 'Erstvermietung & Neubau',
    image: '/assets/property-1.jpg',
    text: 'Von der Marktanalyse bis zur Übergabe: klare Positionierung und koordinierte Erstvermietung.',
    points: ['Markt- und Standortanalysen', 'Mietpreisgestaltung', 'Branding und Marketing', 'Übergaben und Mieterkoordination'],
  },
  {
    id: 'baumanagement',
    title: 'Baumanagement & Unterhalt',
    image: '/assets/property-2.jpg',
    text: 'Strukturierte Planung und Kontrolle für Sanierungen, Unterhalt und Umbauten.',
    points: ['Sanierungs- und Unterhaltsplanung', 'Offertvergleich und Vergabe', 'Termin- und Kostenkontrolle', 'Abnahmen und Qualitätskontrollen'],
  },
  {
    id: 'administration',
    title: 'Administration & Recht',
    image: '/assets/team-1.jpg',
    text: 'Sorgfältige Unterstützung bei Verträgen, Verfahren und der laufenden Dokumentation.',
    points: ['Mietverträge und Anpassungen', 'Beendigung von Mietverhältnissen', 'Begleitung bei Schlichtungsverfahren', 'Dokumentenmanagement'],
  },
  {
    id: 'investments',
    title: 'Immobilieninvestments',
    image: '/assets/property-3.jpg',
    text: 'Persönliche Begleitung bei Investitionsentscheiden sowie An- und Verkaufsprozessen.',
    points: ['Investitionsberatung', 'Off-Market-Deals', 'Portfolio- und Potenzialanalysen', 'Begleitung bei An- und Verkäufen'],
  },
];

const homeServices = [
  {
    title: 'Immobilienverkauf',
    image: '/assets/team-1.jpg',
    text: 'Persönlich begleitet – von der fundierten Bewertung bis zum erfolgreichen Abschluss.',
    href: '/dienstleistungen/immobilienverkauf',
  },
  {
    title: 'Bewirtschaftung',
    image: '/assets/team-2.jpg',
    text: 'Zuverlässige Betreuung mit klaren Prozessen und Blick auf den langfristigen Werterhalt.',
    href: '/dienstleistungen/mietliegenschaften',
  },
  {
    title: 'Immobilienberatung',
    image: '/assets/team-3.jpg',
    text: 'Nachvollziehbare Entscheidungsgrundlagen für Eigentümer, Käufer und Investoren.',
    href: '/dienstleistungen/immobilienbewertung',
  },
];

const soldReferences = [
  ['Mehrfamilienhaus', 'Hägglingen AG', 'Verkauft', '6 Wohnungen', '/assets/references/sale-haegglingen-6.jpg'],
  ['Wohnportfolio', 'Olten SO', 'Verkauft', '24 Wohnungen', '/assets/references/sale-olten-24.jpg'],
  ['3.5-Zimmer-Wohnung', 'Zürich ZH', 'Verkauft', '3.5 Zimmer', '/assets/references/sale-zuerich-35.jpg'],
  ['3.5-Zimmer-Wohnung', 'Bubikon ZH', 'Verkauft', '3.5 Zimmer', '/assets/references/sale-bubikon-35.jpg'],
  ['2.5-Zimmer-Wohnung', 'Hinwil ZH', 'Verkauft', '2.5 Zimmer', '/assets/references/sale-hinwil-25.jpg'],
  ['4.5-Zimmer-Wohnung', 'Dällikon ZH', 'Verkauft', '4.5 Zimmer', '/assets/references/sale-daellikon-45.png'],
];

const rentalReferences = [
  ['4.5-Zimmer-Wohnung', 'Würenlos AG', 'Vermietet', '4.5 Zimmer', '/assets/references/rent-wuerenlos-45.jpg'],
  ['1.5-Zimmer-Wohnung', 'Zürich ZH', 'Vermietet', '1.5 Zimmer', '/assets/references/rent-zuerich-15.jpg'],
  ['Zwei 4.5-Zimmer-Wohnungen', 'Aarburg AG', 'Vermietet', '2 Wohnungen', '/assets/references/rent-aarburg-45.png'],
  ['4.5-Zimmer-Wohnung', 'Reichenburg SZ', 'Vermietet', '4.5 Zimmer', '/assets/references/rent-reichenburg-45.jpg'],
  ['3.5-Zimmer-Wohnung', 'Rudolfstetten AG', 'Vermietet', '3.5 Zimmer', '/assets/references/rent-rudolfstetten-35.png'],
  ['4.5- & 3.5-Zimmer-Wohnungen', 'Altstetten ZH', 'Vermietet', '2 Wohnungen', '/assets/references/rent-altstetten.jpg'],
  ['Attika-Maisonette-Terrassenhaus', 'Rieden SG', 'Vermietet', '5.5 Zimmer', '/assets/references/rent-rieden-attika.jpg'],
  ['5.5-Zimmer-Wohnung', 'Zürich ZH', 'Vermietet', '5.5 Zimmer', '/assets/references/rent-zuerich-55.jpg'],
  ['2.5- & 3.5-Zimmer-Wohnungen', 'Wohlen AG', 'Vermietet', '2 Wohnungen', '/assets/references/rent-wohlen-25-35.jpg'],
  ['3.5-Zimmer-Wohnung', 'Zürich ZH', 'Vermietet', '3.5 Zimmer', '/assets/references/rent-zuerich-35.jpg'],
  ['4.5-Zimmer-Wohnung', 'Wohlen AG', 'Vermietet', '4.5 Zimmer', '/assets/references/rent-wohlen-45.jpg'],
  ['4-Zimmer-Reihenhaus', 'Wohlen AG', 'Vermietet', '4 Zimmer', '/assets/references/rent-wohlen-reihenhaus.jpg'],
  ['Gewerbefläche', 'Wohlen AG', 'Vermietet', 'Gewerbe', '/assets/references/rent-wohlen-gewerbe.jpg'],
  ['1.5-Zimmer-Wohnung', 'Opfikon ZH', 'Vermietet', '1.5 Zimmer', '/assets/references/rent-opfikon-15.jpg'],
];

const managementReferences = [
  ['Wohnliegenschaft', 'Bubendorf BL', 'Verwaltungsmandat', '6 Wohnungen', '/assets/references/manage-bubendorf-6.jpg'],
  ['Wohn- und Geschäftsliegenschaft', '', 'Verwaltungsmandat', '2 Ladenflächen · 6 Wohnungen', '/assets/references/manage-shops-apartments.jpg'],
  ['Wohnliegenschaft', 'Staad SG', 'Verwaltungsmandat', '8 Wohnungen', '/assets/references/manage-staad-8.jpg'],
  ['Wohnliegenschaft', 'Hägglingen AG', 'Verwaltungsmandat', '6 Wohnungen', '/assets/references/manage-haegglingen-6.jpg'],
  ['Wohnliegenschaft', 'Rheineck SG', 'Verwaltungsmandat', '12 Wohnungen', '/assets/references/manage-rheineck-12.jpg'],
  ['Wohnliegenschaft', 'Glarus GL', 'Verwaltungsmandat', '8 Wohnungen', '/assets/references/manage-glarus-8.jpg'],
  ['Wohnliegenschaft', 'Hägglingen AG', 'Verwaltungsmandat', '8 Wohnungen', '/assets/references/manage-haegglingen-8.png'],
  ['Wohn- und Gewerbeliegenschaft', 'Schaffhausen SH', 'Verwaltungsmandat', '16 Wohnungen · 2 Gewerbeflächen', '/assets/references/manage-schaffhausen.png'],
];

const references = [...soldReferences, ...rentalReferences, ...managementReferences];

const process = [
  ['01', 'Erstgespräch', 'Wir besprechen Ihre Ziele, Anforderungen und Erwartungen in einem persönlichen Gespräch.'],
  ['02', 'Analyse', 'Wir analysieren Ihre Immobilie oder Ihren Bedarf und entwickeln eine massgeschneiderte Strategie.'],
  ['03', 'Umsetzung', 'Wir setzen die vereinbarten Massnahmen professionell, transparent und zuverlässig um.'],
  ['04', 'Partnerschaft', 'Wir begleiten Sie langfristig und stehen Ihnen als vertrauensvoller Partner zur Seite.'],
];

const benefits = [
  ['Vertrauen & Sicherheit', 'Ihre Immobilie ist bei uns in sicheren Händen. Wir arbeiten transparent und verlässlich.'],
  ['Lokale Expertise', 'Wir kennen den Schweizer Markt und verstehen die Besonderheiten der jeweiligen Region.'],
  ['Persönliche Betreuung', 'Sie haben einen festen Ansprechpartner, der Ihre Situation und Ihre Ziele kennt.'],
  ['Massgeschneiderte Lösungen', 'Jede Immobilie ist anders. Deshalb entwickeln wir Strategien statt Standardpakete.'],
  ['Starkes Netzwerk', 'Bewährte Partner ermöglichen kurze Wege, schnelle Reaktionen und saubere Lösungen.'],
  ['Leidenschaft für Immobilien', 'Wir verbinden fachliche Sorgfalt mit echtem Engagement für Ihr Objekt.'],
];

const team = [
  ['EL', 'Eduard Laska', 'Geschäftsführer', 'Über 10 Jahre Erfahrung in der Immobilienbranche · Eidg. Fachausweis'],
  ['DL', 'Dorentina Laska', 'Sachbearbeiterin Immobilien', 'Persönliche und zuverlässige Betreuung unserer Kundschaft'],
  ['JM', 'Jozefina Markaj', 'Vermarktung', 'Dipl. Innenarchitektin · Immobilien wirkungsvoll positioniert'],
];

const navGroups = [
  {
    label: 'Firma',
    href: '/firma',
    items: [['Über uns', '/uber-uns'], ['Unser Team', '/team'], ['Werte & Arbeitsweise', '/werte']],
  },
  {
    label: 'Dienstleistungen',
    href: '/dienstleistungen',
    items: primaryServices.map((service) => [service.title, `/dienstleistungen/${service.slug}`]),
  },
  {
    label: 'Angebote',
    href: '/angebote',
    items: [['Aktuelle Angebote', '/immobilien'], ['Referenzen', '/referenzen']],
  },
];

function Logo() {
  return (
    <a href="/" className="logo" aria-label="Seehafen & Partner – Startseite">
      <img src="/assets/logo.png" alt="Seehafen & Partner Immobilien AG" />
    </a>
  );
}

function NavDropdown({ group, currentPath }) {
  const [open, setOpen] = useState(false);
  const isActive = currentPath === group.href || group.items.some(([, href]) => currentPath === href);

  return (
    <div className={`nav-dropdown${open ? ' is-open' : ''}${isActive ? ' is-active' : ''}`}>
      <div className="nav-dropdown-trigger">
        <a href={group.href} aria-current={currentPath === group.href ? 'page' : undefined}>{group.label}</a>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={`${group.label} Untermenü ${open ? 'schliessen' : 'öffnen'}`}
        >
          <ChevronDown aria-hidden="true" />
        </button>
      </div>
      <div className="dropdown-panel">
        {group.items.map(([name, href]) => (
          <a href={href} key={name} aria-current={currentPath === href ? 'page' : undefined}>{name}</a>
        ))}
      </div>
    </div>
  );
}

function Header({ currentPath }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    document.body.classList.toggle('menu-open', open);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <nav id="main-navigation" className={`main-nav${open ? ' is-open' : ''}`} aria-label="Hauptnavigation">
          {navGroups.map((group) => <NavDropdown group={group} currentPath={currentPath} key={group.label} />)}
          <a href="/kontakt" className={currentPath === '/kontakt' ? 'is-active' : ''} aria-current={currentPath === '/kontakt' ? 'page' : undefined}>Kontakt</a>
          <a className="header-cta" href="/kontakt">Kostenlose Bewertung <ArrowRight aria-hidden="true" /></a>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Persönliche Immobiliendienstleistungen mit Weitblick – in Schwyz, Wohlen und der ganzen Schweiz.</p>
        </div>
        <div>
          <strong>Hauptsitz Schwyz</strong>
          <p>Bahnhofstrasse 4<br />6430 Schwyz</p>
          <strong>Filiale Wohlen</strong>
          <p>Cheiblerrain 13<br />5610 Wohlen</p>
        </div>
        <div className="footer-contact">
          <strong>Direkter Kontakt</strong>
          <a href="tel:+41444514302"><Phone aria-hidden="true" /> +41 44 451 43 02</a>
          <a href="tel:+41797857880"><Phone aria-hidden="true" /> +41 79 785 78 80</a>
          <a href="mailto:info@seehafen-immobilien.ch"><Mail aria-hidden="true" /> info@seehafen-immobilien.ch</a>
        </div>
      </div>
      <div className="content footer-bottom">
        <span>© 2026 Seehafen & Partner Immobilien AG</span>
        <span>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/agb">AGB</a>
        </span>
      </div>
    </footer>
  );
}

function CTA() {
  return (
    <section className="contact-strip">
      <div className="content">
        <div>
          <span className="kicker">Kostenloses Erstgespräch</span>
          <h2>Lassen Sie uns über Ihre Immobilie sprechen.</h2>
          <p>Montag bis Freitag · 08:00–12:00 und 13:30–17:00 Uhr</p>
        </div>
        <a className="button button-light" href="/kontakt">Kontakt aufnehmen <ArrowRight aria-hidden="true" /></a>
      </div>
    </section>
  );
}

function PageHero({ label, title, text, image }) {
  const defaultImages = {
    Firma: '/assets/about.jpg',
    Dienstleistungen: '/assets/property-hero.jpg',
    Immobilien: '/assets/property-1.jpg',
    Angebote: '/assets/property-1.jpg',
    Kontakt: '/assets/team-2.jpg',
    Rechtliches: '/assets/property-hero.jpg',
  };
  const heroImage = image || defaultImages[label] || '/assets/property-hero.jpg';

  return (
    <section className="page-hero">
      <div className="page-hero-media">
        <img src={heroImage} alt="" />
      </div>
      <div className="content page-hero-copy">
        <div>
          <span className="kicker">{label}</span>
          <h1>{title}</h1>
        </div>
        <p>{text}</p>
      </div>
    </section>
  );
}

function ReferenceTile({ item }) {
  const [title, location, type, detail, image] = item;
  return (
    <article className="reference-tile">
      <img src={image} alt={title} loading="lazy" />
      <div className="reference-tile-body">
        <span className="reference-type">{type}</span>
        <h3>{title}</h3>
        <div className="reference-tile-meta">
          {location && <span><MapPin aria-hidden="true" /> {location}</span>}
          {detail && <span><Ruler aria-hidden="true" /> {detail}</span>}
        </div>
      </div>
    </article>
  );
}

function PrimaryServiceCard({ service }) {
  return (
    <article className="primary-service-card">
      <img src={service.hero} alt="" loading="lazy" />
      <div>
        <h2>{service.title}</h2>
        <a href={`/dienstleistungen/${service.slug}`}>Mehr erfahren <ArrowRight aria-hidden="true" /></a>
      </div>
    </article>
  );
}

function OverviewLinks({ items }) {
  return (
    <section className="overview-links">
      <div className="content overview-link-grid">
        {items.map(({ title, text, image, href }) => (
          <a href={href} className="overview-link-card" key={title}>
            <img src={image} alt="" loading="lazy" />
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
              <span>Entdecken <ArrowRight aria-hidden="true" /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ProcessSection({ compact = false }) {
  return (
    <section className={`process-section${compact ? ' compact' : ''}`}>
      <div className="content">
        <div className="section-heading split-heading">
          <div>
            <span className="kicker">Unser Prozess</span>
            <h2>So arbeiten wir.</h2>
          </div>
          <p>Strukturiert, transparent und immer im Interesse unserer Kundinnen und Kunden.</p>
        </div>
        <div className="process-grid">
          {process.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="content benefits-layout">
        <div className="benefits-intro">
          <span className="kicker">Ihre Vorteile</span>
          <h2>Warum Seehafen & Partner?</h2>
          <p>Immobilien verlangen fachliche Sorgfalt und einen Partner, der Verantwortung persönlich nimmt.</p>
          <a className="text-link" href="/werte">Unsere Arbeitsweise <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="benefits-grid">
          {benefits.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeOffers() {
  return (
    <section className="home-offers">
      <div className="content">
        <div className="section-heading home-offers-heading">
          <div>
            <span className="kicker">Immobilien</span>
            <h2>Unsere aktuellen Angebote.</h2>
          </div>
          <a className="text-link" href="/immobilien">Alle Angebote <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="home-offers-grid">
          <a className="home-offer-card" href="/immobilien">
            <img src="/assets/property-3.jpg" alt="" loading="lazy" />
            <div>
              <span className="reference-type">Aktuelle Angebote</span>
              <h3>Immobilien zum Kauf.</h3>
              <p>Entdecken Sie unsere aktuell verfügbaren Kaufobjekte auf dem offiziellen Anbieterprofil.</p>
              <span className="home-offer-link">Kaufobjekte ansehen <ArrowRight aria-hidden="true" /></span>
            </div>
          </a>
          <a className="home-offer-card" href="/immobilien">
            <img src="/assets/property-1.jpg" alt="" loading="lazy" />
            <div>
              <span className="reference-type">Aktuelle Angebote</span>
              <h3>Immobilien zur Miete.</h3>
              <p>Alle verfügbaren Mietobjekte finden Sie jederzeit aktuell auf unserem offiziellen Anbieterprofil.</p>
              <span className="home-offer-link">Mietobjekte ansehen <ArrowRight aria-hidden="true" /></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <img src="/assets/hero-original.jpg" alt="Moderne Immobilie mit Pool und Weitblick" />
        <div className="hero-overlay" />
        <div className="content hero-content">
          <p className="hero-eyebrow">Langfristig. Persönlich. Verlässlich.</p>
          <h1>Immobilien<br />mit Weitblick.</h1>
          <p className="hero-lead">Persönliche Beratung, verantwortungsvolle Entscheidungen und engagierte Begleitung.</p>
          <a className="hero-scroll" href="#expertise" aria-label="Zu den Leistungen">
            <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="expertise" className="home-intro">
        <div className="content">
          <div className="home-heading">
            <div>
              <span className="kicker">Unsere Expertise</span>
              <h2>Persönlich begleitet.<br />Klar entschieden.</h2>
            </div>
            <p>Der Verkauf oder die Bewirtschaftung einer Liegenschaft ist mehr als eine Transaktion. Wir führen Sie sicher durch den gesamten Prozess – professionell, transparent und mit Herzblut.</p>
          </div>
          <div className="home-services">
            {homeServices.map((service) => (
              <article className="home-service-card" key={service.title}>
                <img src={service.image} alt="" loading="lazy" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={service.href}>Mehr erfahren <ArrowRight aria-hidden="true" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeOffers />

      <section className="home-references">
        <div className="content">
          <div className="section-heading">
            <div>
              <span className="kicker">Referenzen</span>
              <h2>Kürzlich verkaufte Objekte.</h2>
            </div>
            <a className="text-link" href="/referenzen">Alle Referenzen <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="reference-preview-grid">
            {soldReferences.map((item) => <ReferenceTile key={`${item[0]}-${item[1]}`} item={item} />)}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function CompanyOverview() {
  return (
    <>
      <PageHero label="Firma" title="Immobilien sind persönlich." text="Lernen Sie unsere Haltung, unsere Arbeitsweise und die Menschen hinter Seehafen & Partner kennen." image="/assets/about.jpg" />
      <OverviewLinks items={[
        { title: 'Über uns', text: 'Wofür wir stehen und wie wir Immobilien betreuen.', image: '/assets/property-hero.jpg', href: '/uber-uns' },
        { title: 'Unser Team', text: 'Persönliche Ansprechpartner mit Erfahrung und Engagement.', image: '/assets/team-2.jpg', href: '/team' },
        { title: 'Werte & Arbeitsweise', text: 'Klar, verlässlich und langfristig orientiert.', image: '/assets/team-3.jpg', href: '/werte' },
      ]} />
      <CTA />
    </>
  );
}

function About() {
  return (
    <>
      <PageHero label="Über uns" title="Drei Persönlichkeiten. Eine Leidenschaft." text="Wir betreuen Immobilien mit Engagement, Fachwissen und Weitblick – persönlich, effizient und immer im Interesse unserer Kundschaft." image="/assets/about.jpg" />
      <section className="company-story">
        <div className="content company-story-grid">
          <div>
            <span className="kicker">Seehafen & Partner</span>
            <h2>Ein verlässlicher Partner für Ihre Immobilie.</h2>
          </div>
          <div>
            <p>Als unabhängiges Immobilienunternehmen handeln wir im Interesse unserer Kundinnen und Kunden. Wir hören zu, denken voraus und schaffen klare Lösungen.</p>
            <p>Unser Anspruch ist, Immobilien nicht nur zu verwalten oder zu vermitteln, sondern Werte nachhaltig zu sichern und weiterzuentwickeln.</p>
          </div>
        </div>
      </section>
      <section className="about-principles">
        <div className="content principle-grid">
          {[
            ['Verlässlichkeit', 'Wir halten, was wir versprechen – mit klaren Prozessen und transparenter Kommunikation.'],
            ['Persönliche Betreuung', 'Jede Situation ist einzigartig. Sie erhalten eine Lösung, die wirklich zu Ihnen passt.'],
            ['Fachkompetenz', 'Fundiertes Marktverständnis und langjährige Erfahrung bilden die Basis unserer Arbeit.'],
            ['Nachhaltigkeit', 'Der langfristige Werterhalt Ihrer Immobilie steht im Zentrum unseres Handelns.'],
          ].map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <ProcessSection />
      <BenefitsSection />
      <section className="quote-section">
        <div className="content">
          <p>„Wir begleiten nicht nur Immobilien – wir bauen Beziehungen auf, die langfristig tragen.“</p>
          <a className="text-link" href="/team">Lernen Sie uns kennen <ArrowRight aria-hidden="true" /></a>
        </div>
      </section>
      <CTA />
    </>
  );
}

function TeamPage() {
  return (
    <>
      <section className="team-page">
        <div className="content">
          <div className="team-page-heading">
            <span className="kicker">Persönlich für Sie da</span>
            <h1>Unser Team</h1>
            <p>Drei Persönlichkeiten, ein gemeinsamer Anspruch: Ihre Immobilie zuverlässig und mit Weitblick zu begleiten.</p>
          </div>
          <div className="team-grid">
            {team.map(([initials, name, role, bio]) => (
              <article key={name}>
                <span className="team-avatar">{initials}</span>
                <h2>{name}</h2>
                <strong>{role}</strong>
                <p>{bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function ValuesPage() {
  return (
    <>
      <PageHero label="Werte & Arbeitsweise" title="Klar in der Haltung. Strukturiert im Handeln." text="Unsere Zusammenarbeit basiert auf Vertrauen, transparenter Kommunikation und einem verlässlichen Vorgehen." image="/assets/team-3.jpg" />
      <section className="values-section">
        <div className="content">
          <div className="simple-heading">
            <span className="kicker">Unsere Werte</span>
            <h2>Was Sie von uns erwarten dürfen.</h2>
          </div>
          <div className="values">
            <article><strong>Integrität</strong><span>Ehrlich und transparent.</span></article>
            <article><strong>Qualität</strong><span>Sorgfältig und professionell.</span></article>
            <article><strong>Weitblick</strong><span>Langfristig Werte erhalten.</span></article>
          </div>
        </div>
      </section>
      <ProcessSection compact />
      <CTA />
    </>
  );
}

function Services() {
  return (
    <>
      <PageHero label="Dienstleistungen" title="Immobilien. Einfach gut begleitet." text="Umfassende Immobiliendienstleistungen für Eigentümer, Investoren und Mieter – mit einem festen Ansprechpartner und klaren Lösungen." />
      <section className="services-page">
        <div className="content primary-service-grid">
          {primaryServices.map((service) => <PrimaryServiceCard key={service.slug} service={service} />)}
        </div>
      </section>
      <section className="secondary-services">
        <div className="content">
          <div className="section-heading split-heading">
            <div>
              <span className="kicker">Weitere Fachbereiche</span>
              <h2>Ergänzend für Sie da.</h2>
            </div>
            <p>Bei komplexeren Vorhaben koordinieren wir auch die angrenzenden Themen – übersichtlich und aus einer Hand.</p>
          </div>
          <div className="secondary-service-grid">
            {additionalServices.map((service) => (
              <article id={service.id} key={service.title}>
                <img src={service.image} alt="" loading="lazy" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>{service.points.map((point) => <li key={point}><Check aria-hidden="true" /> {point}</li>)}</ul>
                  <a href="/kontakt">Beratung anfragen <ArrowRight aria-hidden="true" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection compact />
      <CTA />
    </>
  );
}

function ServiceDetail({ service }) {
  return (
    <>
      <PageHero label="Dienstleistungen" title={service.title} text={service.lead} image={service.hero} />
      <section className="service-detail">
        <div className="content service-detail-grid">
          <div>
            <span className="kicker">Unsere Leistung</span>
            <h2>{service.heading}</h2>
            <p>{service.copy}</p>
            <a className="button button-solid" href="/kontakt">Beratung anfragen <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="service-detail-visual">
            <img src={service.detailImage} alt="" />
            <ul>{service.points.map((point) => <li key={point}><Check aria-hidden="true" /> {point}</li>)}</ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function OffersOverview() {
  return (
    <>
      <PageHero label="Angebote" title="Immobilien im Überblick." text="Entdecken Sie aktuelle Kauf- und Mietangebote oder werfen Sie einen Blick auf erfolgreich begleitete Projekte." image="/assets/property-1.jpg" />
      <OverviewLinks items={[
        { title: 'Aktuelle Angebote', text: 'Verfügbare Kauf- und Mietobjekte auf unserem offiziellen Anbieterprofil.', image: '/assets/property-3.jpg', href: '/immobilien' },
        { title: 'Referenzen', text: 'Eine Auswahl verkaufter, vermieteter und verwalteter Immobilien.', image: '/assets/property-2.jpg', href: '/referenzen' },
      ]} />
      <CTA />
    </>
  );
}

function References() {
  const [showAllReferences, setShowAllReferences] = useState(false);
  const visibleReferences = showAllReferences ? references : references.slice(0, 9);

  return (
    <>
      <section className="reference-archive">
        <div className="content">
          <div className="reference-archive-intro">
            <span className="kicker">Referenzen</span>
            <h1>Erfolgreiche Projekte.</h1>
            <p>Erfolgreiche Projekte, die für Qualität, Vertrauen und Erfahrung stehen – vom Verkauf über die Vermietung bis zur langfristigen Bewirtschaftung.</p>
          </div>
          <div className="reference-archive-grid" id="reference-grid">
            {visibleReferences.map((item, index) => (
              <ReferenceTile key={`${item[2]}-${item[1]}-${index}`} item={item} />
            ))}
          </div>
          {!showAllReferences && (
            <div className="reference-show-more">
              <button
                className="button button-solid"
                type="button"
                onClick={() => setShowAllReferences(true)}
                aria-controls="reference-grid"
                aria-expanded="false"
              >
                Mehr anzeigen <ArrowDown aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </section>
      <CTA />
    </>
  );
}

function Listings() {
  return (
    <>
      <PageHero label="Immobilien" title="Aktuelle Angebote" text="Unsere Kauf- und Mietobjekte werden zentral und aktuell auf unserem offiziellen Homegate-Anbieterprofil veröffentlicht." />
      <section className="listings-page">
        <div className="content listings-panel">
          <div>
            <span className="kicker">Immer aktuell auf Homegate</span>
            <h2>Entdecken Sie unsere aktuellen Immobilienangebote.</h2>
            <p>Alle verfügbaren Kauf- und Mietobjekte finden Sie direkt auf unserem offiziellen Homegate-Profil. Dort sehen Sie jederzeit den aktuellen Stand.</p>
          </div>
          <a className="button button-solid" href="https://www.homegate.ch/anbieter/h475138/seehafen-partner-immobilien-ag" target="_blank" rel="noreferrer">
            Angebote auf Homegate <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </section>
      <CTA />
    </>
  );
}

function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();
    setStatus('sending');
    setError('');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || 'Senden fehlgeschlagen');
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  }

  return (
    <>
      <PageHero label="Kontakt" title="Nehmen Sie Kontakt auf." text="Haben Sie Fragen oder möchten Sie eine Beratung? Vereinbaren Sie ein kostenloses Erstgespräch – wir freuen uns auf Sie." />
      <section className="contact-page">
        <div className="content contact-grid">
          <article className="contact-card">
            <span className="kicker">Hauptsitz</span>
            <h2>Schwyz</h2>
            <p>Seehafen & Partner Immobilien AG<br />Bahnhofstrasse 4<br />6430 Schwyz</p>
          </article>
          <article className="contact-card">
            <span className="kicker">Filiale</span>
            <h2>Wohlen</h2>
            <p>Seehafen & Partner Immobilien AG<br />Cheiblerrain 13<br />5610 Wohlen</p>
          </article>
          <article className="contact-card contact-direct">
            <span className="kicker">Direkter Kontakt</span>
            <a href="tel:+41444514302"><Phone aria-hidden="true" /> +41 44 451 43 02</a>
            <a href="tel:+41797857880"><Phone aria-hidden="true" /> +41 79 785 78 80</a>
            <a href="mailto:info@seehafen-immobilien.ch"><Mail aria-hidden="true" /> info@seehafen-immobilien.ch</a>
            <p><strong>Öffnungszeiten</strong><br />Montag bis Freitag<br />08:00–12:00 · 13:30–17:00 Uhr</p>
          </article>
        </div>

        <form className="contact-form content" onSubmit={submit}>
          <div className="form-heading">
            <span className="kicker">Schreiben Sie uns</span>
            <h2>Wie können wir Ihnen helfen?</h2>
            <p>Wir melden uns persönlich bei Ihnen zurück.</p>
          </div>
          <div className="form-fields">
            <label>Name *<input name="name" required autoComplete="name" /></label>
            <label>E-Mail *<input name="email" type="email" required autoComplete="email" /></label>
            <label>Telefon<input name="phone" type="tel" autoComplete="tel" /></label>
            <label>Thema
              <select name="subject" defaultValue="Allgemeine Anfrage">
                <option>Allgemeine Anfrage</option>
                <option>Immobilienverkauf</option>
                <option>Bewirtschaftung</option>
                <option>Immobilienberatung</option>
                <option>Immobiliensuche</option>
              </select>
            </label>
            <label className="full">Nachricht *<textarea name="message" required rows="6" /></label>
            <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" /></label>
            <label className="consent full">
              <input name="privacy" type="checkbox" required />
              <span>Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen und stimme der Bearbeitung meiner Angaben zur Kontaktaufnahme zu.</span>
            </label>
            <button className="button button-solid" disabled={status === 'sending'}>
              {status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden'} <ArrowRight aria-hidden="true" />
            </button>
            <div className="form-feedback" aria-live="polite">
              {status === 'success' && <p className="form-success">Vielen Dank. Ihre Nachricht wurde erfolgreich gesendet.</p>}
              {status === 'error' && <p className="form-error">{error}</p>}
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

function LegalPage({ title, intro, children }) {
  return (
    <>
      <PageHero label="Rechtliches" title={title} text={intro} />
      <section className="legal-page">
        <div className="content legal-content">{children}</div>
      </section>
    </>
  );
}

function Impressum() {
  return (
    <LegalPage title="Impressum" intro="Unternehmensinformationen und rechtliche Hinweise der Seehafen & Partner Immobilien AG.">
      <h2>Unternehmensinformationen</h2>
      <p><strong>Seehafen & Partner Immobilien AG</strong><br />Bahnhofstrasse 4<br />6430 Schwyz<br />Schweiz</p>
      <h2>Kontakt</h2>
      <p>E-Mail: <a href="mailto:info@seehafen-immobilien.ch">info@seehafen-immobilien.ch</a></p>
      <h2>Handelsregistereintrag</h2>
      <p>Eingetragener Firmenname: Seehafen & Partner Immobilien AG<br />Handelsregister des Kantons Schwyz<br />UID: CHE-437.125.709</p>
      <h2>Haftungsausschluss</h2>
      <p>Die Inhalte dieser Website werden mit grösster Sorgfalt erstellt und regelmässig geprüft. Dennoch übernimmt die Seehafen & Partner Immobilien AG keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen.</p>
      <p>Als Diensteanbieter sind wir gemäss den anwendbaren gesetzlichen Bestimmungen für eigene Inhalte auf diesen Seiten verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nicht. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden diese Inhalte umgehend entfernt.</p>
      <h2>Urheberrecht</h2>
      <p>Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem schweizerischen Urheberrecht. Jede Art der Vervielfältigung, Bearbeitung, Verbreitung oder sonstigen Verwertung ausserhalb der Grenzen des Urheberrechts bedarf der vorgängigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.</p>
    </LegalPage>
  );
}

function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung" intro="Informationen zur Bearbeitung personenbezogener Daten auf dieser Website.">
      <p>Der Schutz Ihrer persönlichen Daten ist der Seehafen & Partner Immobilien AG ein wichtiges Anliegen. In dieser Datenschutzerklärung informieren wir Sie darüber, wie personenbezogene Daten auf dieser Website bearbeitet werden.</p>
      <h2>Verantwortliche Stelle</h2>
      <p>Verantwortlich für die Datenbearbeitung im Sinne des schweizerischen Datenschutzgesetzes (DSG) ist:</p>
      <p><strong>Seehafen & Partner Immobilien AG</strong><br />Bahnhofstrasse 4<br />6430 Schwyz<br />Schweiz<br />E-Mail: <a href="mailto:info@seehafen-immobilien.ch">info@seehafen-immobilien.ch</a></p>
      <h2>Erhebung und Bearbeitung personenbezogener Daten</h2>
      <p>Personenbezogene Daten werden erhoben, wenn Sie uns diese freiwillig mitteilen, beispielsweise bei der Kontaktaufnahme per E-Mail oder über das Kontaktformular. Dabei kann es sich insbesondere um Name, E-Mail-Adresse, Telefonnummer oder weitere von Ihnen übermittelte Informationen handeln.</p>
      <p>Die Bearbeitung dieser Daten erfolgt ausschliesslich zum Zweck der Bearbeitung Ihrer Anfrage oder zur Kontaktaufnahme mit Ihnen.</p>
      <h2>Zweck der Datenbearbeitung</h2>
      <p>Die Bearbeitung personenbezogener Daten erfolgt zur Beantwortung von Anfragen, zur Erfüllung vertraglicher und vorvertraglicher Pflichten sowie zur Erbringung unserer Dienstleistungen im Bereich Immobilien.</p>
      <h2>Hosting und technische Dienstleister</h2>
      <p>Diese Website und das Kontaktformular werden über Dienste von Cloudflare betrieben. Dabei können technische Verbindungsdaten sowie die über das Kontaktformular eingegebenen Angaben verarbeitet werden. Wir setzen Dienstleister nur ein, soweit dies für den sicheren Betrieb der Website und die Bearbeitung Ihrer Anfrage erforderlich ist.</p>
      <h2>Weitergabe von Daten an Dritte</h2>
      <p>Eine Weitergabe personenbezogener Daten erfolgt nur, sofern dies zur Vertragserfüllung oder zum Betrieb dieser Website erforderlich ist, eine gesetzliche Verpflichtung besteht oder Sie ausdrücklich eingewilligt haben. Bei einer Bearbeitung ausserhalb der Schweiz achten wir auf angemessene datenschutzrechtliche Garantien.</p>
      <h2>Datensicherheit</h2>
      <p>Wir setzen angemessene technische und organisatorische Sicherheitsmassnahmen ein, um personenbezogene Daten vor unbefugtem Zugriff, Verlust, Missbrauch oder Manipulation zu schützen. Diese Massnahmen werden entsprechend der technologischen Entwicklung laufend angepasst.</p>
      <h2>Cookies</h2>
      <p>Diese Website kann technisch notwendige Cookies verwenden. Sie können die Verwendung von Cookies in den Einstellungen Ihres Browsers einschränken oder deaktivieren. Die Deaktivierung kann die Funktionalität der Website beeinträchtigen.</p>
      <h2>Rechte der betroffenen Personen</h2>
      <p>Sie haben im Rahmen der geltenden datenschutzrechtlichen Bestimmungen das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten sowie das Recht auf Berichtigung, Löschung oder Einschränkung der Bearbeitung. Anfragen richten Sie bitte an die oben genannte Kontaktadresse.</p>
      <h2>Änderungen dieser Datenschutzerklärung</h2>
      <p>Die Seehafen & Partner Immobilien AG behält sich vor, diese Datenschutzerklärung jederzeit anzupassen, insbesondere bei Änderungen gesetzlicher Vorgaben oder bei Weiterentwicklungen der Website oder Dienstleistungen.</p>
    </LegalPage>
  );
}

function Terms() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen" intro="Diese AGB regeln die Geschäftsbeziehung zwischen der Seehafen & Partner Immobilien AG und ihren Kunden.">
      <h2>1. Geltungsbereich</h2>
      <p>Diese AGB gelten für alle Dienstleistungen der Seehafen & Partner Immobilien AG im Bereich Immobilienbewirtschaftung, Vermarktung, Beratung und verwandte Dienstleistungen.</p>
      <h2>2. Vertragsabschluss</h2>
      <p>Ein Vertrag kommt durch schriftliche Bestätigung des Auftrags durch die Seehafen & Partner Immobilien AG zustande. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.</p>
      <h2>3. Leistungsumfang</h2>
      <p>Der Umfang der zu erbringenden Leistungen ergibt sich aus dem jeweiligen Einzelvertrag. Die Seehafen & Partner Immobilien AG erbringt ihre Leistungen mit der Sorgfalt eines ordentlichen Kaufmanns.</p>
      <h2>4. Honorare und Zahlungsbedingungen</h2>
      <p>Die Honorare werden im Einzelvertrag vereinbart. Rechnungen sind innert 30 Tagen nach Rechnungsstellung ohne Abzug zahlbar. Bei Zahlungsverzug werden Verzugszinsen von 5 % p. a. berechnet.</p>
      <h2>5. Vertraulichkeit</h2>
      <p>Die Seehafen & Partner Immobilien AG verpflichtet sich, alle im Rahmen der Geschäftsbeziehung erlangten Informationen vertraulich zu behandeln.</p>
      <h2>6. Haftung</h2>
      <p>Die Haftung der Seehafen & Partner Immobilien AG beschränkt sich auf Vorsatz und grobe Fahrlässigkeit. Eine weitergehende Haftung ist ausgeschlossen, soweit gesetzlich zulässig.</p>
      <h2>7. Anwendbares Recht und Gerichtsstand</h2>
      <p>Es gilt schweizerisches Recht. Ausschliesslicher Gerichtsstand ist Schwyz.</p>
    </LegalPage>
  );
}

function NotFound() {
  return (
    <section className="not-found">
      <div className="content">
        <span>404</span>
        <h1>Diese Seite wurde nicht gefunden.</h1>
        <p>Die gewünschte Adresse existiert nicht oder wurde verschoben.</p>
        <a className="button button-solid" href="/">Zur Startseite <ArrowRight aria-hidden="true" /></a>
      </div>
    </section>
  );
}

const meta = {
  '/': ['Seehafen Immobilien | Verkauf, Beratung & Bewirtschaftung', 'Seehafen & Partner Immobilien AG – persönliche Immobilienberatung, Verkauf und Bewirtschaftung in der Schweiz.'],
  '/firma': ['Firma | Seehafen Immobilien', 'Lernen Sie Seehafen & Partner, unsere Haltung und unsere Arbeitsweise kennen.'],
  '/uber-uns': ['Über uns | Seehafen Immobilien', 'Lernen Sie Seehafen & Partner, unser Team, unsere Werte und unsere Arbeitsweise kennen.'],
  '/team': ['Unser Team | Seehafen Immobilien', 'Lernen Sie die persönlichen Ansprechpartner von Seehafen & Partner kennen.'],
  '/werte': ['Werte & Arbeitsweise | Seehafen Immobilien', 'Erfahren Sie mehr über die Werte und Arbeitsweise von Seehafen & Partner.'],
  '/dienstleistungen': ['Immobiliendienstleistungen | Seehafen Immobilien', 'Bewirtschaftung, Immobilienverkauf, Beratung, Erstvermietung, Baumanagement und Investments.'],
  '/dienstleistungen/immobilienverkauf': ['Immobilienverkauf | Seehafen Immobilien', 'Persönliche Begleitung beim professionellen Verkauf Ihrer Immobilie.'],
  '/dienstleistungen/immobilienbewertung': ['Immobilienbewertung | Seehafen Immobilien', 'Fundierte und nachvollziehbare Bewertung Ihrer Immobilie.'],
  '/dienstleistungen/stockwerkeigentum': ['Stockwerkeigentum | Seehafen Immobilien', 'Strukturierte und transparente Verwaltung von Stockwerkeigentum.'],
  '/dienstleistungen/mietliegenschaften': ['Mietliegenschaften | Seehafen Immobilien', 'Persönliche und nachhaltige Bewirtschaftung von Mietliegenschaften.'],
  '/angebote': ['Angebote | Seehafen Immobilien', 'Aktuelle Immobilienangebote und erfolgreich begleitete Referenzprojekte.'],
  '/immobilien': ['Aktuelle Immobilien | Seehafen Immobilien', 'Aktuelle Kauf- und Mietangebote von Seehafen & Partner Immobilien auf Homegate.'],
  '/referenzen': ['Referenzen | Seehafen Immobilien', 'Ausgewählte erfolgreich verkaufte, vermietete und verwaltete Immobilienprojekte.'],
  '/kontakt': ['Kontakt | Seehafen Immobilien', 'Kontaktieren Sie Seehafen & Partner in Schwyz oder Wohlen für ein kostenloses Erstgespräch.'],
  '/impressum': ['Impressum | Seehafen Immobilien', 'Impressum und Unternehmensinformationen der Seehafen & Partner Immobilien AG.'],
  '/datenschutz': ['Datenschutz | Seehafen Immobilien', 'Datenschutzerklärung der Seehafen & Partner Immobilien AG.'],
  '/agb': ['AGB | Seehafen Immobilien', 'Allgemeine Geschäftsbedingungen der Seehafen & Partner Immobilien AG.'],
};

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const aliases = {
    '/datenschutzrichtlinie': '/datenschutz',
    '/geschaftsbedingungen': '/agb',
  };
  const canonicalPath = aliases[path] || path;
  const pageMeta = meta[canonicalPath] || ['Seite nicht gefunden | Seehafen Immobilien', 'Die gewünschte Seite wurde nicht gefunden.'];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pageMeta[0];
    const setMeta = (keyType, key, value) => {
      let element = document.querySelector(`meta[${keyType}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(keyType, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };
    setMeta('name', 'description', pageMeta[1]);
    setMeta('property', 'og:title', pageMeta[0]);
    setMeta('property', 'og:description', pageMeta[1]);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', `https://seehafen-immobilien.ch${canonicalPath === '/' ? '' : canonicalPath}`);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://seehafen-immobilien.ch${canonicalPath === '/' ? '' : canonicalPath}`;
    document.documentElement.lang = 'de';
  }, [canonicalPath, pageMeta]);

  const pages = {
    '/': <Home />,
    '/firma': <CompanyOverview />,
    '/uber-uns': <About />,
    '/team': <TeamPage />,
    '/werte': <ValuesPage />,
    '/dienstleistungen': <Services />,
    '/dienstleistungen/immobilienverkauf': <ServiceDetail service={primaryServices[0]} />,
    '/dienstleistungen/immobilienbewertung': <ServiceDetail service={primaryServices[1]} />,
    '/dienstleistungen/stockwerkeigentum': <ServiceDetail service={primaryServices[2]} />,
    '/dienstleistungen/mietliegenschaften': <ServiceDetail service={primaryServices[3]} />,
    '/angebote': <OffersOverview />,
    '/immobilien': <Listings />,
    '/referenzen': <References />,
    '/kontakt': <Contact />,
    '/impressum': <Impressum />,
    '/datenschutz': <Datenschutz />,
    '/agb': <Terms />,
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <Header currentPath={canonicalPath} />
      <main id="main-content">{pages[canonicalPath] || <NotFound />}</main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
