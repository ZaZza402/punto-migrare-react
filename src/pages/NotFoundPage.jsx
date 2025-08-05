import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="service-page-container not-found-page">
            <Helmet>
                <title>404 Pagina Non Trovata | PuntoMigrare</title>
                <meta name="description" content="La pagina che stai cercando non è disponibile." />
            </Helmet>

            <div className="not-found-content">
                <i className="fas fa-exclamation-triangle not-found-icon"></i>
                <h1>404</h1>
                <h2>Pagina Non Trovata</h2>
                <p>
                    Oops! La pagina che stai cercando non esiste. Potrebbe essere stata spostata o rimossa.
                </p>
                <Link to="/" className="cta-button">
                    Torna alla Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;