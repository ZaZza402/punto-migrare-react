import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactFloat from './ContactFloat'; // 1. IMPORT THE NEW COMPONENT

const Layout = ({ children }) => {
  // Cookie Banner Logic
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookiesAccepted')) {
      const timer = setTimeout(() => {
        setShowCookieBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      
      {/* 2. REMOVE THE OLD WHATSAPP BUTTON AND 3. ADD THE NEW COMPONENT */}
      <ContactFloat />
      
      {/* Cookie Banner */}
      <div className={`cookie-banner ${showCookieBanner ? 'show' : ''}`}>
        <p>Questo sito utilizza i cookie per migliorare la tua esperienza. Cliccando su "Accetta", acconsenti al nostro utilizzo dei cookie.</p>
        <button id="cookie-accept-btn" onClick={handleAcceptCookies}>Accetta</button>
      </div>
    </>
  );
};

export default Layout;