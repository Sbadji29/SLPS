import React from 'react';

const DashboardHome = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl">Résumé d'activité</h1>
          <p className="text-gray-500 font-medium tracking-wide">Bienvenue sur votre tableau de bord opérationnel.</p>
        </div>
        <div className="flex gap-2">
           <div className="px-4 py-2 bg-white border border-gray-200 rounded text-xs font-bold text-slps-brown shadow-sm">
             25 FÉVRIER 2026
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Véhicules Actifs', value: '42', color: 'border-slps-green', bg: 'bg-slps-green/5' },
          { label: 'Entretiens en cours', value: '08', color: 'border-slps-brown', bg: 'bg-slps-brown/5' },
          { label: 'Alertes Stock', value: '03', color: 'border-slps-magenta', bg: 'bg-slps-magenta/5' },
          { label: 'Vignettes à Échéance', value: '12', color: 'border-gray-300', bg: 'bg-gray-50' },
        ].map((stat, i) => (
          <div key={i} className={`card p-6 border-l-4 ${stat.color} ${stat.bg}`}>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-4xl font-black text-slps-brown">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-8 h-80 flex flex-col items-center justify-center border-dashed border-2 text-gray-400">
           <p className="font-bold uppercase tracking-widest text-sm">Graphiques de coûts (Epic 2)</p>
           <p className="text-xs">Initialisation de l'Epic 1 en cours...</p>
        </div>
        <div className="card p-6 flex flex-col gap-4">
           <h3 className="text-lg mb-2">Alertes Récentes</h3>
           <div className="space-y-3">
             <div className="p-3 bg-red-50 rounded border border-red-100 flex justify-between items-center text-[10px] font-black uppercase">
                <span className="text-red-600">Freins Camion AB-123-CD</span>
                <span className="bg-red-600 text-white px-2 py-0.5 rounded">Urgent</span>
             </div>
             <div className="p-3 bg-orange-50 rounded border border-orange-100 flex justify-between items-center text-[10px] font-black uppercase">
                <span className="text-orange-600">Vidange Engin L-502</span>
                <span className="bg-orange-600 text-white px-2 py-0.5 rounded">Prévu</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
