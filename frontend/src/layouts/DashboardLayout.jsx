import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Navigation/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar - Fixed width */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-72 min-h-screen flex flex-col transition-all duration-300">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
           <h2 className="text-sm font-black text-slps-brown uppercase tracking-widest">
             Gestion de Maintenance <span className="text-gray-400 mx-2">/</span> <span className="text-slps-green">Vue d'ensemble</span>
           </h2>
           <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold py-1 px-2 rounded bg-slps-green/10 text-slps-green uppercase">Serveur Connecté</span>
           </div>
        </header>

        <div className="flex-1 p-8">
          <Outlet />
        </div>
        
        <footer className="p-4 text-center text-[10px] text-gray-400 uppercase font-bold border-t border-gray-200 bg-white">
          &copy; {new Date().getFullYear()} SLPS Garage Management System - Tous droits réservés
        </footer>
      </main>
    </div>
  );
};

export default DashboardLayout;
