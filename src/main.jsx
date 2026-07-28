import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  RefreshCw,
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

const offerShowcaseItems = [
  {
    slug: 'kaufen',
    label: 'Kaufen',
    title: 'Aktuelle Immobilien zum Kauf.',
    text: 'Entdecken Sie verfügbare Wohn- und Renditeobjekte auf unserem laufend aktualisierten Anbieterprofil.',
    image: '/assets/property-3.jpg',
    location: 'Schweizweit',
    types: 'Wohn- & Renditeobjekte',
  },
  {
    slug: 'mieten',
    label: 'Mieten',
    title: 'Aktuelle Immobilien zur Miete.',
    text: 'Finden Sie Ihr neues Zuhause oder passende Gewerberäume unter unseren aktuellen Mietangeboten.',
    image: '/assets/property-1.jpg',
    location: 'Schweizweit',
    types: 'Wohnen & Gewerbe',
  },
  {
    slug: 'erstvermietung',
    label: 'Erstvermietung',
    title: 'Neubau- und Erstvermietungsprojekte.',
    text: 'Moderne Immobilien und neue Projekte – professionell vermarktet und persönlich begleitet.',
    image: '/assets/hero-original.jpg',
    location: 'Ausgewählte Regionen',
    types: 'Neubau & Erstbezug',
  },
];

