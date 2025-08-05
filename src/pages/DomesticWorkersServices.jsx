import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HashLink } from 'react-router-hash-link';
import CtaBanner from '../components/CtaBanner';

const DomesticWorkersServices = () => {
    return (
        <main className="service-page-container">
            <Helmet>
                <title>Gestione Collaboratori Domestici | PuntoMigrare</title>
                <meta name="description" content="Servizi completi per la gestione di colf, badanti e babysitter: assunzione, buste paga, contributi INPS e TFR." />
            </Helmet>

            <HashLink to="/#services" className="back-link">← Torna a Tutti i Servizi</HashLink>
            <h1>Gestione Collaboratori Domestici</h1>
            <p className="intro">Semplifichiamo la gestione del rapporto di lavoro con colf, badanti e babysitter. Dalla stipula del contratto all'elaborazione delle buste paga, ci occupiamo di tutti gli adempimenti burocratici per te.</p>

            <section id="assunzione">
                <h2>Gestione Assunzione</h2>
                <p>Mettere in regola un collaboratore domestico è un obbligo di legge e una tutela per entrambe le parti. Ti guidiamo nella creazione di un contratto a norma secondo il CCNL di settore.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A tutte le famiglie che intendono assumere una colf, una badante o una babysitter e desiderano impostare il rapporto di lavoro in modo corretto e trasparente fin dall'inizio.</p>
                <h4>Documenti Necessari (Principali)</h4>
                <ul>
                    <li>Documento d'identità e codice fiscale del datore di lavoro</li>
                    <li>Documento d'identità, codice fiscale e (se necessario) permesso di soggiorno del lavoratore</li>
                </ul>
                <h4>La Nostra Consulenza</h4>
                <p>Ti aiutiamo a definire il corretto inquadramento (livello, orario), redigiamo la lettera di assunzione personalizzata e inviamo la comunicazione obbligatoria di assunzione all'INPS entro i termini di legge.</p>
                <HashLink to="/#contact" className="service-cta-button">Assumi in Regola Oggi</HashLink>
            </section>

            <section id="buste-paga">
                <h2>Elaborazione Buste Paga Mensili</h2>
                <p>Ogni mese, forniamo un prospetto paga chiaro e dettagliato che tiene conto di tutti gli elementi della retribuzione, come le ore lavorate, ferie, permessi e tredicesima.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A datori di lavoro domestico che vogliono delegare il calcolo mensile della busta paga, assicurandosi che sia sempre corretta e conforme al contratto.</p>
                <h4>La Nostra Consulenza</h4>
                <p>Sulla base delle presenze che ci comunicherai, elaboriamo il cedolino paga mensile includendo tutti gli elementi ordinari e straordinari, garantendo precisione e puntualità.</p>
                <HashLink to="/#contact" className="service-cta-button">Richiedi un Preventivo</HashLink>
            </section>
            
            <section id="contributi">
                <h2>Calcolo Contributi INPS e MAV</h2>
                <p>Il versamento dei contributi INPS è fondamentale per garantire al lavoratore la copertura previdenziale e assicurativa. Ci occupiamo noi del calcolo e della predisposizione per il pagamento.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A tutti i datori di lavoro domestico, che sono tenuti a versare i contributi trimestralmente.</p>
                <h4>La Nostra Consulenza</h4>
                <p>Calcoliamo l'importo esatto dei contributi da versare ogni trimestre, tenendo conto delle ore retribuite, e generiamo il bollettino MAV (o l'avviso PagoPA) pronto per essere pagato in banca, posta o online.</p>
                <HashLink to="/#contact" className="service-cta-button">Gestisci i Contributi</HashLink>
            </section>
            
            <section id="tfr">
                <h2>Calcolo del TFR (Trattamento di Fine Rapporto)</h2>
                <p>Il TFR è una somma che matura durante tutto il rapporto di lavoro e che deve essere liquidata alla sua cessazione. È importante accantonarla e calcolarla correttamente.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A datori di lavoro che necessitano di calcolare la quota di TFR maturata annualmente dal proprio dipendente o l'importo totale da liquidare alla fine del contratto.</p>
                <h4>La Nostra Consulenza</h4>
                <p>Calcoliamo la quota di TFR maturata ogni anno, comprensiva della rivalutazione legale, e forniamo il conteggio finale al momento della cessazione del rapporto, garantendo un calcolo preciso.</p>
                <HashLink to="/#contact" className="service-cta-button">Parla con un Esperto</HashLink>
            </section>

            <section id="cessazione">
                <h2>Gestione della Cessazione del Rapporto di Lavoro</h2>
                <p>La conclusione di un rapporto di lavoro, sia per licenziamento che per dimissioni, richiede adempimenti specifici da non sottovalutare.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A datori di lavoro che devono gestire la fine del contratto con il proprio collaboratore domestico.</p>
                <h4>La Nostra Consulenza</h4>
                <p>Ti assistiamo nel calcolo dei giorni di preavviso, prepariamo i conteggi finali per l'ultima busta paga (comprensiva di ferie non godute, TFR, etc.) e inviamo la comunicazione di cessazione all'INPS.</p>
                <HashLink to="/#contact" className="service-cta-button">Assicura una Chiusura Corretta</HashLink>
            </section>
            
            <section id="cu">
                <h2>Elaborazione Certificazione Unica (CU)</h2>
                <p>Entro la scadenza annuale, il datore di lavoro deve fornire al lavoratore la Certificazione Unica (CU), un documento che riepiloga tutti i redditi percepiti nell'anno precedente.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A tutti i datori di lavoro domestico, come obbligo fiscale annuale.</p>
                <h4>La Nostra Consulenza</h4>
                <p>Elaboriamo la Certificazione Unica sulla base delle buste paga emesse durante l'anno e te la forniamo pronta per essere consegnata al tuo dipendente, che potrà così utilizzarla per la propria dichiarazione dei redditi.</p>
                <HashLink to="/#contact" className="service-cta-button">Richiedi la tua CU</HashLink>
            </section>

            <CtaBanner 
                headline="Semplifica la Gestione del Tuo Lavoro Domestico"
                buttonText="Scopri Come Possiamo Aiutarti"
            />
        </main>
    );
};

export default DomesticWorkersServices;