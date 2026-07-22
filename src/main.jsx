import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, Ruler, X } from 'lucide-react';
import './styles.css';

const services = [
  { title: 'Immobilienverkauf', image: '/assets/team-1.jpg', text: 'Wir begleiten Sie persönlich und professionell – von der Bewertung bis zum erfolgreichen Verkauf.' },
  { title: 'Bewirtschaftung', image: '/assets/team-2.jpg', text: 'Zuverlässige Verwaltung Ihrer Liegenschaft. Transparent, effizient und immer mit Blick auf den Werterhalt.' },
  { title: 'Beratung', image: '/assets/team-3.jpg', text: 'Ob Kauf, Verkauf oder Investition – wir beraten Sie kompetent, unabhängig und mit Weitblick.' },
];

const properties = [
  { title: 'Wohnliegenschaft mit Potenzial', location: 'Kanton Schwyz', type: 'Wohnimmobilie', area: 'Individuell', image: '/assets/property-1.jpg' },
  { title: 'Immobilienwerte nachhaltig sichern', location: 'Deutschschweiz', type: 'Bewirtschaftung', area: 'Persönlich betreut', image: '/assets/property-2.jpg' },
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
          <p>Persönlich. Verlässlich. Kompetent.</p>
          <h1>Seehafen<br/>Immobilien</h1>
          <h2>Ihr Partner für Immobilien mit Weitblick.</h2>
          <a className="button button-solid" href="mailto:info@seehafen-immobilien.ch?subject=Kostenlose%20Immobilienbewertung">Kostenlose Bewertung <ArrowRight /></a>
        </div>
      </section>

      <section className="intro content" id="unternehmen">
        <div className="intro-copy">
          <span className="kicker">Mit Herz und Verstand</span>
          <h2>Für alles rund um<br/>Ihre Immobilie</h2>
          <p>Kommen Sie zu Seehafen & Partner Immobilien und lassen Sie sich unverbindlich beraten. Wir freuen uns auf Sie!</p>
        </div>
        <div className="service-grid" id="leistungen">
          {services.map((service) => <article className="service-card" key={service.title}>
            <img src={service.image} alt="" />
            <div><h3>{service.title}</h3><p>{service.text}</p><a href="#kontakt">Mehr erfahren <ArrowRight /></a></div>
          </article>)}
        </div>
      </section>

      <section className="offers" id="angebote">
        <div className="content">
          <div className="section-heading"><div><span className="kicker">Immobilien & Referenzen</span><h2>Unsere Immobilienkompetenz</h2></div><a href="https://www.homegate.ch/anbieter/h475138/seehafen-partner-immobilien-ag" target="_blank" rel="noreferrer">Alle Angebote <ArrowRight /></a></div>
          <div className="property-grid" id="referenzen">
            {properties.map((property) => <article className="property" key={property.title}>
              <img src={property.image} alt={property.title} />
              <div className="property-info"><h3>{property.title}</h3><p><MapPin /> {property.location}</p><p><span className="building-icon">⌂</span> {property.type}</p><p><Ruler /> {property.area}</p><a href="mailto:info@seehafen-immobilien.ch?subject=Immobilienanfrage">Details anfragen <ArrowRight /></a></div>
            </article>)}
          </div>
          <div className="slider-arrows"><button aria-label="Zurück"><ArrowLeft /></button><button aria-label="Weiter"><ArrowRight /></button></div>
        </div>
      </section>

      <section className="contact-strip" id="kontakt">
        <div className="content"><div><span className="kicker">Wir sind für Sie da</span><h2>Lassen Sie uns über Ihre Immobilie sprechen.</h2></div><a className="button button-light" href="mailto:info@seehafen-immobilien.ch">Kontakt aufnehmen <ArrowRight /></a></div>
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
