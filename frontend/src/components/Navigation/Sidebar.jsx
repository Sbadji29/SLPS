import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  Truck, 
  Wrench, 
  Package, 
  Fuel, 
  FileText, 
  BarChart3, 
  LogOut,
  User,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { name: 'Tableau de bord', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Véhicules', path: '/vehicles', icon: Truck },
    { name: 'Entretien', path: '/maintenance', icon: Wrench },
    { name: 'Pièces de rechange', path: '/inventory', icon: Package },
    { name: 'Carburant', path: '/fuel', icon: Fuel },
    { name: 'Documents', path: '/documents', icon: FileText },
    { name: 'Rapports', path: '/reports', icon: BarChart3 },
  ];

  return (
    <aside className="w-72 h-screen bg-slps-brown text-white flex flex-col shadow-2xl fixed left-0 top-0 z-50">
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10 flex items-center gap-3">
        <div className="bg-slps-green p-2 rounded shadow-inner">
          <Truck className="w-8 h-8 text-white" />
        </div>
        <div className="leading-none">
          <h2 className="text-xl font-black tracking-tighter">SLPS <span className="text-slps-green">GARAGE</span></h2>
          <span className="text-[10px] uppercase font-bold text-gray-400">Management v1.0</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-4 px-4 py-3 rounded-lg font-bold uppercase text-xs tracking-wider transition-all duration-200
              ${isActive 
                ? 'bg-slps-green text-white shadow-lg ring-1 ring-white/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'}
            `}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Info & Settings */}
      <div className="p-4 bg-black/20 border-t border-white/10">
        <div className="flex items-center gap-3 mb-4 p-2">
          <div className="w-10 h-10 rounded-full bg-slps-green flex items-center justify-center border-2 border-white/20">
            <User className="w-6 h-6" />
          </div>
          <div className="overflow-hidden">
            <p className="font-bold text-sm truncate">{user?.name || 'Utilisateur'}</p>
            <p className="text-[10px] text-gray-400 uppercase font-black">{user?.role?.replace('_', ' ')}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center p-2 rounded bg-white/5 hover:bg-white/10 transition-colors group">
            <Settings className="w-4 h-4 text-gray-400 group-hover:text-white" />
          </button>
          <button 
            onClick={handleLogout}
            className="flex items-center justify-center p-2 rounded bg-slps-magenta/20 hover:bg-slps-magenta/40 transition-colors group"
            title="Se déconnecter"
          >
            <LogOut className="w-4 h-4 text-slps-magenta group-hover:text-white" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
