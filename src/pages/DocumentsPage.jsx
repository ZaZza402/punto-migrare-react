import React from 'react';
import { Helmet } from 'react-helmet-async';
import DocumentCard from '../components/DocumentCard';
import { HashLink } from 'react-router-hash-link';

const BASE_URL = import.meta.env.BASE_URL;

const documents = [
    {
        icon: 'fas fa-file-invoice-dollar',
        title: 'Checklist Modello 730',
        description: 'Una lista di controllo completa per assicurarti di avere tutti i documenti necessari per la tua dichiarazione dei redditi.',
        fileUrl: `${BASE_URL}checklist-modello-730.pdf`,
    },
    {
        icon: 'fas fa-passport',
        title: 'Guida al Rinnovo Permesso',
        description: 'Istruzioni e lista documenti per la richiesta di rinnovo del permesso di soggiorno per lavoro subordinato.',
        fileUrl: `${BASE_URL}guida-rinnovo-permesso.pdf`,
    },
    {
        icon: 'fas fa-house-user',
        title: 'Contratto Collaboratori Domestici',
        description: 'Un fac-simile del contratto di lavoro standard per colf, badanti e babysitter, secondo il CCNL di settore.',
        fileUrl: `${BASE_URL}fac-simile-contratto-colf.pdf`,
    },
];

const DocumentsPage = () => {
    return (
        <div className="service-page-container documents-page-container">
            <Helmet>
                <title>Documenti Utili | PuntoMigrare</title>
                <meta name="description" content="Scarica gratuitamente moduli, guide e checklist utili per le tue pratiche di immigrazione, fiscali e per collaboratori domestici." />
            </Helmet>

            <HashLink to="/#services" className="back-link">← Torna a Tutti i Servizi</HashLink>
            <h1>Documenti Utili</h1>
            <p className="intro">
                Qui puoi trovare una raccolta di documenti, moduli e guide utili per le tue pratiche. Scarica gratuitamente i file di cui hai bisogno.
            </p>

            <div className="documents-grid">
                {documents.map((doc, index) => (
                    <DocumentCard
                        key={index}
                        icon={doc.icon}
                        title={doc.title}
                        description={doc.description}
                        fileUrl={doc.fileUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default DocumentsPage;