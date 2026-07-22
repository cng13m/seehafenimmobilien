import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react';
import './styles.css';

const services = [
  { n: '01', title: 'Immobilienverkauf', text: 'Von der fundierten Bewertung bis zum erfolgreichen Notartermin – persönlich, transparent und mit einer klaren Strategie.' },
  { n: '02', title: 'Bewirtschaftung', text: 'Strukturierte Betreuung von Wohnliegenschaften für nachhaltigen Werterhalt und zufriedene Eigentümer und Mieter.' },
  { n: '03', title: 'Beratung', text: 'Individuelle Entscheidungsgrundlagen für Eigentümer, Käufer und Investoren – unabhängig und auf Augenhöhe.' },
];

const references = [
  { image: '/assets/property-1.jpg', place: 'Region Zürichsee', title: 'Wohnliegenschaft mit Weitblick', tag: 'Verkauft' },
  { image: '/assets/property-2.jpg', place: 'Kanton Zürich', title: 'Modernes Wohnen im Grünen', tag: 'Vermittelt' },
  { image: '/assets/property-3.jpg', place: 'Deutschschweiz', title: 'Ein Zuhause mit Charakter', tag: 'Referenz' },
];

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand--light' : ''}`} href="#top" aria-label="Seehafen Startseite">
    <span className="brand-mark"><i /><i /><i /></span>
    <span><strong>SEEHAFEN</strong><small>& PARTNER IMMOBILIEN</small></span>
  </a>;
}

function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return <>
    <header className="header">
      <Brand />
      <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Hauptnavigation">
        <a href="#unternehmen">Unternehmen</a><a href="#leistungen">Dienstleistungen</a><a href="#referenzen">Referenzen</a><a href="#kontakt">Kontakt</a>
      </nav>
      <a className="header-cta" href="mailto:info@seehafen-immobilien.ch">Beratung vereinbaren <ArrowUpRight size={17}/></a>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Menü öffnen">{open ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <img className="hero-image" src="/assets/property-hero.jpg" alt="Moderne Schweizer Wohnimmobilie" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Seehafen & Partner Immobilien AG</p>
          <h1>Immobilien.<br/><em>Mit Weitblick.</em></h1>
          <p className="hero-lead">Persönliche Beratung, verantwortungsvolle Entscheidungen und engagierte Begleitung – aus Überzeugung.</p>
          <a className="circle-link" href="#leistungen" aria-label="Mehr entdecken"><ArrowDown /></a>
        </div>
        <div className="hero-note"><span>01</span><p>Langfristig.<br/>Persönlich.<br/>Verlässlich.</p></div>
      </section>

      <section className="intro shell" id="unternehmen">
        <div><p className="eyebrow">Unser Anspruch</p><span className="section-index">01 — 04</span></div>
        <div className="intro-copy">
          <h2>Eine Immobilie ist mehr als eine Transaktion. <em>Sie ist Vertrauenssache.</em></h2>
          <p>Wir begleiten Sie sicher durch den gesamten Prozess – mit lokaler Expertise, einem persönlichen Ansprechpartner und dem Anspruch, für jede Immobilie die passende Lösung zu finden.</p>
          <a className="text-link" href="#kontakt">Lernen Sie uns kennen <ArrowUpRight size={18}/></a>
        </div>
      </section>

      <section className="services" id="leistungen">
        <div className="shell section-head"><div><p className="eyebrow light">Was wir für Sie tun</p><h2>Alles rund um<br/><em>Ihre Immobilie.</em></h2></div><p>Kompetenz, die sich an Ihren Zielen orientiert – nicht an Standardlösungen.</p></div>
        <div className="service-list shell">
          {services.map((s) => <article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><a href="#kontakt" aria-label={`${s.title} anfragen`}><ArrowUpRight/></a></article>)}
        </div>
      </section>

      <section className="process shell">
        <div className="process-image"><img src="/assets/about.jpg" alt="Persönliche Immobilienberatung"/><span>Persönlich<br/>für Sie da.</span></div>
        <div className="process-copy"><p className="eyebrow">So arbeiten wir</p><h2>Klarer Prozess.<br/><em>Gutes Gefühl.</em></h2>
          {['Erstgespräch & Zielklärung','Analyse & Strategie','Professionelle Umsetzung','Langfristige Partnerschaft'].map((x,i)=><div className="step" key={x}><span>0{i+1}</span><p>{x}</p><ChevronRight/></div>)}
        </div>
      </section>

      <section className="work" id="referenzen">
        <div className="shell work-head"><div><p className="eyebrow">Ausgewählte Referenzen</p><h2>Erfolgreich<br/><em>vermittelt.</em></h2></div><p>Jede Immobilie verdient eine eigene Geschichte, eine klare Positionierung und die richtige Käuferschaft.</p></div>
        <div className="cards shell">{references.map((r,i)=><article className="card" key={r.title}><div className="card-image"><img src={r.image} alt={r.title}/><span>{r.tag}</span><a href="#kontakt" aria-label="Referenz anfragen"><ArrowUpRight/></a></div><small>{r.place}</small><h3>{r.title}</h3><p>0{i+1} / 03</p></article>)}</div>
      </section>

      <section className="contact" id="kontakt">
        <div className="shell contact-inner"><p className="eyebrow light">Der erste Schritt</p><h2>Lassen Sie uns über<br/><em>Ihre Immobilie sprechen.</em></h2><p>Vereinbaren Sie ein unverbindliches Erstgespräch. Wir freuen uns, Sie kennenzulernen.</p><a className="contact-link" href="mailto:info@seehafen-immobilien.ch">info@seehafen-immobilien.ch <ArrowUpRight/></a></div>
      </section>
    </main>

    <footer><div className="shell footer-grid"><Brand light/><div><small>Navigation</small><a href="#unternehmen">Unternehmen</a><a href="#leistungen">Dienstleistungen</a><a href="#referenzen">Referenzen</a></div><div><small>Kontakt</small><a href="mailto:info@seehafen-immobilien.ch">E-Mail schreiben</a><a href="https://www.homegate.ch/anbieter/h475138/seehafen-partner-immobilien-ag">Aktuelle Immobilien</a></div></div><div className="shell footer-bottom"><span>© 2026 Seehafen & Partner Immobilien AG</span><span>Impressum · Datenschutz</span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
