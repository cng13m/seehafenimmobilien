import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, Ruler, X } from 'lucide-react';
import './styles.css';

const services = [
  { title: 'Bewirtschaftung & Verwaltung', image: '/assets/team-2.jpg', text: 'Mietverwaltung, Stockwerkeigentum, technischer Unterhalt, Nebenkostenabrechnungen und strukturiertes Reporting.' },
  { title: 'Vermarktung & Verkauf', image: '/assets/team-1.jpg', text: 'Verkauf von Wohnungen, Häusern und Renditeobjekten – inklusive Exposé, Marketing, Besichtigungen und Abwicklung.' },
  { title: 'Immobilienberatung', image: '/assets/team-3.jpg', text: 'Marktwert-, Potenzial- und Portfolioanalysen sowie individuelle Strategien für Kauf, Finanzierung und Entwicklung.' },
  { title: 'Erstvermietung & Neubau', image: '/assets/property-1.jpg', text: 'Markt- und Standortanalysen, Mietpreisgestaltung, Vermarktung, Vertragsabschlüsse und Mieterkoordination.' },
  { title: 'Baumanagement & Unterhalt', image: '/assets/property-2.jpg', text: 'Sanierungsplanung, Offertvergleiche, Koordination von Umbauten sowie Termin-, Kosten- und Qualitätskontrolle.' },
  { title: 'Immobilieninvestments', image: '/assets/property-3.jpg', text: 'Investitionsberatung, Off-Market-Deals und persönliche Begleitung bei An- und Verkaufsprozessen.' },
];

const references = [
  { title: 'Mehrfamilienhaus Hägglingen', location: 'Hägglingen AG', type: 'Verkauft', detail: '6 Wohnungen', image: '/assets/property-1.jpg' },
  { title: 'Wohnportfolio in Olten', location: 'Olten SO', type: 'Verkauft', detail: '24 Wohnungen', image: '/assets/property-2.jpg' },
  { title: 'Attika-Maisonette-Terrassenhaus', location: 'Rieden SG', type: 'Vermietet', detail: '5.5 Zimmer', image: '/assets/property-3.jpg' },
  { title: 'Wohn- und Gewerbeliegenschaft', location: 'Schaffhausen', type: 'Verwaltungsmandat', detail: '16 Wohnungen · 2 Gewerbe', image: '/assets/team-1.jpg' },
];

const process = [
  ['01', 'Erstgespräch', 'Wir besprechen Ihre Ziele, Anforderungen und Erwartungen persönlich.'],
  ['02', 'Analyse', 'Wir analysieren Ihre Immobilie und entwickeln eine massgeschneiderte Strategie.'],
  ['03', 'Umsetzung', 'Wir setzen die vereinbarten Massnahmen professionell und transparent um.'],
  ['04', 'Partnerschaft', 'Wir begleiten Sie langfristig als verlässlicher Immobilienpartner.'],
];

const team = [
  ['Eduard Laska', 'Geschäftsführer', 'Über 10 Jahre Erfahrung in der Immobilienbranche · Eidg. Fachausweis'],
  ['Dorentina Laska', 'Sachbearbeiterin Immobilien', 'Persönliche und zuverlässige Betreuung unserer Kundschaft'],
  ['Jozefina Markaj', 'Vermarktung', 'Dipl. Innenarchitektin · Immobilien wirkungsvoll positioniert'],
];

function Logo() {
  return <a href="#top" className="logo" aria-label="Seehafen Immobilien Startseite"><img src="/assets/logo.png" alt="Seehafen & Partner Immobilien AG" /></a>;
}

