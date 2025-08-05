import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'; // ADDED LINTER-DISABLE COMMENT

// DEFINE ANIMATION VARIANTS
const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // This will make each child animate 0.1s after the previous one
        },
    },
};

const navItemVariants = {
    hidden: { opacity: 0, x: -20 }, // Start invisible and 20px to the left
    visible: { opacity: 1, x: 0 },    // Animate to full visibility and original position
};


const MobileNav = ({ isOpen, closeNav }) => {
    const [isAccordionOpen, setAccordionOpen] = useState(false);
    const navRef = useRef();

    const toggleAccordion = () => {
        setAccordionOpen(!isAccordionOpen);
    };
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
                if (!event.target.closest('.hamburger-menu')) {
                    closeNav();
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, closeNav]);

    useEffect(() => {
      if (!isOpen) {
        setAccordionOpen(false);
      }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={navRef}
                    className="mobile-nav-panel"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
                >
                    <i className="fas fa-times close-icon" onClick={closeNav}></i>
                    
                    <motion.ul
                        className="mobile-nav-links-container"
                        variants={navContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.li variants={navItemVariants}>
                            <HashLink smooth to="/#about" onClick={closeNav}>Chi Siamo</HashLink>
                        </motion.li>
                        
                        <motion.li variants={navItemVariants}>
                            <div className={`mobile-nav-accordion ${isAccordionOpen ? 'open' : ''}`}>
                                <div className="mobile-nav-accordion-header" onClick={toggleAccordion}>
                                    Servizi <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className={`mobile-nav-accordion-content ${isAccordionOpen ? 'open' : ''}`}>
                                    <Link to="/servizi-immigrazione" onClick={closeNav}>Immigrazione</Link>
                                    <Link to="/servizi-caf-patronato" onClick={closeNav}>CAF e Patronato</Link>
                                    <Link to="/servizi-collaboratori-domestici" onClick={closeNav}>Collaboratori Domestici</Link>
                                </div>
                            </div>
                        </motion.li>

                        <motion.li variants={navItemVariants}>
                            <Link to="/documenti" onClick={closeNav}>Documenti</Link>
                        </motion.li>

                        <motion.li variants={navItemVariants}>
                            <HashLink smooth to="/#contact" onClick={closeNav}>Contatti</HashLink>
                        </motion.li>
                    </motion.ul>

                    <div className="mobile-nav-footer">
                        <p className="italian-quote">"Il miglior modo per predire il futuro è crearlo."</p>
                        <p className="copyright-notice">© {new Date().getFullYear()} PuntoMigrare</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileNav;