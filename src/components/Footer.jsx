import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* --- COLUMN 1: BRAND --- */}
                    <div className="footer-col">
                        <h3 className="footer-logo"><span>Punto</span>Migrare</h3>
                        <p>Il tuo partner di fiducia per un percorso sereno in Italia. Semplifichiamo la burocrazia per te.</p>
                    </div>

                    {/* --- COLUMN 2: QUICK LINKS --- */}
                    <div className="footer-col">
                        <h4>Link Utili</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><HashLink smooth to="/#about">Chi Siamo</HashLink></li>
                            <li><Link to="/documenti">Documenti</Link></li>
                            <li><HashLink smooth to="/#contact">Contatti</HashLink></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 3: SERVICES (NEW) --- */}
                    <div className="footer-col">
                        <h4>I Nostri Servizi</h4>
                        <ul>
                            <li><Link to="/servizi-immigrazione">Immigrazione</Link></li>
                            <li><Link to="/servizi-caf-patronato">CAF e Patronato</Link></li>
                            <li><Link to="/servizi-collaboratori-domestici">Collaboratori Domestici</Link></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 4: CONTACT --- */}
                    <div className="footer-col">
                        <h4>Contatti</h4>
                        <ul>
                            <li><p>Via del Fuoco Sacro, 97<br />00133 Roma (RM)</p></li>
                            <li><a href="tel:+39061234567">+39 06 123 4567</a></li>
                            <li><a href="mailto:info@puntomigrare.it">info@puntomigrare.it</a></li>
                        </ul>
                        <div className="social-icons-footer">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© <span id="copyright-year">{new Date().getFullYear()}</span> PuntoMigrare. Tutti i diritti riservati.</p>
                    <p><a href="#">Privacy Policy</a> | <a href="#">Cookie Policy</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;