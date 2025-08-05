import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HashLink } from 'react-router-hash-link';
import CtaBanner from '../components/CtaBanner';

const CafPatronatoServices = () => {
    return (
        <main className="service-page-container">
            <Helmet>
                <title>Servizi CAF e Patronato | PuntoMigrare</title>
                <meta name="description" content="Assistenza fiscale (730, ISEE), pratiche di pensione e richiesta di prestazioni sociali. Scopri i nostri servizi di CAF e Patronato." />
            </Helmet>

            <HashLink to="/#services" className="back-link">← Torna a Tutti i Servizi</HashLink>
            <h1>I Nostri Servizi di CAF e Patronato</h1>
            <p className="intro">Forniamo assistenza fiscale, previdenziale e per l'accesso a prestazioni sociali. Il nostro team di esperti è a tua disposizione per gestire le tue pratiche con professionalità e precisione.</p>

            <section id="fiscale"><h2>Assistenza Fiscale</h2>
                <div id="modello-730">
                    <h3>Compilazione e invio Modello 730</h3>
                    <p>Semplifica la tua dichiarazione dei redditi. Ci occupiamo della compilazione e dell'invio telematico del tuo Modello 730, aiutandoti a ottenere tutti i rimborsi e le detrazioni a cui hai diritto.</p>
                    <h4>A Chi è Rivolto?</h4>
                    <p>A lavoratori dipendenti e pensionati che desiderano una gestione semplice e vantaggiosa della propria dichiarazione fiscale annuale.</p>
                    <h4>Documenti Necessari (Principali)</h4>
                    <ul>
                        <li>Certificazione Unica (CU) dell'anno di riferimento</li>
                        <li>Scontrini e fatture di spese mediche</li>
                        <li>Ricevute di altre spese detraibili o deducibili (es. spese veterinarie, interessi mutuo, assicurazioni vita).</li>
                    </ul>
                    <h4>La Nostra Consulenza</h4>
                    <p>Analizziamo in dettaglio la tua documentazione per massimizzare il tuo risparmio fiscale, compiliamo il modello in ogni sua parte e lo trasmettiamo all'Agenzia delle Entrate per tuo conto.</p>
                    <HashLink to="/#contact" className="service-cta-button">Compila il tuo 730 con Noi</HashLink>
                </div>
                
                <div id="modello-redditi">
                    <h3 style={{ marginTop: '2.5rem' }}>Compilazione e invio Modello Redditi</h3>
                    <p>Per i soggetti non obbligati o che non possono presentare il 730, offriamo assistenza completa per la compilazione del Modello Redditi Persone Fisiche.</p>
                    <h4>A Chi è Rivolto?</h4>
                    <p>A titolari di Partita IVA, a chi ha percepito redditi dall'estero o redditi d'impresa, e in tutti gli altri casi previsti dalla normativa fiscale.</p>
                    <h4>La Nostra Consulenza</h4>
                    <p>Gestiamo la dichiarazione in tutti i suoi quadri, calcoliamo le imposte dovute (IRPEF, addizionali) e predisponiamo i modelli F24 per i pagamenti.</p>
                    <HashLink to="/#contact" className="service-cta-button">Prepara il tuo Modello Redditi</HashLink>
                </div>
            </section>

            <section id="sociali"><h2>Prestazioni Sociali e Agevolazioni</h2>
                <div id="isee">
                    <h3>Calcolo e rilascio attestazione ISEE</h3>
                    <p>L'ISEE (Indicatore della Situazione Economica Equivalente) è la chiave per accedere a numerose agevolazioni, bonus e prestazioni sociali a condizioni vantaggiose.</p>
                    <h4>A Chi è Rivolto?</h4>
                    <p>A tutti i nuclei familiari che necessitano di richiedere bonus (es. bonus bollette), assegno unico, riduzione tasse universitarie, e altre prestazioni sociali.</p>
                    <h4>Documenti Necessari (Principali)</h4>
                    <ul>
                        <li>Documenti d'identità e codici fiscali di tutto il nucleo familiare</li>
                        <li>Contratto di locazione registrato (se in affitto)</li>
                        <li>Saldo e giacenza media dei conti correnti al 31/12 di due anni prima</li>
                        <li>Visure catastali di eventuali immobili posseduti.</li>
                    </ul>
                    <h4>La Nostra Consulenza</h4>
                    <p>Raccogliamo insieme a te tutti i dati patrimoniali e reddituali, compiliamo la Dichiarazione Sostitutiva Unica (DSU) e ti forniamo l'attestazione ISEE ufficiale.</p>
                    <HashLink to="/#contact" className="service-cta-button">Richiedi il tuo ISEE</HashLink>
                </div>

                <div id="assegno-unico">
                    <h3 style={{ marginTop: '2.5rem' }}>Domanda per l'Assegno Unico e Universale</h3>
                    <p>Ti aiutiamo a ottenere il sostegno economico previsto per tutte le famiglie con figli a carico, dal settimo mese di gravidanza fino ai 21 anni di età.</p>
                    <h4>A Chi è Rivolto?</h4>
                    <p>A tutte le famiglie con figli a carico, indipendentemente dalla condizione lavorativa. L'importo varia in base all'ISEE del nucleo familiare.</p>
                    <h4>La Nostra Consulenza</h4>
                    <p>Prepariamo e inviamo la domanda all'INPS per tuo conto, assicurandoci di inserire correttamente tutti i dati (come l'IBAN) per un'erogazione rapida e senza intoppi.</p>
                    <HashLink to="/#contact" className="service-cta-button">Fai Domanda per l'Assegno Unico</HashLink>
                </div>
            </section>

            <section id="previdenza"><h2>Pensioni e Previdenza</h2>
                <div id="pensione">
                    <h3>Domanda di Pensione</h3>
                    <p>Accompagniamo i lavoratori nel momento più importante della loro carriera: il raggiungimento della pensione. Analizziamo la tua posizione per scegliere la soluzione più adatta a te.</p>
                    <h4>A Chi è Rivolto?</h4>
                    <p>A lavoratori prossimi al raggiungimento dei requisiti per la pensione di vecchiaia, anticipata, di reversibilità, o altre forme previdenziali.</p>
                    <h4>La Nostra Consulenza</h4>
                    <p>Effettuiamo un'analisi approfondita della tua posizione contributiva, calcoliamo la data di decorrenza e l'importo stimato, e presentiamo la domanda di pensione all'INPS.</p>
                    <HashLink to="/#contact" className="service-cta-button">Pianifica la tua Pensione</HashLink>
                </div>
                
                <div id="invalidita">
                    <h3 style={{ marginTop: '2.5rem' }}>Richiesta di Invalidità Civile e Legge 104</h3>
                    <p>Forniamo supporto completo per il riconoscimento dei diritti delle persone con disabilità, dalla domanda di invalidità civile alla richiesta dei benefici previsti dalla Legge 104/92.</p>
                    <h4>A Chi è Rivolto?</h4>
                    <p>A persone affette da patologie o menomazioni che ne riducono la capacità lavorativa o l'autonomia, e ai loro familiari (caregiver).</p>
                    <h4>La Nostra Consulenza</h4>
                    <p>Ti assistiamo nella fase iniziale con l'invio del certificato medico da parte del tuo dottore, presentiamo la domanda all'INPS e ti guidiamo durante tutto l'iter di accertamento sanitario.</p>
                    <HashLink to="/#contact" className="service-cta-button">Richiedi il Riconoscimento</HashLink>
                </div>
            </section>
            
            <CtaBanner 
                headline="Hai Bisogno di Assistenza Fiscale o Previdenziale?"
                buttonText="Parla con un Esperto"
            />
        </main>
    );
};

export default CafPatronatoServices;