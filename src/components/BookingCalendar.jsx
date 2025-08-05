import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import Select from 'react-select';
import emailjs from '@emailjs/browser';
import 'react-calendar/dist/Calendar.css';

// --- EmailJS Credentials ---
// PASTE YOUR KEYS FROM THE EMAILJS DASHBOARD HERE
const EMAILJS_SERVICE_ID = 'service_s7bewxw';
const EMAILJS_ADMIN_TEMPLATE_ID = 'template_vy5zhfg';
const EMAILJS_USER_TEMPLATE_ID = 'template_eoltq5n';
const EMAILJS_PUBLIC_KEY = 'tctUkmzpy40wblsVw';

// --- Helper function to generate time slots (no changes) ---
const generateTimeSlots = (selectedDate) => {
    if (!selectedDate) return [];
    const dayOfWeek = selectedDate.getDay();
    if ([1, 2, 4].includes(dayOfWeek)) { // Mon, Tue, Thu
        const morningSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'];
        const afternoonSlots = ['14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
        return [...morningSlots, ...afternoonSlots];
    }
    if ([3, 5].includes(dayOfWeek)) { // Wed, Fri
        const halfDaySlots = [];
        for (let h = 9; h < 13; h++) {
            halfDaySlots.push(`${String(h).padStart(2, '0')}:00`);
            halfDaySlots.push(`${String(h).padStart(2, '0')}:30`);
        }
        return halfDaySlots;
    }
    return [];
};

const practiceOptions = [
    { value: "Immigrazione", label: "Immigrazione (Permesso, Cittadinanza, etc.)" },
    { value: "CAF e Patronato", label: "CAF e Patronato (730, ISEE, Pensioni)" },
    { value: "Altro", label: "Altro / Consulenza Generale" },
];

const customSelectStyles = {
    control: (p, s) => ({ ...p, borderColor: s.isFocused ? 'var(--accent-orange)' : '#ccc', boxShadow: s.isFocused ? '0 0 0 1px var(--accent-orange)' : 'none', '&:hover': { borderColor: 'var(--accent-orange)' }, borderRadius: '5px', padding: '0.2rem', fontFamily: 'var(--font-body)' }),
    option: (p, s) => ({ ...p, backgroundColor: s.isSelected ? 'var(--primary-blue)' : s.isFocused ? '#f8f9fa' : 'white', color: s.isSelected ? 'white' : 'var(--dark-text)', '&:active': { backgroundColor: 'var(--primary-blue)', color: 'white' }, fontFamily: 'var(--font-body)', cursor: 'pointer' }),
    placeholder: (p) => ({ ...p, color: '#999' }),
    singleValue: (p) => ({ ...p, color: 'var(--dark-text)' }),
    menu: (p) => ({ ...p, zIndex: 20 }),
};

const BookingCalendar = () => {
    const form = useRef();
    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const [practiceType, setPracticeType] = useState(null);
    const [submissionStatus, setSubmissionStatus] = useState('');
    const timeSlots = generateTimeSlots(date);

    const handleDateChange = (newDate) => { setDate(newDate); setSelectedTime(null); setSubmissionStatus(''); };
    const handleTimeSelect = (time) => { setSelectedTime(time); setSubmissionStatus(''); };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!practiceType) { alert('Per favore, seleziona un tipo di pratica.'); return; }
        
        setSubmissionStatus('submitting');

        // Prepare template parameters from the form
        const templateParams = {
            name: form.current.name.value,
            email: form.current.email.value,
            date: date.toLocaleDateString('it-IT'),
            time: selectedTime,
            practice_type: practiceType.value,
        };

        // Send notification email to admin
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_ADMIN_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
            .then(() => {
                // On success, send confirmation email to user
                return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_USER_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
            })
            .then(() => {
                // Both emails sent successfully
                setSubmissionStatus('success');
                form.current.reset();
                setSelectedTime(null);
                setPracticeType(null);
            })
            .catch((error) => {
                // If any email fails
                console.error('FAILED...', error);
                setSubmissionStatus('error');
            });
    };
    
    const tileDisabled = ({ date, view }) => view === 'month' && (date.getDay() === 0 || date.getDay() === 6);

    return (
        <section id="booking">
            <div className="container" data-aos="fade-up">
                <h2>Prenota un Appuntamento</h2>
                <p>Seleziona una data e un orario disponibili per fissare una consulenza. Riceverai un'email di conferma della tua richiesta.</p>
                <div className="booking-grid">
                    <div className="calendar-container"><Calendar onChange={handleDateChange} value={date} minDate={new Date()} locale="it-IT" tileDisabled={tileDisabled}/></div>
                    <div className="time-form-container">
                        {submissionStatus === 'success' ? (
                            <div className="booking-confirmation"><h3>Grazie!</h3><p>La tua richiesta è stata inviata. Controlla la tua email per la conferma.</p></div>
                        ) : (
                            <>
                                <h4>Data Selezionata: <strong>{date.toLocaleDateString('it-IT')}</strong></h4>
                                {timeSlots.length > 0 ? (
                                    <div className="time-slots-container">{timeSlots.map(time => (<button key={time} className={`time-slot-btn ${selectedTime === time ? 'active' : ''}`} onClick={() => handleTimeSelect(time)}>{time}</button>))}</div>
                                ) : ( <p className="no-slots-message">Nessun orario disponibile. Seleziona un giorno feriale.</p> )}
                                
                                {selectedTime && (
                                    <form ref={form} className="booking-form" onSubmit={handleSubmit}>
                                        <div className="form-group"><input type="text" name="name" placeholder="Il tuo Nome Completo" required /></div>
                                        <div className="form-group"><input type="email" name="email" placeholder="La tua Email" required /></div>
                                        <div className="form-group select-container">
                                            <Select
                                                options={practiceOptions} styles={customSelectStyles} placeholder="Seleziona il tipo di pratica..."
                                                onChange={setPracticeType} value={practiceType} isSearchable={false} required menuPortalTarget={document.body} 
                                            />
                                        </div>
                                        <button type="submit" className="submit-btn" disabled={submissionStatus === 'submitting'}>
                                            {submissionStatus === 'submitting' ? 'Invio in corso...' : 'Prenota il tuo appuntamento'}
                                        </button>
                                        {submissionStatus === 'error' && <p className="form-error-message">Oops! C'è stato un errore. Riprova.</p>}
                                    </form>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingCalendar;