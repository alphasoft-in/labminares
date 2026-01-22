import React from 'react';

const categories = [
    {
        id: 'copelas',
        title: 'Copelas de Magnesita y Ceniza de Hueso',
        description: 'Copelas de alta calidad para ensayos al fuego, garantizando una absorción óptima y resultados precisos en la determinación de metales preciosos.',
        image: '/images/products/copelas.png',
        features: ['Alta absorción', 'Resistencia térmica', 'Variedad de tamaños']
    },
    {
        id: 'crisoles',
        title: 'Crisoles de Arcilla y Grafito',
        description: 'Crisoles refractarios diseñados para soportar altas temperaturas y choques térmicos durante los procesos de fusión y copelación.',
        image: '/images/products/crisoles.png',
        features: ['Larga vida útil', 'Resistencia al choque térmico', 'Diferentes capacidades']
    },
    {
        id: 'fundentes',
        title: 'Fundentes y Reactivos (Fluxes)',
        description: 'Mezclas de fundentes formuladas específicamente para diferentes tipos de minerales, asegurando una fusión completa y una separación metálica eficiente.',
        image: '/images/products/fundentes.png',
        features: ['Litargirio', 'Bórax Anhidro', 'Carbonato de Sodio', 'Sílice']
    },
    {
        id: 'equipos',
        title: 'Equipos de Preparación de Muestras',
        description: 'Maquinaria robusta para la trituración, molienda y pulverización de muestras de mineral, esencial para un análisis representativo.',
        image: '/images/products/equipos.png',
        features: ['Chancadoras de quijada', 'Pulverizadores', 'Divisores de muestras']
    },
    {
        id: 'hornos',
        title: 'Hornos de Fusión y Copelación',
        description: 'Hornos industriales de alto rendimiento con control de temperatura preciso, ideales para laboratorios metalúrgicos de alta demanda.',
        image: '/images/products/hornos.png',
        features: ['Control digital', 'Aislamiento superior', 'Bajo consumo energético']
    },
    {
        id: 'epp',
        title: 'Seguridad y EPP Especializado',
        description: 'Equipos de protección personal diseñados para proteger al personal de laboratorio contra riesgos térmicos y químicos específicos.',
        image: '/images/products/epp.png',
        features: ['Guantes aluminizados', 'Mandiles de cuero', 'Respiradores']
    }
];

const ProductCategories = () => {
    return (
        <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category) => (
                    <div key={category.id} className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border border-gray-100 hover:border-brand-primary/20 group hover:-translate-y-1">
                        {/* Image Area */}
                        <div className="h-48 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                                {category.title}
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                {category.description}
                            </p>

                            <div className="border-t border-gray-100 pt-4">
                                <h4 className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">Características:</h4>
                                <ul className="space-y-1">
                                    {category.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-500">
                                            <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action for Catalog */}
            <div className="bg-brand-surface rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Necesita un insumo específico?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contamos con un amplio stock y capacidad de importación para reactivos y equipos especializados.
                        Contáctenos para una cotización personalizada.
                    </p>
                    <a href="/contactenos" className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                        Solicitar Cotización
                    </a>
                </div>
                {/* Decorative background circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-3xl -z-0"></div>
            </div>
        </div>
    );
};

export default ProductCategories;
