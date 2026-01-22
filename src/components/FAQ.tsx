import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const faqData = [
    {
        category: "Servicios de Laboratorio",
        questions: [
            {
                q: "¿Qué tipos de análisis realizan en Laboratorios Minares?",
                a: "Realizamos una amplia gama de análisis químicos y metalúrgicos, incluyendo análisis de mallas, pruebas de flotación, cianuración, absorción atómica y análisis por vía seca (fire assay) para oro y plata."
            },
            {
                q: "¿Cuál es el tiempo de entrega de los resultados?",
                a: "El tiempo estándar es de 24 a 48 horas para análisis básicos. Pruebas metalúrgicas más complejas pueden tomar de 3 a 5 días hábiles, dependiendo de los requerimientos específicos del cliente."
            },
            {
                q: "¿Cuentan con certificaciones de calidad?",
                a: "Sí, trabajamos bajo estrictos estándares internacionales y participamos regularmente en pruebas de intercomparación para garantizar la precisión y trazabilidad de cada resultado."
            }
        ]
    },
    {
        category: "Logística y Oficinas",
        questions: [
            {
                q: "¿Dónde puedo entregar mis muestras?",
                a: "Contamos con oficinas estratégicas en Lima, Nazca, Chala, Relave, Arequipa y Abancay. Puede ubicar la sede más cercana en nuestra sección de 'Contacto'."
            },
            {
                q: "¿Realizan recojo de muestras a domicilio o en mina?",
                a: "Sí, coordinamos servicios de recojo logístico según el volumen y la ubicación de las muestras. Por favor, consulte con nuestro equipo comercial para programar un recojo."
            }
        ]
    },
    {
        category: "Resultados y Pagos",
        questions: [
            {
                q: "¿Cómo recibiré mis informes de ensayo?",
                a: "Los informes se envían digitalmente vía correo electrónico en formato PDF firmado. También pueden solicitarse copias físicas en cualquiera de nuestras sedes."
            },
            {
                q: "¿Cuáles son los métodos de pago aceptados?",
                a: "Aceptamos transferencias bancarias (BCP, Scotiabank), depósitos y pagos directos en nuestras oficinas. Los detalles de las cuentas se encuentran disponibles en la sección de servicios."
            }
        ]
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<string | null>("0-0");

    const toggleAccordion = (index: string) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            {faqData.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-10">
                    <h3 className="text-xl font-bold text-brand-primary mb-6 flex items-center">
                        <div className="w-8 h-1 bg-brand-accent mr-3"></div>
                        {section.category}
                    </h3>
                    <div className="space-y-4">
                        {section.questions.map((item, qIdx) => {
                            const index = `${sectionIdx}-${qIdx}`;
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={qIdx}
                                    className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md border-brand-accent/30' : 'hover:border-gray-300'}`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className={`font-semibold text-lg ${isOpen ? 'text-brand-primary' : 'text-gray-700'}`}>
                                            {item.q}
                                        </span>
                                        <FontAwesomeIcon
                                            icon={isOpen ? faMinus : faPlus}
                                            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'text-brand-accent' : 'text-gray-400'}`}
                                        />
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-5 pt-0 text-gray-600 bg-white leading-relaxed">
                                            {item.a}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
