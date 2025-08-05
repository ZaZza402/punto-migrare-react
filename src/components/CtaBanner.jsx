import React from 'react';
import { HashLink } from 'react-router-hash-link';

const CtaBanner = ({ headline, buttonText, buttonLink = "/#booking" }) => {
    return (
        <section className="cta-banner-section" data-aos="fade-up">
            <div className="container cta-banner-container">
                <h2>{headline}</h2>
                <HashLink smooth to={buttonLink} className="cta-button">
                    {buttonText}
                </HashLink>
            </div>
        </section>
    );
};

export default CtaBanner;