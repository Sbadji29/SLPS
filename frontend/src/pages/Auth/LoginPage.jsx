import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Truck, Lock, User, AlertCircle } from 'lucide-react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await login({ username, password });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Identifiants invalides');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 bg-[url('https://images.unsplash.com/photo-1503691751547-ad08cc3ed380?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-no-repeat">
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-slps-brown/40 backdrop-blur-[2px]"></div>

      <div className="relative w-full max-w-md p-8 bg-white/95 backdrop-blur shadow-2xl rounded-xl border-t-8 border-slps-green">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-slps-green p-4 rounded-full shadow-lg mb-4">
            <Truck className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-black text-slps-brown tracking-tighter">
            SLPS <span className="text-slps-green">GARAGE</span>
          </h1>
          <p className="text-gray-500 font-medium">Gestion de Parc & Maintenance</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-slps-magenta flex items-center gap-3 text-slps-magenta animate-shake">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span className="text-sm font-bold uppercase">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase text-slps-brown tracking-widest" htmlFor="username">
              Identifiant
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-slps-green transition-colors">
                <User className="w-5 h-5" />
              </div>
              <input
                id="username"
                type="text"
                className="input-field pl-10 h-12"
                placeholder="Votre nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-black uppercase text-slps-brown tracking-widest" htmlFor="password">
              Mot de passe
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-slps-green transition-colors">
                <Lock className="w-5 h-5" />
              </div>
              <input
                id="password"
                type="password"
                className="input-field pl-10 h-12"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary h-14 flex items-center justify-center gap-2 text-lg"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
            ) : (
              'Se Connecter'
            )}
          </button>
        </form>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col items-center gap-2">
          <p className="text-xs text-gray-400 font-medium">Système de gestion interne sécurisé</p>
          <div className="flex gap-4">
             <div className="w-2 h-2 rounded-full bg-slps-green"></div>
             <div className="w-2 h-2 rounded-full bg-slps-brown"></div>
             <div className="w-2 h-2 rounded-full bg-slps-magenta"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
