import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HashLink } from 'react-router-hash-link';
import CtaBanner from '../components/CtaBanner';

const ImmigrationServices = () => {
    return (
        <div className="service-page-container">
            <Helmet>
                <title>Servizi di Immigrazione | PuntoMigrare</title>
                <meta name="description" content="Consulenza completa per tutte le pratiche di immigrazione: dal permesso di soggiorno, al ricongiungimento familiare, fino alla richiesta di cittadinanza." />
            </Helmet>

            <HashLink to="/#services" className="back-link">← Torna a Tutti i Servizi</HashLink>
            <h1>I Nostri Servizi di Immigrazione</h1>
            <p className="intro">Offriamo una consulenza completa e personalizzata per tutte le pratiche di immigrazione, accompagnandoti in ogni fase del processo. Scopri nel dettaglio come possiamo aiutarti.</p>
            
            <section id="primo-rilascio">
                <h2>Primo Rilascio Permesso di Soggiorno</h2>
                <p>Ti guidiamo passo dopo passo nella richiesta del tuo primo permesso di soggiorno, assicurandoci che la procedura sia corretta e completa sin dall'inizio.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A cittadini non-UE che hanno ottenuto un visto d'ingresso per l'Italia per motivi di lavoro (subordinato o autonomo), famiglia o studio e devono richiedere il corrispondente permesso di soggiorno entro 8 giorni dall'ingresso.</p>
                <h4>Documenti Necessari (Principali)</h4>
                <ul>
                    <li>Modulo del kit postale compilato</li>
                    <li>Passaporto in corso di validità e copia del visto</li>
                    <li>4 fotografie formato tessera recenti</li>
                    <li>Marca da bollo da 16,00 €</li>
                    <li>Documentazione specifica relativa al motivo del soggiorno (es. contratto di lavoro, certificato di matrimonio, iscrizione al corso di studi).</li>
                </ul>
                <h4>La Nostra Consulenza</h4>
                <p>Verifichiamo la tua documentazione, ti aiutiamo nella compilazione precisa del kit postale, effettuiamo il pagamento dei bollettini e ti prepariamo per l'appuntamento in Questura, riducendo il rischio di errori o ritardi.</p>
                <HashLink smooth to="/#contact" className="service-cta-button">Contattaci per il tuo Permesso</HashLink>
            </section>
            
            <section id="rinnovo">
                <h2>Rinnovo Permesso di Soggiorno</h2>
                <p>Assicurati di rinnovare il tuo permesso di soggiorno entro i termini previsti dalla legge (almeno 60 giorni prima della scadenza) per garantire la continuità del tuo status legale in Italia.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A cittadini non-UE il cui permesso di soggiorno è in scadenza e che mantengono i requisiti per il rinnovo (es. contratto di lavoro, reddito sufficiente, legami familiari).</p>
                <h4>Documenti Necessari (Principali)</h4>
                <ul>
                    <li>Permesso di soggiorno in scadenza</li>
                    <li>Passaporto o documento equipollente</li>
                    <li>Documentazione che attesti la disponibilità di un reddito sufficiente (CUD, Modello Unico, buste paga)</li>
                    <li>Certificato di residenza e stato di famiglia</li>
                </ul>
                <h4>La Nostra Consulenza</h4>
                <p>Analizziamo la tua posizione, prepariamo la pratica di rinnovo con tutti i documenti corretti, compiliamo il kit postale e monitoriamo lo stato della tua richiesta fino al ritiro del nuovo documento.</p>
                <HashLink smooth to="/#contact" className="service-cta-button">Richiedi Assistenza per il Rinnovo</HashLink>
            </section>
            
            <section id="conversione">
                <h2>Aggiornamento e Conversione del Permesso di Soggiorno</h2>
                <p>È necessario aggiornare il permesso quando cambiano dati essenziali (passaporto, stato civile, domicilio) o convertirlo quando cambia il motivo del soggiorno (es. da studio a lavoro).</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A titolari di permesso di soggiorno che devono registrare un cambio di dati o che hanno maturato i requisiti per convertire il loro titolo, ad esempio da studio a lavoro subordinato/autonomo.</p>
                <h4>Documenti Necessari (Principali)</h4>
                <ul>
                    <li>Permesso di soggiorno attuale</li>
                    <li>Passaporto valido</li>
                    <li>Documentazione che attesti il cambiamento (es. nuovo passaporto, contratto di lavoro, proposta di assunzione).</li>
                </ul>
                <h4>La Nostra Consulenza</h4>
                <p>Valutiamo la fattibilità della conversione, ti guidiamo nella raccolta dei documenti necessari e gestiamo l'intera pratica, sia essa una semplice richiesta di aggiornamento o una più complessa conversione.</p>
                <HashLink smooth to="/#contact" className="service-cta-button">Gestisci la tua Pratica</HashLink>
            </section>
            
            <section id="lungo-periodo">
                <h2>Richiesta Permesso di Soggiorno UE per Soggiornanti di Lungo Periodo</h2>
                <p>Ottieni la "carta di soggiorno", un titolo a tempo indeterminato che offre maggiori diritti e stabilità in Italia e nell'Unione Europea.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A cittadini non-UE che risiedono legalmente e ininterrottamente in Italia da almeno 5 anni, dispongono di un reddito minimo e hanno superato il test di lingua italiana.</p>
                <h4>Documenti Necessari (Principali)</h4>
                <ul>
                    <li>Copia del passaporto</li>
                    <li>Permesso di soggiorno in corso di validità</li>
                    <li>Certificato del casellario giudiziale e carichi pendenti</li>
                    <li>Documentazione reddituale degli ultimi 5 anni</li>
                    <li>Attestato di superamento del test di lingua italiana (livello A2)</li>
                    <li>Certificato di idoneità alloggiativa</li>
                </ul>
                <h4>La Nostra Consulenza</h4>
                <p>Effettuiamo una verifica completa dei requisiti, ti assistiamo nella prenotazione del test di lingua, raccogliamo tutta la complessa documentazione e presentiamo la domanda per massimizzare le possibilità di successo.</p>
                <HashLink smooth to="/#contact" className="service-cta-button">Richiedi la Carta di Soggiorno</HashLink>
            </section>

            <section id="ricongiungimento">
                <h2>Pratiche di Ricongiungimento Familiare</h2>
                <p>Avvia la procedura per far entrare legalmente in Italia i tuoi familiari residenti all'estero, ottenendo il Nulla Osta dallo Sportello Unico per l'Immigrazione.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A cittadini non-UE, titolari di un permesso di soggiorno valido, che desiderano riunire la propria famiglia portando in Italia coniuge, figli minori o genitori a carico.</p>
                <h4>Documenti Necessari (Principali)</h4>
                <ul>
                    <li>Documentazione reddituale che dimostri la capacità di mantenimento del nucleo familiare</li>
                    <li>Certificato di idoneità alloggiativa rilasciato dal Comune</li>
                    <li>Documenti che attestino il legame di parentela (certificati di matrimonio/nascita), tradotti e legalizzati.</li>
                </ul>
                <h4>La Nostra Consulenza</h4>
                <p>Dalla richiesta dei certificati necessari (come l'idoneità alloggiativa) alla compilazione e all'invio telematico della domanda di Nulla Osta, ti supportiamo in ogni fase per riunire la tua famiglia.</p>
                <HashLink smooth to="/#contact" className="service-cta-button">Avvia il Ricongiungimento</HashLink>
            </section>

            <section id="flussi">
                <h2>Domande per il Decreto Flussi</h2>
                <p>Partecipa al "click day" per l'assunzione di lavoratori non-UE residenti all'estero, per lavoro stagionale o subordinato, secondo le quote annuali stabilite dal Governo.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A datori di lavoro in Italia che intendono assumere un lavoratore residente all'estero nei settori e secondo le quote previste dal Decreto Flussi annuale.</p>
                <h4>Documenti Necessari (Principali)</h4>
                <ul>
                    <li>Documenti identificativi del datore di lavoro e dell'azienda</li>
                    <li>Dati anagrafici del lavoratore da assumere</li>
                    <li>Proposta di contratto di soggiorno con dettagli sull'impiego e l'alloggio.</li>
                </ul>
                <h4>La Nostra Consulenza</h4>
                <p>Prepariamo in anticipo tutta la documentazione, compiliamo la domanda e la inviamo telematicamente il giorno del click day, aumentando le probabilità che la tua richiesta rientri nelle quote disponibili.</p>
                <HashLink smooth to="/#contact" className="service-cta-button">Partecipa al Decreto Flussi</HashLink>
            </section>

            <section id="cittadinanza">
                <h2>Richiesta di Cittadinanza Italiana</h2>
                <p>Intraprendi il percorso per diventare cittadino italiano, sia per residenza che per matrimonio. Un passo importante che richiede una preparazione meticolosa della domanda.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>Per residenza: stranieri che risiedono legalmente in Italia da un numero di anni variabile (es. 10 anni per cittadini non-UE, 4 anni per cittadini UE). Per matrimonio: coniugi di cittadini italiani.</p>
                <h4>Documenti Necessari (Principali)</h4>
                <ul>
                    <li>Atto di nascita e certificato penale del paese d'origine (tradotti e legalizzati)</li>
                    <li>Documentazione reddituale degli ultimi 3 anni</li>
                    <li>Attestato di conoscenza della lingua italiana (livello B1)</li>
                    <li>Ricevuta del versamento del contributo di 250,00 €</li>
                </ul>
                <h4>La Nostra Consulenza</h4>
                <p>Ti guidiamo nella complessa raccolta dei documenti dai paesi d'origine e dall'Italia, verifichiamo il rispetto di tutti i requisiti, compiliamo e inviamo la domanda telematica, e ne seguiamo l'iter.</p>
                <HashLink smooth to="/#contact" className="service-cta-button">Richiedi la Cittadinanza</HashLink>
            </section>

            <section id="test-lingua">
                <h2>Prenotazione Test di Lingua Italiana</h2>
                <p>La conoscenza della lingua italiana è un requisito fondamentale per diverse pratiche, come la richiesta del permesso di lungo periodo e della cittadinanza.</p>
                <h4>A Chi è Rivolto?</h4>
                <p>A tutti i cittadini stranieri che devono certificare la loro conoscenza della lingua italiana per una pratica di immigrazione (livello A2 per il permesso UE, livello B1 per la cittadinanza).</p>
                <h4>Documenti Necessari (Principali)</h4>
                <ul>
                    <li>Documento di identità o passaporto</li>
                    <li>Permesso di soggiorno (se in possesso)</li>
                    <li>Codice fiscale</li>
                </ul>
                <h4>La Nostra Consulenza</h4>
                <p>Individuiamo il centro d'esame CILS, CELI, o PLIDA più vicino a te, gestiamo la procedura di iscrizione e prenotazione dell'esame, assicurandoci che tu possa sostenere il test necessario per la tua pratica.</p>
                <HashLink smooth to="/#contact" className="service-cta-button">Prenota il tuo Test</HashLink>
            </section>

            <CtaBanner 
                headline="Pronto per Iniziare il Tuo Percorso in Italia?"
                buttonText="Richiedi una Consulenza"
            />
        </div>
    );
};

export default ImmigrationServices;