import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MobileNav from './MobileNav';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Header = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const scrollPosition = useScrollPosition();

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };
    
    const closeMobileNav = () => {
        setMobileNavOpen(false);
    };

    return (
        <>
            <header className={`main-header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
                <nav className="navbar container">
                    <Link to="/" className="navbar-logo"><span>Punto</span>Migrare</Link>
                    
                    <ul className="nav-links">
                        <li>
                            <HashLink smooth to="/#about">Chi Siamo</HashLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link">Servizi <i className="fas fa-chevron-down fa-xs"></i></a>
                            <ul className="dropdown-menu">
                                <li><Link to="/servizi-immigrazione">Immigrazione</Link></li>
                                <li><Link to="/servizi-caf-patronato">CAF e Patronato</Link></li>
                                <li><Link to="/servizi-collaboratori-domestici">Collaboratori Domestici</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/documenti">Documenti</Link>
                        </li>
                        <li>
                            <HashLink smooth to="/#contact">Contatti</HashLink>
                        </li>
                    </ul>

                    <div className="hamburger-menu" onClick={toggleMobileNav}>
                        <i className="fas fa-bars"></i>
                    </div>
                </nav>
            </header>
            <MobileNav isOpen={isMobileNavOpen} closeNav={closeMobileNav} />
        </>
    );
};

export default Header;