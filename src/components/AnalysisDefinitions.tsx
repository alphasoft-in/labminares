import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faHandshake, faGem, faFlask, faVial, faInfoCircle, faVials } from '@fortawesome/free-solid-svg-icons';

const analysisTypes = [
    {
        icon: faTag,
        title: "Reconocimiento (R)",
        tag: "Ley Referencial",
        description: "Evaluación preliminar para determinar la presencia y rango aproximado de valores metálicos.",
        focus: "¿Cuánto tiene de ley?"
    },
    {
        icon: faHandshake,
        title: "Análisis por Lote (L)",
        tag: "Ley para Venta",
        description: "Certificación de leyes con alta precisión, requerida para transacciones comerciales y valorización de concentrados.",
        focus: "Transacciones comerciales."
    },
    {
        icon: faGem,
        title: "Análisis Newmont (N)",
        tag: "Oro Grueso/Fino",
        description: "Protocolo especial para muestras con oro libre, asegurando la recuperación y pesaje de partículas gruesas.",
        focus: "Muestras con 'Charpa'."
    },
    {
        icon: faVials,
        title: "Análisis Triplicado (T)",
        tag: "Alta Precisión",
        description: "Control riguroso mediante triple ensayo para garantizar la máxima exactitud en muestras críticas como carbón o bullón.",
        focus: "Control de calidad y muestras críticas."
    }
];

const AnalysisDefinitions = () => {
    return (
        <div className="space-y-10">
            {/* Header for Definitions */}
            <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Protocolos y Servicios</h3>
                <div className="w-12 h-1 bg-brand-primary mb-6"></div>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Nuestros servicios están diseñados para cubrir cada etapa de la actividad minera,
                    desde la exploración hasta la comercialización final del concentrado.
                </p>
            </div>

            {/* Content Container with Unified Vertical Rhythm */}
            <div className="space-y-4">
                {/* Analysis Grid */}
                <div className="grid grid-cols-1 gap-4">
                    {analysisTypes.map((type, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="p-3 bg-brand-surface/[0.03] text-brand-primary rounded-lg group-hover:bg-brand-primary group-hover:text-white transition-colors flex-shrink-0">
                                <FontAwesomeIcon icon={type.icon} className="h-5 w-5" />
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex flex-col xs:flex-row xs:items-center justify-between mb-2 gap-2">
                                    <h4 className="font-bold text-gray-900 text-base leading-tight">{type.title}</h4>
                                    <span className="inline-block self-start xs:self-center text-[10px] font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/5 px-2 py-0.5 rounded border border-brand-accent/10 whitespace-nowrap">
                                        {type.tag}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-xs leading-relaxed mb-3">
                                    {type.description}
                                </p>
                                <div className="flex items-center text-[10px] font-bold text-brand-secondary uppercase tracking-tight">
                                    <FontAwesomeIcon icon={faInfoCircle} className="mr-1.5 opacity-50" />
                                    Enfoque: {type.focus}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Metallurgical Tests - Premium Sidebar Card (Refined Typography) */}
                <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden group border border-white/5">
                    <div className="relative z-10">
                        {/* Header with Cleaner Typography */}
                        <div className="flex items-center space-x-4 mb-7">
                            <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent/80 rounded-2xl flex items-center justify-center shadow-xl shadow-brand-accent/30 group-hover:shadow-brand-accent/50 group-hover:-translate-y-1 transition-all duration-500">
                                <FontAwesomeIcon icon={faFlask} className="text-white text-lg drop-shadow-[0_0_8px_rgba(255,225,123,0.5)]" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold uppercase tracking-tight leading-none mb-1 text-white">Pruebas Metalúrgicas</h4>
                                <div className="flex items-center space-x-2">
                                    <div className="h-[1px] w-4 bg-brand-accent/50"></div>
                                    <p className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Laboratorio Especializado</p>
                                </div>
                            </div>
                        </div>

                        {/* Sub-items with refined typography */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/[0.03] backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-brand-accent/40 hover:bg-white/[0.05] hover:scale-[1.02] transition-all duration-500 group/item">
                                <h5 className="font-bold text-[13px] text-brand-accent mb-2 uppercase tracking-tight leading-tight group-hover/item:translate-x-1 transition-transform">Cianuración Dinámica</h5>
                                <p className="text-[10px] text-white/70 leading-relaxed mb-4">
                                    Cinética de extracción de oro por agitación.
                                </p>
                                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest border-t border-white/5 pt-3">
                                    <span className="text-white/40">Reporte:</span>
                                    <span className="text-brand-accent brightness-110">2-3 Días</span>
                                </div>
                            </div>
                            <div className="bg-white/[0.03] backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-brand-accent/40 hover:bg-white/[0.05] hover:scale-[1.02] transition-all duration-500 group/item">
                                <h5 className="font-bold text-[13px] text-brand-accent mb-2 uppercase tracking-tight leading-tight group-hover/item:translate-x-1 transition-transform">Pruebas de Flotación</h5>
                                <p className="text-[10px] text-white/70 leading-relaxed mb-4">
                                    Recuperación de sulfuros de Cu, Pb y Zn.
                                </p>
                                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest border-t border-white/5 pt-3">
                                    <span className="text-white/40">Reporte:</span>
                                    <span className="text-brand-accent brightness-110">4 Días</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Refined Premium Decorations */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary opacity-[0.08] -mr-24 -mt-24 rounded-full blur-[100px] group-hover:opacity-[0.12] transition-opacity duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent opacity-[0.06] -ml-24 -mb-24 rounded-full blur-[80px] group-hover:opacity-[0.1] transition-opacity duration-700"></div>
                </div>
            </div>
        </div>
    );
};


export default AnalysisDefinitions;
