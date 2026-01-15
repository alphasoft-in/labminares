import React from 'react';

const analyticsData = [
    { element: "Oro", symbol: "Au", method: "Ensayo al Fuego", reportTime: "1 Día" },
    { element: "Plata", symbol: "Ag", method: "Ensayo al Fuego", reportTime: "1 Día" },
    { element: "Oro y Plata", symbol: "Au y Ag", method: "Ensayo al Fuego", reportTime: "1 Día" },
    { element: "Cobre Total", symbol: "CuT", method: "Absorción Atómica", reportTime: "1 Día" },
    { element: "Cobre Soluble", symbol: "CuOx", method: "Absorción Atómica", reportTime: "1 Día" },
    { element: "Cobre Sulfuro", symbol: "CuS", method: "Absorción Atómica", reportTime: "1 Día" },
    { element: "Zinc", symbol: "Zn", method: "Absorción Atómica", reportTime: "1 Día" },
    { element: "Plomo", symbol: "Pb", method: "Absorción Atómica", reportTime: "1 Día" },
    { element: "Fierro", symbol: "Fe", method: "Absorción Atómica", reportTime: "1 Día" },
    { element: "Arsénico", symbol: "As", method: "Absorción Atómica", reportTime: "1 Día" },
    { element: "Antimonio", symbol: "Sb", method: "Absorción Atómica", reportTime: "1 Día" },
    { element: "% Humedad", symbol: "H2O", method: "Gravimetría", reportTime: "1 Día" },
    { element: "Solución", symbol: "Au", method: "Absorción Atómica", reportTime: "1 Día" },
    { element: "Carbón / Bullón", symbol: "Au - Ag", method: "Tríplicado", reportTime: "1 Día" },
    { element: "Barrido Elemental (ICP)", symbol: "31 Elementos", method: "ICP-OES", reportTime: "10 Días" },
];

const AnalyticalTable = () => {
    return (
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-brand-surface to-brand-primary py-4 px-4 sm:px-6">
                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">Capacidad Analítica</h3>
                <p className="text-white/70 text-[9px] sm:text-xs font-medium uppercase tracking-widest mt-0.5 leading-tight">Precisión técnica y tiempos de reporte</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-3 sm:px-5 py-3 text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Elemento</th>
                            <th className="px-3 sm:px-5 py-3 text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Sim.</th>
                            <th className="hidden xs:table-cell px-3 sm:px-5 py-3 text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Método</th>
                            <th className="px-3 sm:px-5 py-3 text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">Rep.</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {analyticsData.map((item, index) => (
                            <tr key={index} className="hover:bg-brand-primary/[0.02] transition-colors group">
                                <td className="px-3 sm:px-5 py-2.5">
                                    <span className="text-[10px] sm:text-xs font-bold text-gray-800 leading-tight block">{item.element}</span>
                                </td>
                                <td className="px-3 sm:px-5 py-2.5 text-center">
                                    <span className="inline-block px-1.5 py-0.5 rounded bg-gray-100 text-brand-primary text-[9px] sm:text-[10px] font-bold font-mono border border-gray-200 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all">
                                        {item.symbol}
                                    </span>
                                </td>
                                <td className="hidden xs:table-cell px-3 sm:px-5 py-2.5">
                                    <span className="text-[9px] sm:text-xs text-gray-500 italic opacity-80 leading-tight block">{item.method}</span>
                                </td>
                                <td className="px-3 sm:px-5 py-2.5 text-right">
                                    <span className="text-[10px] sm:text-xs font-bold text-brand-accent whitespace-nowrap">{item.reportTime}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-gray-50/80 p-3 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-2">
                    <span className="w-1 h-1 bg-brand-accent rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">
                        Servicios sujetos a términos y condiciones del laboratorio
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AnalyticalTable;

