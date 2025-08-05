import React from 'react';
// 1. IMPORT SWIPER REACT COMPONENTS AND MODULES
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

// 2. IMPORT SWIPER STYLES
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// The same testimonial data from before
const testimonialsData = [
    {
        quote: "Professionalità e pazienza incredibili. Hanno risolto la mia pratica di ricongiungimento in tempi record. Non potrei essere più felice!",
        author: "Maria S.",
        service: "Pratiche di Immigrazione"
    },
    {
        quote: "Finalmente qualcuno che ha reso il Modello 730 una passeggiata. Personale preparato, gentile e sempre disponibile a chiarire ogni dubbio. Consigliatissimo.",
        author: "Marco Rossi",
        service: "Assistenza Fiscale (CAF)"
    },
    {
        quote: "La gestione del contratto per la nostra badante era un incubo. PuntoMigrare ha gestito tutto, dalle buste paga ai contributi. Un servizio impeccabile.",
        author: "Famiglia Bianchi",
        service: "Gestione Collaboratori Domestici"
    },
    {
        quote: "Avevo bisogno del mio ISEE urgentemente e sono stati velocissimi e super efficienti. Un team fantastico che consiglio a tutti.",
        author: "Ahmed K.",
        service: "Prestazioni Sociali (ISEE)"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container" data-aos="fade-up">
                <h2>Dicono di Noi</h2>
                
                {/* 3. REPLACE THE STATIC GRID WITH THE SWIPER COMPONENT */}
                <Swiper
                    // Install Swiper modules
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    spaceBetween={30} // Space between slides
                    slidesPerView={1} // Show 1 slide at a time on mobile
                    loop={true} // Loop back to the beginning
                    autoplay={{
                        delay: 5000, // 5 seconds per slide
                        disableOnInteraction: true, // Don't stop autoplay on user interaction
                    }}
                    pagination={{ clickable: true }} // Enable clickable pagination dots
                    navigation={true} // Enable Next/Prev arrows
                    // Responsive breakpoints
                    breakpoints={{
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }}
                    className="mySwiper"
                >
                    {testimonialsData.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-card">
                                <i className="fas fa-quote-left quote-icon"></i>
                                <blockquote className="quote-text">
                                    {testimonial.quote}
                                </blockquote>
                                <div className="author-info">
                                    <p className="author-name">— {testimonial.author}</p>
                                    <p className="author-service">{testimonial.service}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;