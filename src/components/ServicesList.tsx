import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faMicroscope, faVial, faIndustry, faCogs, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        id: 1,
        title: 'ÁREA DE VIA SECA',
        description: 'Análisis de oro y plata mediante el método clásico de Fire Assay (Ensayo al Fuego), garantizando la máxima precisión en la determinación de leyes de metales preciosos.',
        icon: faIndustry,
        image: '/images/via_seca.png',
        features: ['Ensayo al Fuego (Fire Assay)', 'Copelación', 'Análisis gravimétrico', 'Alta precisión en Au y Ag']
    },
    {
        id: 2,
        title: 'ÁREA INSTRUMENTAL',
        description: 'Análisis elemental avanzado utilizando Absorción Atómica e ICP-OES para determinar la composición geoquímica exacta de sus muestras con límites de detección ultra bajos.',
        icon: faMicroscope,
        image: '/images/area_instrumental.png',
        features: ['Espectroscopia de Absorción Atómica', 'ICP-OES', 'Análisis multielemental', 'Detección de trazas']
    },
    {
        id: 3,
        title: 'ÁREA DE VIA HÚMEDA (VOLUMETRIA)',
        description: 'Métodos clásicos de química húmeda y volumetría para el análisis de concentrados y minerales de alta ley, asegurando resultados robustos y confiables.',
        icon: faVial,
        image: '/images/via_humeda.png',
        features: ['Volumetría redox', 'Gravimetría clásica', 'Análisis de concentrados', 'Determinación de Cu, Pb, Zn']
    },
    {
        id: 4,
        title: 'PRUEBAS METALÚRGICAS',
        description: 'Desarrollamos pruebas metalúrgicas a nivel de laboratorio para optimizar procesos de recuperación y beneficio de minerales.',
        icon: faFlask,
        image: '/images/via_seca.png', // Temporary placeholder
        features: ['Pruebas de flotación', 'Lixiviación en botella/columna', 'Pruebas de moliendabilidad', 'Optimización de reactivos']
    },
    {
        id: 5,
        title: 'SERVICIO ESPECIALIZADO',
        description: 'Consultoría técnica y servicios analíticos especializados adaptados a las necesidades específicas de su operación minera o proyecto de exploración.',
        icon: faCogs,
        image: '/images/area_instrumental.png', // Temporary placeholder
        features: ['Consultoría metalúrgica', 'Auditoría de laboratorios', 'Capacitación técnica', 'Diseño de protocolos']
    }
];

const ServicesList = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-20">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-80 lg:h-[28rem] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-brand-primary rounded-lg text-white shadow-lg">
                                        <FontAwesomeIcon icon={service.icon} className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                                </div>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-brand-primary">
                                    <h4 className="font-semibold text-gray-900 mb-4">Características Clave:</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600 text-sm">
                                                <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 text-brand-accent mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