const currentListings = [
  {
    title: '4-Zimmer-Wohnung in Schaffhausen',
    address: 'Bachstrasse 40, 8200 Schaffhausen',
    price: 'CHF 1’840.–',
    rooms: '4 Zimmer',
    area: '95 m²',
    href: 'https://www.homegate.ch/mieten/4002880992',
  },
  {
    title: '3-Zimmer-Wohnung in Au',
    address: 'Marktstrasse 7, 9435 Au',
    price: 'CHF 1’530.–',
    rooms: '3 Zimmer',
    area: '75 m²',
    href: 'https://www.homegate.ch/mieten/4002880956',
  },
  {
    title: '3-Zimmer-Wohnung in Staad',
    address: 'Hafen 1, 9422 Staad',
    price: 'CHF 1’286.–',
    rooms: '3 Zimmer',
    area: '50 m²',
    href: 'https://www.homegate.ch/mieten/4002880541',
  },
  {
    title: '4-Zimmer-Wohnung in Rheineck',
    address: 'Feldlistrasse 4, 9424 Rheineck',
    price: 'CHF 1’350.–',
    rooms: '4 Zimmer',
    area: '97 m²',
    href: 'https://www.homegate.ch/mieten/4002880507',
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

const team = [
  ['EL', 'Eduard Laska', 'Geschäftsführer', 'Über 10 Jahre Erfahrung in der Immobilienbranche · Eidg. Fachausweis'],
  ['DL', 'Dorentina Laska', 'Sachbearbeiterin Immobilien', 'Persönliche und zuverlässige Betreuung unserer Kundschaft'],
  ['JM', 'Jozefina Markaj', 'Vermarktung', 'Dipl. Innenarchitektin · Immobilien wirkungsvoll positioniert'],
];

const navGroups = [
  {
    label: 'Firma',
    href: '/firma',
    items: [['Über uns', '/firma#uber-uns'], ['Unser Team', '/firma#team'], ['Werte & Arbeitsweise', '/firma#werte']],
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

function NavDropdown({ group, currentPath, open, onToggle, onNavigate }) {
  const isActive = currentPath === group.href || group.items.some(([, href]) => currentPath === href);
  const panelId = `nav-${group.label.toLowerCase()}-panel`;

  return (
    <div className={`nav-dropdown${open ? ' is-open' : ''}${isActive ? ' is-active' : ''}`}>
      <div className="nav-dropdown-trigger">
        <a href={group.href} onClick={onNavigate} aria-current={currentPath === group.href ? 'page' : undefined}>{group.label}</a>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${group.label} Untermenü ${open ? 'schliessen' : 'öffnen'}`}
        >
          <ChevronDown aria-hidden="true" />
        </button>
      </div>
      <div className="dropdown-panel" id={panelId}>
        {group.items.map(([name, href]) => (
          <a href={href} onClick={onNavigate} key={name} aria-current={currentPath === href ? 'page' : undefined}>{name}</a>
        ))}
      </div>
    </div>
  );
}

function Header({ currentPath }) {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMenu = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeMenu();
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
          {navGroups.map((group) => (
            <NavDropdown
              group={group}
              currentPath={currentPath}
              open={openDropdown === group.label}
              onToggle={() => setOpenDropdown((value) => value === group.label ? null : group.label)}
              onNavigate={closeMenu}
              key={group.label}
            />
          ))}
          <a className="header-cta" href="/kontakt" onClick={closeMenu}>Kostenlose Bewertung <ArrowRight aria-hidden="true" /></a>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => {
            setOpen((value) => {
              if (value) setOpenDropdown(null);
              return !value;
            });
          }}
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
  const heroImage = image === false ? null : image || defaultImages[label] || '/assets/property-hero.jpg';

  return (
    <section className="page-hero">
      <div className={`content page-hero-grid${heroImage ? '' : ' page-hero-grid-text-only'}`}>
        <div className="page-hero-copy">
          <span className="kicker">{label}</span>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        {heroImage && (
          <div className="page-hero-media">
            <img src={heroImage} alt="" />
          </div>
        )}
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

function OverviewLinks({ items, label, title, text }) {
  return (
    <section className="overview-links">
      <div className="content">
        <div className="overview-links-heading">
          <div>
            <span className="kicker">{label}</span>
            <h1>{title}</h1>
          </div>
          <p>{text}</p>
        </div>
        <div className="overview-link-grid">
          {items.map(({ title: itemTitle, text: itemText, image, href }) => (
            <a href={href} className="overview-link-card" key={itemTitle}>
              <img src={image} alt="" loading="lazy" />
              <div>
                <h2>{itemTitle}</h2>
                <p>{itemText}</p>
                <span>Entdecken <ArrowRight aria-hidden="true" /></span>
              </div>
            </a>
          ))}
        </div>
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

function OfferShowcase({ detailed = false }) {
  const requestedOffer = detailed ? new URLSearchParams(window.location.search).get('angebot') : null;
  const requestedIndex = offerShowcaseItems.findIndex((offer) => offer.slug === requestedOffer);
  const [activeIndex, setActiveIndex] = useState(requestedIndex >= 0 ? requestedIndex : 0);
  const offer = offerShowcaseItems[activeIndex];
  const profileUrl = 'https://www.homegate.ch/anbieter/h475138/seehafen-partner-immobilien-ag';
  const detailHref = detailed ? profileUrl : `/immobilien?angebot=${offer.slug}`;

  useEffect(() => {
    offerShowcaseItems.forEach(({ image }) => {
      const preload = new Image();
      preload.src = image;
    });
  }, []);

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + offerShowcaseItems.length) % offerShowcaseItems.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % offerShowcaseItems.length);
  }

  return (
    <div className="offer-showcase">
      <div className="offer-showcase-heading">
        <div>
          <span className="kicker">Immobilien</span>
          <h2>Unsere aktuellen Angebote.</h2>
        </div>
        <a
          className="text-link"
          href={detailed ? profileUrl : '/immobilien'}
          {...(detailed ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          Alle Angebote {detailed ? <ExternalLink aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
        </a>
      </div>

      <div className="offer-showcase-stage">
        <div className="offer-showcase-image">
          <img src={offer.image} alt="" />
          <span>{String(activeIndex + 1).padStart(2, '0')} / {String(offerShowcaseItems.length).padStart(2, '0')}</span>
        </div>
        <article className="offer-showcase-info">
          <span className="reference-type">{offer.label}</span>
          <h3>{offer.title}</h3>
          <p>{offer.text}</p>
          <div className="offer-showcase-facts">
            <span><MapPin aria-hidden="true" /> {offer.location}</span>
            <span><Building2 aria-hidden="true" /> {offer.types}</span>
            <span><RefreshCw aria-hidden="true" /> Laufend aktualisiert</span>
          </div>
          <a
            className="offer-showcase-detail"
            href={detailHref}
            {...(detailed ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {detailed ? 'Angebote öffnen' : 'Details'} {detailed ? <ExternalLink aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
          </a>
        </article>
      </div>

      <div className="offer-showcase-footer">
        <div className="offer-showcase-controls" aria-label="Angebote wechseln">
          <button type="button" onClick={showPrevious} aria-label="Vorheriges Angebot"><ArrowLeft aria-hidden="true" /></button>
          <button type="button" onClick={showNext} aria-label="Nächstes Angebot"><ArrowRight aria-hidden="true" /></button>
        </div>
        <a
          className="button button-solid"
          href={detailed ? profileUrl : '/immobilien'}
          {...(detailed ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          Alle Angebote {detailed && <ExternalLink aria-hidden="true" />}
        </a>
      </div>
    </div>
  );
}

function HomeOffers() {
  return (
    <section className="home-offers">
      <div className="content">
        <OfferShowcase />
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
            {soldReferences.slice(0, 3).map((item) => <ReferenceTile key={`${item[0]}-${item[1]}`} item={item} />)}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function CompanyOverview() {
  const values = [
    ['Verlässlichkeit', 'Wir halten, was wir versprechen, und kommunizieren transparent.'],
    ['Persönliche Betreuung', 'Sie haben einen festen Ansprechpartner, der Ihre Ziele kennt.'],
    ['Fachkompetenz', 'Erfahrung und fundierte Marktkenntnis bilden die Basis unserer Arbeit.'],
    ['Nachhaltigkeit', 'Der langfristige Werterhalt Ihrer Immobilie steht im Mittelpunkt.'],
  ];

  return (
    <>
      <section className="company-about" id="uber-uns">
        <div className="content company-about-grid">
          <div className="company-about-copy">
            <span className="kicker">Über uns</span>
            <h1>Drei Persönlichkeiten.<br />Eine Leidenschaft.</h1>
            <p className="company-about-lead">Wir betreuen Immobilien mit Engagement, Fachwissen und Weitblick – persönlich, effizient und immer im Interesse unserer Kundschaft.</p>
          </div>
          <div className="company-about-aside">
            <div className="company-about-text">
              <p>Als unabhängiges Immobilienunternehmen hören wir zu, denken voraus und schaffen klare Lösungen.</p>
              <p>Unser Anspruch ist, Immobilien nicht nur zu verwalten oder zu vermitteln, sondern Werte nachhaltig zu sichern und weiterzuentwickeln.</p>
            </div>
            <nav className="company-about-nav" aria-label="Firma entdecken">
              <a href="#team"><span>01</span><strong>Unser Team</strong><ArrowRight aria-hidden="true" /></a>
              <a href="#werte"><span>02</span><strong>Werte & Arbeitsweise</strong><ArrowRight aria-hidden="true" /></a>
            </nav>
          </div>
        </div>
      </section>

      <section className="company-team" id="team">
        <div className="content">
          <div className="company-section-heading">
            <span className="kicker">Unser Team</span>
            <h2>Persönlich für Sie da.</h2>
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

      <section className="company-values" id="werte">
        <div className="content">
          <div className="company-section-heading">
            <span className="kicker">Werte & Arbeitsweise</span>
            <h2>Klar in der Haltung.<br />Strukturiert im Handeln.</h2>
            <p>Unsere Zusammenarbeit basiert auf Vertrauen, transparenter Kommunikation und einem verlässlichen Vorgehen.</p>
          </div>
          <div className="company-values-layout">
            <div className="company-values-column">
              <h3>Unsere Werte</h3>
              <div className="company-detail-list">
                {values.map(([title, text], index) => (
                  <article key={title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="company-values-column">
              <h3>So arbeiten wir</h3>
              <div className="company-detail-list">
                {process.map(([number, title, text]) => (
                  <article key={title}>
                    <span>{number}</span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <OverviewLinks
        label="Angebote"
        title="Immobilien im Überblick."
        text="Entdecken Sie aktuelle Kauf- und Mietangebote oder werfen Sie einen Blick auf erfolgreich begleitete Projekte."
        items={[
          { title: 'Aktuelle Angebote', text: 'Verfügbare Kauf- und Mietobjekte auf unserem offiziellen Anbieterprofil.', image: '/assets/property-3.jpg', href: '/immobilien' },
          { title: 'Referenzen', text: 'Eine Auswahl verkaufter, vermieteter und verwalteter Immobilien.', image: '/assets/property-2.jpg', href: '/referenzen' },
        ]}
      />
      <CTA />
    </>
  );
}

function References() {
  const [showAllReferences, setShowAllReferences] = useState(false);
  const visibleReferences = showAllReferences ? references : references.slice(0, 9);

  return (
    <>
      <section className="references-title">
        <div className="content">
          <h1>Referenzen</h1>
        </div>
      </section>
      <section className="reference-archive">
        <div className="content">
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
  const profileUrl = 'https://www.homegate.ch/anbieter/h475138/seehafen-partner-immobilien-ag';

  return (
    <>
      <PageHero label="Immobilien" title="Aktuelle Immobilien." text="Entdecken Sie unsere laufend aktualisierten Kauf-, Miet- und Erstvermietungsangebote auf dem offiziellen Anbieterprofil." image={false} />
      <section className="offers-page">
        <div className="content">
          <div className="current-listings-heading">
            <div>
              <span className="kicker">Aktuell verfügbar</span>
              <h2>Unsere Mietangebote.</h2>
              <p>Vier aktuell publizierte Immobilien von Seehafen & Partner.</p>
            </div>
            <a className="text-link" href={profileUrl} target="_blank" rel="noreferrer">
              Homegate-Profil <ExternalLink aria-hidden="true" />
            </a>
          </div>

          <div className="current-listing-grid">
            {currentListings.map((listing, index) => (
              <article className="current-listing-card" key={listing.href}>
                <div className="current-listing-topline">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>Mieten</span>
                </div>
                <h2>{listing.title}</h2>
                <p className="current-listing-address"><MapPin aria-hidden="true" /> {listing.address}</p>
                <div className="current-listing-facts">
                  <span><Building2 aria-hidden="true" /> {listing.rooms}</span>
                  <span><Ruler aria-hidden="true" /> {listing.area}</span>
                </div>
                <div className="current-listing-footer">
                  <strong>{listing.price}<small>pro Monat</small></strong>
                  <a href={listing.href} target="_blank" rel="noreferrer">
                    Auf Homegate ansehen <ExternalLink aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
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
      <section className="contact-intro">
        <div className="content contact-intro-copy">
          <span className="kicker">Kontakt</span>
          <h1>Wie können wir Ihnen helfen?</h1>
          <p>Rufen Sie uns an, schreiben Sie uns eine E-Mail oder senden Sie Ihre Anfrage über das Formular. Wir melden uns persönlich bei Ihnen zurück.</p>
        </div>
      </section>
      <section className="contact-page">
        <div className="content contact-layout">
          <aside className="contact-sidebar">
            <div className="contact-direct-panel">
              <span className="kicker">Direkt erreichbar</span>
              <h2>Persönlich für Sie da.</h2>
              <div className="contact-methods">
                <a href="tel:+41444514302">
                  <Phone aria-hidden="true" />
                  <span><small>Telefon</small>+41 44 451 43 02</span>
                </a>
                <a href="tel:+41797857880">
                  <Phone aria-hidden="true" />
                  <span><small>Mobil</small>+41 79 785 78 80</span>
                </a>
                <a href="mailto:info@seehafen-immobilien.ch">
                  <Mail aria-hidden="true" />
                  <span><small>E-Mail</small>info@seehafen-immobilien.ch</span>
                </a>
              </div>
              <p><strong>Öffnungszeiten</strong><br />Montag bis Freitag<br />08:00–12:00 · 13:30–17:00 Uhr</p>
            </div>

            <div className="contact-locations">
              <article>
                <span className="kicker">Hauptsitz</span>
                <h3>Schwyz</h3>
                <p>Bahnhofstrasse 4<br />6430 Schwyz</p>
              </article>
              <article>
                <span className="kicker">Filiale</span>
                <h3>Wohlen</h3>
                <p>Cheiblerrain 13<br />5610 Wohlen</p>
              </article>
            </div>
          </aside>

          <form className="contact-form" onSubmit={submit}>
            <div className="form-heading">
              <span className="kicker">Nachricht senden</span>
              <h2>Ihre Anfrage</h2>
              <p>Füllen Sie nur die notwendigen Angaben aus.</p>
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
        </div>
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

const revealSelector = [
  '.hero-content',
  '.home-heading',
  '.home-service-card',
  '.split-heading',
  '.section-heading',
  '.process-grid article',
  '.offer-showcase-heading',
  '.offer-showcase-stage',
  '.reference-tile',
  '.page-hero-copy',
  '.page-hero-media',
  '.overview-links-heading',
  '.overview-link-card',
  '.company-about-copy',
  '.company-about-aside',
  '.company-section-heading',
  '.team-grid article',
  '.company-values-column',
  '.primary-service-card',
  '.secondary-service-grid article',
  '.service-detail-grid > div',
  '.references-title h1',
  '.reference-archive-intro',
  '.current-listings-heading',
  '.current-listing-card',
  '.contact-intro-copy',
  '.contact-direct-panel',
  '.contact-locations',
  '.contact-form',
  '.legal-content',
  '.contact-strip .content > *',
  '.footer-main > *',
  '.footer-bottom',
].join(',');

const revealMediaSelector = [
  '.page-hero-media',
  '.home-service-card',
  '.offer-showcase-stage',
  '.reference-tile',
  '.overview-link-card',
  '.primary-service-card',
  '.secondary-service-grid article',
].join(',');

function useScrollReveal(pageKey) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const registered = new Set();
    let observer;

    const register = (element) => {
      if (registered.has(element)) return;
      registered.add(element);
      element.classList.add('scroll-reveal');

      if (element.matches(revealMediaSelector)) {
        element.classList.add('scroll-reveal-media');
      }

      const siblings = Array.from(element.parentElement?.children || [])
        .filter((sibling) => sibling.matches?.(revealSelector));
      const siblingIndex = siblings.indexOf(element);
      element.style.setProperty('--reveal-delay', `${Math.min(Math.max(siblingIndex, 0), 4) * 70}ms`);

      if (reducedMotion || !observer) {
        element.classList.add('is-revealed');
      } else {
        observer.observe(element);
      }
    };

    if (!reducedMotion && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      });
    }

    const scan = () => document.querySelectorAll(revealSelector).forEach(register);
    scan();

    const mutationObserver = new MutationObserver(scan);
    mutationObserver.observe(document.getElementById('main-content'), {
      childList: true,
      subtree: true,
    });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
      registered.forEach((element) => {
        element.classList.remove('scroll-reveal', 'scroll-reveal-media', 'is-revealed');
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, [pageKey]);
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const aliases = {
    '/uber-uns': '/firma',
    '/team': '/firma',
    '/werte': '/firma',
    '/datenschutzrichtlinie': '/datenschutz',
    '/geschaftsbedingungen': '/agb',
  };
  const canonicalPath = aliases[path] || path;
  useScrollReveal(canonicalPath);
  const pageMeta = meta[canonicalPath] || ['Seite nicht gefunden | Seehafen Immobilien', 'Die gewünschte Seite wurde nicht gefunden.'];

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (sectionId) {
      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }
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
