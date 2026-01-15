import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faMicroscope, faVial, faIndustry, faCogs, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        id: 1,
        slug: 'via-seca',
        title: 'ÁREA DE VIA SECA',
        description: 'Análisis de oro y plata mediante el método clásico de Fire Assay (Ensayo al Fuego), garantizando la máxima precisión en la determinación de leyes de metales preciosos.',
        icon: faIndustry,
        image: '/images/via_seca.png',
        features: ['Ensayo al Fuego (Fire Assay)', 'Copelación', 'Análisis gravimétrico', 'Alta precisión en Au y Ag']
    },
    {
        id: 2,
        slug: 'area-instrumental',
        title: 'ÁREA INSTRUMENTAL',
        description: 'Análisis elemental avanzado utilizando Absorción Atómica e ICP-OES para determinar la composición geoquímica exacta de sus muestras con límites de detección ultra bajos.',
        icon: faMicroscope,
        image: '/images/area_instrumental.png',
        features: ['Espectroscopia de Absorción Atómica', 'ICP-OES', 'Análisis multielemental', 'Detección de trazas']
    },
    {
        id: 3,
        slug: 'via-humeda',
        title: 'ÁREA DE VIA HÚMEDA (VOLUMETRIA)',
        description: 'Métodos clásicos de química húmeda y volumetría para el análisis de concentrados y minerales de alta ley, asegurando resultados robustos y confiables.',
        icon: faVial,
        image: '/images/via_humeda.png',
        features: ['Volumetría redox', 'Gravimetría clásica', 'Análisis de concentrados', 'Determinación de Cu, Pb, Zn']
    },
    {
        id: 4,
        slug: 'pruebas-metalurgicas',
        title: 'PRUEBAS METALÚRGICAS',
        description: 'Desarrollamos pruebas metalúrgicas a nivel de laboratorio para optimizar procesos de recuperación y beneficio de minerales.',
        icon: faFlask,
        image: '/images/pruebas_metalurgicas.png',
        features: ['Pruebas de flotación', 'Lixiviación en botella/columna', 'Pruebas de moliendabilidad', 'Optimización de reactivos']
    },
    {
        id: 5,
        slug: 'servicio-especializado',
        title: 'SERVICIO ESPECIALIZADO',
        description: 'Consultoría técnica y servicios analíticos especializados adaptados a las necesidades específicas de su operación minera o proyecto de exploración.',
        icon: faCogs,
        image: '/images/area_instrumental.png', // Temporary placeholder
        features: ['Consultoría metalúrgica', 'Auditoría de laboratorios', 'Capacitación técnica', 'Diseño de protocolos']
    }
];

const ServicesList = () => {
    return (
        <div className="bg-white py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-16 md:space-y-32">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.slug}
                            className={`flex flex-col lg:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} scroll-mt-28`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-64 sm:h-80 lg:h-[28rem] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                                <div className="flex items-center space-x-3 md:space-x-4">
                                    <div className="p-2 md:p-3 bg-brand-primary rounded-lg text-white shadow-lg flex-shrink-0">
                                        <FontAwesomeIcon icon={service.icon} className="h-6 w-6 md:h-8 md:w-8" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                                </div>

                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="bg-gray-50 p-5 md:p-6 rounded-xl border-l-4 border-brand-primary">
                                    <h4 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">Características Clave:</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600 text-xs md:text-sm">
                                                <FontAwesomeIcon icon={faArrowRight} className="h-2.5 w-2.5 md:h-3 md:w-3 text-brand-accent mr-2 flex-shrink-0" />
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
        </div>
    );
};

export default ServicesList;
