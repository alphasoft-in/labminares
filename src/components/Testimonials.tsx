import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
    {
        id: 1,
        name: "Ing. Roberto Méndez",
        role: "Gerente de Operaciones",
        company: "Minera Aurífera del Sur",
        content: "La precisión en los resultados del ensayo al fuego ha sido fundamental para nuestras decisiones operativas. Minares South es un socio estratégico de confianza.",
        rating: 5
    },
    {
        id: 2,
        name: "Dra. Lucía Valdivia",
        role: "Jefa de Laboratorio QC",
        company: "Concentradora Andes",
        content: "El tiempo de respuesta en los análisis por absorción atómica es excepcional. Su tecnología instrumental de punta marca la diferencia en el mercado.",
        rating: 5
    },
    {
        id: 3,
        name: "Carlos Espinoza",
        role: "Director Proyectos",
        company: "Exploraciones del Centro",
        content: "Excelente trato profesional y transparencia en todo el proceso. Sus certificaciones y estándares internacionales nos brindan la seguridad que necesitamos.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background texture/elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 transform origin-top-right"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-6">
                        <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
                        <span className="text-gray-600 font-bold uppercase tracking-[0.2em] text-[10px]">Opiniones de Clientes</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter leading-tight mb-4">
                        Resultados que <span className="text-brand-primary">Generan Confianza</span>
                    </h2>
                    <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="flex flex-col bg-white p-8 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-700 group"
                        >
                            <div className="mb-6">
                                <div className="flex space-x-1 mb-5">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className="h-2 w-2 text-brand-primary" />
                                    ))}
                                </div>
                                <div className="relative">
                                    <FontAwesomeIcon icon={faQuoteLeft} className="absolute -top-3 -left-4 h-8 w-8 text-brand-primary opacity-5 group-hover:opacity-10 transition-opacity" />
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium relative z-10">
                                        "{testimonial.content}"
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center">
                                <div className="w-10 h-10 rounded-xl bg-brand-surface flex items-center justify-center mr-3 shadow-md shadow-brand-surface/10 shrink-0">
                                    <span className="text-white font-bold text-base">{testimonial.name.charAt(5)}</span>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <h4 className="text-gray-900 font-bold text-sm tracking-tight truncate">{testimonial.name}</h4>
                                    <div className="flex flex-col">
                                        <span className="text-brand-primary text-[9px] font-black uppercase tracking-widest leading-none mb-1">{testimonial.role}</span>
                                        <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest truncate">{testimonial.company}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
