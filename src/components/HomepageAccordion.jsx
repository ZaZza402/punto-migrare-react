import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const AccordionItem = ({ title, icon, children, index, activeIndex, setActiveIndex }) => {
    const isActive = index === activeIndex;

    const toggleItem = () => {
        setActiveIndex(isActive ? null : index);
    };

    return (
        <div className={`accordion-item ${isActive ? 'active' : ''}`}>
            <div className="accordion-header" onClick={toggleItem}>
                <h3><i className={icon}></i>{title}</h3>
                <i className="fas fa-chevron-down chevron-icon"></i>
            </div>
            <div className={`accordion-details ${isActive ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
};


const HomepageAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="accordion">
            <AccordionItem title="Immigrazione" icon="fas fa-passport" index={0} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                <ul>
                    <li><HashLink to="/servizi-immigrazione#primo-rilascio">Primo Rilascio Permesso di Soggiorno (per lavoro, famiglia, studio)</HashLink></li>
                    <li><HashLink to="/servizi-immigrazione#rinnovo">Rinnovo Permesso di Soggiorno</HashLink></li>
                    <li><HashLink to="/servizi-immigrazione#conversione">Aggiornamento e Conversione del Permesso di Soggiorno</HashLink></li>
                    <li><HashLink to="/servizi-immigrazione#lungo-periodo">Richiesta Permesso di Soggiorno UE per Soggiornanti di Lungo Periodo</HashLink></li>
                    <li><HashLink to="/servizi-immigrazione#ricongiungimento">Pratiche di Ricongiungimento Familiare (Richiesta Nulla Osta)</HashLink></li>
                    <li><HashLink to="/servizi-immigrazione#flussi">Domande per il Decreto Flussi</HashLink></li>
                    <li><HashLink to="/servizi-immigrazione#cittadinanza">Richiesta di Cittadinanza Italiana (per residenza e per matrimonio)</HashLink></li>
                    <li><HashLink to="/servizi-immigrazione#test-lingua">Prenotazione Test di Lingua Italiana</HashLink></li>
                </ul>
            </AccordionItem>

            <AccordionItem title="CAF e Patronato" icon="fas fa-file-invoice-dollar" index={1} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                 <h4>Assistenza Fiscale</h4>
                 <ul>
                    <li><HashLink to="/servizi-caf-patronato#modello-730">Compilazione e invio Modello 730</HashLink></li>
                    <li><HashLink to="/servizi-caf-patronato#modello-redditi">Compilazione e invio Modello Redditi Persone Fisiche</HashLink></li>
                    <li><HashLink to="/servizi-caf-patronato#imu">Calcolo IMU e stampa Modello F24 per il pagamento</HashLink></li>
                    <li><HashLink to="/servizi-caf-patronato#successione">Dichiarazione di Successione e Voltura Catastale</HashLink></li>
                    <li><HashLink to="/servizi-caf-patronato#locazione">Registrazione Contratti di Locazione</HashLink></li>
                 </ul>
                 <h4>Prestazioni Sociali e Agevolazioni</h4>
                 <ul>
                    <li><HashLink to="/servizi-caf-patronato#isee">Calcolo e rilascio attestazione ISEE</HashLink></li>
                    <li><HashLink to="/servizi-caf-patronato#assegno-unico">Domanda per l'Assegno Unico e Universale per i figli</HashLink></li>
                    <li><HashLink to="/servizi-caf-patronato#naspi">Domanda di Disoccupazione (NASpI e Dis-Coll)</HashLink></li>
                    <li><HashLink to="/servizi-caf-patronato#bonus-sociali">Gestione Bonus Sociali per bollette di luce e gas</HashLink></li>
                    <li><HashLink to="/servizi-caf-patronato#modello-red">Compilazione Modello RED per i pensionati</HashLink></li>
                 </ul>
                 <h4>Pensioni e Previdenza</h4>
                 <ul>
                    <li><HashLink to="/servizi-caf-patronato#pensione">Domanda di Pensione (di vecchiaia, anticipata, di reversibilità)</HashLink></li>
                    <li><HashLink to="/servizi-caf-patronato#invalidita">Richiesta di Invalidità Civile e Legge 104</HashLink></li>
                    <li><HashLink to="/servizi-caf-patronato#posizione-contributiva">Verifica della posizione contributiva</HashLink></li>
                 </ul>
            </AccordionItem>
            
            <AccordionItem title="Collaboratori Domestici" icon="fas fa-house-user" index={2} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
                <ul>
                    <li><HashLink to="/servizi-collaboratori-domestici#assunzione">Gestione Assunzione (Stipula del contratto di lavoro e comunicazione all'INPS)</HashLink></li>
                    <li><HashLink to="/servizi-collaboratori-domestici#buste-paga">Elaborazione delle Buste Paga mensili</HashLink></li>
                    <li><HashLink to="/servizi-collaboratori-domestici#contributi">Calcolo dei Contributi INPS trimestrali e generazione del bollettino MAV</HashLink></li>
                    <li><HashLink to="/servizi-collaboratori-domestici#gestione-eventi">Gestione di Ferie, Malattia e Infortuni</HashLink></li>
                    <li><HashLink to="/servizi-collaboratori-domestici#tfr">Calcolo del TFR (Trattamento di Fine Rapporto)</HashLink></li>
                    <li><HashLink to="/servizi-collaboratori-domestici#cessazione">Gestione della Cessazione del Rapporto di Lavoro</HashLink></li>
                    <li><HashLink to="/servizi-collaboratori-domestici#cu">Elaborazione e rilascio della Certificazione Unica (CU) annuale</HashLink></li>
                </ul>
            </AccordionItem>
        </div>
    );
};

export default HomepageAccordion;