function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return <div id="top">
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Hauptnavigation">
          <a href="#unternehmen">Firma <ChevronDown /></a>
          <a href="#leistungen">Dienstleistungen <ChevronDown /></a>
          <a href="#angebote">Angebote <ChevronDown /></a>
          <a href="#referenzen">Referenzen</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main>
      <section className="hero">
        <img src="/assets/hero-original.jpg" alt="Moderne Immobilie mit Weitblick" />
        <div className="hero-overlay" />
        <div className="content hero-content">
          <p>Langfristig. Persönlich. Verlässlich.</p>
          <h1>Seehafen<br/>Immobilien</h1>
          <h2>Beratung, Verkauf und Bewirtschaftung mit Weitblick.</h2>
          <a className="button button-solid" href="mailto:info@seehafen-immobilien.ch?subject=Kostenlose%20Immobilienbewertung">Kostenlose Bewertung <ArrowRight /></a>
        </div>
      </section>

      <section className="intro content" id="unternehmen">
        <div className="intro-copy">
          <span className="kicker">Ihr vertrauenswürdiger Immobilienpartner</span>
          <h2>Werte sichern.<br/>Beziehungen aufbauen.</h2>
          <p>Seehafen & Partner steht für Verlässlichkeit, Diskretion und fachliche Kompetenz. Wir betreuen Immobilien mit Engagement, Fachwissen und Weitblick – persönlich, transparent und nachhaltig.</p>
        </div>
        <div className="service-grid" id="leistungen">
          {services.map((service) => <article className="service-card" key={service.title}>
            <img src={service.image} alt="" />
            <div><h3>{service.title}</h3><p>{service.text}</p><a href="#kontakt">Mehr erfahren <ArrowRight /></a></div>
          </article>)}
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-title">
        <div className="content about-grid">
          <div><span className="kicker">Unsere Philosophie</span><h2 id="about-title">Drei Persönlichkeiten.<br/>Eine gemeinsame Leidenschaft.</h2></div>
          <div className="about-text"><p>Der Verkauf oder die Bewirtschaftung einer Liegenschaft ist mehr als eine Transaktion. Es ist eine verantwortungsvolle Entscheidung, die Weitblick, Fingerspitzengefühl und volle Aufmerksamkeit verdient.</p><p>Deshalb entwickeln wir individuelle Strategien statt Standardlösungen – professionell, transparent und mit Herzblut.</p></div>
          <div className="values"><div><strong>Integrität</strong><span>Ehrlichkeit, Verlässlichkeit und Transparenz.</span></div><div><strong>Qualitätsanspruch</strong><span>Strukturierte Abläufe und hohe fachliche Standards.</span></div><div><strong>Nachhaltigkeit</strong><span>Langfristiger Werterhalt für Mensch und Immobilie.</span></div></div>
        </div>
      </section>

      <section className="process-section">
        <div className="content"><div className="section-heading"><div><span className="kicker">Unser Prozess</span><h2>So arbeiten wir</h2></div><p>Strukturiert, transparent und immer in Ihrem Interesse.</p></div><div className="process-grid">{process.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="offers" id="angebote">
        <div className="content">
          <div className="section-heading"><div><span className="kicker">Erfolgreich verkauft, vermietet & verwaltet</span><h2>Ausgewählte Referenzen</h2></div><a href="https://seehafen-immobilien.ch/referenzen/" target="_blank" rel="noreferrer">Alle Referenzen <ArrowRight /></a></div>
          <div className="property-grid" id="referenzen">
            {references.map((property) => <article className="property" key={property.title}>
              <img src={property.image} alt={property.title} />
              <div className="property-info"><h3>{property.title}</h3><p><MapPin /> {property.location}</p><p><span className="building-icon">⌂</span> {property.type}</p><p><Ruler /> {property.detail}</p><a href="mailto:info@seehafen-immobilien.ch?subject=Immobilienanfrage">Projekt anfragen <ArrowRight /></a></div>
            </article>)}
          </div>
          <div className="slider-arrows"><button aria-label="Zurück"><ArrowLeft /></button><button aria-label="Weiter"><ArrowRight /></button></div>
        </div>
      </section>

      <section className="team-section">
        <div className="content"><div className="section-heading"><div><span className="kicker">Persönlich für Sie da</span><h2>Unser Team</h2></div><p>Erfahrung, Fachkompetenz und echtes Engagement für nachhaltige Immobilienlösungen.</p></div><div className="team-grid">{team.map(([name,role,bio])=><article key={name}><span>{name.split(' ').map(x=>x[0]).join('')}</span><h3>{name}</h3><strong>{role}</strong><p>{bio}</p></article>)}</div></div>
      </section>

      <section className="contact-strip" id="kontakt">
        <div className="content"><div><span className="kicker">Kostenloses Erstgespräch</span><h2>Lassen Sie uns über Ihre Immobilie sprechen.</h2><p>Montag bis Freitag · 08:00–12:00 und 13:30–17:00 Uhr</p></div><a className="button button-light" href="mailto:info@seehafen-immobilien.ch">Kontakt aufnehmen <ArrowRight /></a></div>
      </section>
    </main>

    <footer className="footer">
      <div className="content footer-main">
        <div><strong>Hauptsitz Schwyz</strong><p>Seehafen & Partner Immobilien AG<br/>Bahnhofstrasse 4<br/>6430 Schwyz</p></div>
        <div><strong>Filiale Wohlen</strong><p>Cheiblerrain 13<br/>5610 Wohlen</p></div>
        <div className="footer-contact"><a href="tel:+41444514302"><Phone /> +41 44 451 43 02</a><a href="tel:+41797857880"><Phone /> +41 79 785 78 80</a><a href="mailto:info@seehafen-immobilien.ch"><Mail /> info@seehafen-immobilien.ch</a></div>
      </div>
      <div className="content footer-bottom"><span>© 2026 Seehafen & Partner Immobilien AG. Alle Rechte vorbehalten.</span><span><a href="https://seehafen-immobilien.ch/impressum/">Impressum</a><i/> <a href="https://seehafen-immobilien.ch/datenschutzrichtlinie/">Datenschutz</a></span></div>
    </footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
