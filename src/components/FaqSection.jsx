import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../faqData';

const FaqItem = ({ faq, onToggle, isOpen }) => {
    return (
        <motion.div className="faq-item" layout>
            <motion.div className={`faq-question ${isOpen ? 'open' : ''}`} onClick={onToggle} layout>
                {faq.question}
                <div className="faq-toggle-icon">
                    {isOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
                </div>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-answer-container" // Renamed for clarity
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {/* This is the new inner component for the content fade-in */}
                        <motion.p
                            className="faq-answer-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }} // Fade in after the container starts opening
                        >
                            {faq.answer}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


const FaqSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const filteredFaqs = faqData.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="faq">
            <div className="container" data-aos="fade-up">
                <h2>Domande Frequenti</h2>
                <div className="faq-search-container">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        placeholder="Cerca per parola chiave (es. 'permesso', '730'...)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="faq-accordion">
                    <AnimatePresence>
                        {filteredFaqs.map((faq, index) => (
                            <FaqItem
                                key={faq.question}
                                faq={faq}
                                onToggle={() => handleToggle(index)}
                                isOpen={openIndex === index}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;