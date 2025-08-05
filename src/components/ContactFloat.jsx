import React, { useState } from 'react';

const ContactFloat = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`contact-float-container ${isOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <a 
                href="https://wa.me/391234567890?text=Salve,%20vorrei%20maggiori%20informazioni%20sui%20vostri%20servizi." 
                className="contact-channel-icon whatsapp" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contattaci su WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
                <span className="tooltip">WhatsApp</span>
            </a>

            <a 
                href="tel:+39061234567" 
                className="contact-channel-icon phone"
                aria-label="Chiamaci"
            >
                <i className="fas fa-phone-alt"></i>
                <span className="tooltip">Chiamaci</span>
            </a>
            
            <a 
                href="mailto:info@puntomigrare.it" 
                className="contact-channel-icon email"
                aria-label="Inviaci una Email"
            >
                <i className="fas fa-envelope"></i>
                <span className="tooltip">Email</span>
            </a>
            
            {/* This is the main button that is always visible */}
            <div 
                className="contact-float-main-btn"
                onClick={() => setIsOpen(!isOpen)} // For mobile tap
            >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-headset'}`}></i>
            </div>
        </div>
    );
};

export default ContactFloat;