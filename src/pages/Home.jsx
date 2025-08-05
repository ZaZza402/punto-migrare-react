import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HashLink } from 'react-router-hash-link';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

// 1. IMPORT THE IMAGE DIRECTLY AS A MODULE
import heroBackgroundImage from '../assets/hero-background.png'; 

import HomepageAccordion from '../components/HomepageAccordion';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import BookingCalendar from '../components/BookingCalendar';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Il Tuo Punto di Riferimento per un Nuovo Inizio'],
    loop: 1,
    typeSpeed: 70,
  });

  return (
    <>
      <Helmet>
        <title>PuntoMigrare | Consulenza Immigrazione, CAF e Domestici</title>
        <meta name="description" content="PuntoMigrare offre consulenza esperta e assistenza completa per pratiche di immigrazione, CAF e gestione di collaboratori domestici. Affidati a professionisti per un nuovo inizio." />
      </Helmet>

      {/* 
        2. APPLY THE IMPORTED IMAGE AS AN INLINE STYLE
        This guarantees the path is always correct.
      */}
      <section 
        id="hero" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${heroBackgroundImage}')` }}
      >
        <h1 data-aos="zoom-in" data-aos-duration="1000">
          <span>{text}</span>
          <Cursor cursorStyle='|' />
        </h1>
        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          Offriamo consulenza esperta e assistenza completa per tutte le tue pratiche di immigrazione, CAF e servizi per la casa. Affidati a professionisti del settore.
        </p>
        <HashLink smooth to="/#services" className="cta-button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Scopri i Nostri Servizi</HashLink>
      </section>

      {/* ... The rest of your Home page sections ... */}
      <section id="about">
        <div className="container" data-aos="fade-up">
          <h2>Benvenuti a <span className="accent-text">Punto</span>Migrare</h2>
          <p>
            PuntoMigrare nasce con l'obiettivo di semplificare la burocrazia e offrire un supporto concreto a cittadini stranieri e italiani. La nostra missione è guidarti passo dopo passo, con professionalità e trasparenza, nel complesso mondo delle pratiche amministrative, fiscali e legali. Mettiamo la tua tranquillità al primo posto, trasformando gli ostacoli in opportunità.
          </p>
        </div>
      </section>
      <section id="services">
          <div className="container" data-aos="fade-up">
              <h2>I Nostri Servizi Principali</h2>
              <HomepageAccordion />
          </div>
      </section>
      <Testimonials />
      <FaqSection />
      <section id="contact">
        <div className="container" data-aos="fade-up">
          <h2>Contattaci o Vieni a Trovarci</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.478923838274!2d12.59918267675713!3d41.8821959640356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f62115b026feb%3A0x86716021f7259a44!2sVia%20del%20Fuoco%2C%2097%2C%2000133%20Roma%20RM!5e0!3m2!1sen!2sit!4v1721051512403!5m2!1sen!2sit" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="address-card">
                <h3>I Nostri Uffici</h3>
                <p><i className="fas fa-map-marker-alt"></i> Via del Fuoco Sacro, 97 – 00133 Roma (RM)</p>
                <p><i className="fas fa-clock"></i> <strong>Orari di Apertura:</strong><br />
                  Lun, Mar, Gio: 09:00 - 18:00<br />
                  Mer, Ven: 09:00 - 13:00<br />
                  Sab, Dom: Chiuso</p>
              </div>
            </div>
            <div className="contact-form">
              <form action="https://formspree.io/f/mdkdannz" method="POST">
                <div className="form-group">
                  <label htmlFor="name" style={{ display: 'none' }}>Nome Completo</label>
                  <input type="text" id="name" name="name" placeholder="Nome Completo" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" style={{ display: 'none' }}>Email</label>
                  <input type="email" id="email" name="user_email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message" style={{ display: 'none' }}>Il Tuo Messaggio</label>
                  <textarea id="message" name="message" placeholder="Il Tuo Messaggio" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Invia Messaggio</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <BookingCalendar />
      <section id="pre-footer">
        <div className="container" data-aos="fade-up">
          <h2>Altri Canali di Contatto</h2>
          <div className="contact-channels">
            <a href="https://wa.me/391234567890" target="_blank" rel="noopener noreferrer" className="channel"><div className="channel-icon"><i className="fab fa-whatsapp"></i></div><h3>WhatsApp</h3></a>
            <a href="tel:+39061234567" className="channel"><div className="channel-icon"><i className="fas fa-phone"></i></div><h3>Chiamaci</h3></a>
            <a href="mailto:info@puntomigrare.it" className="channel"><div className="channel-icon"><i className="fas fa-envelope"></i></div><h3>Inviaci una Email</h3></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;