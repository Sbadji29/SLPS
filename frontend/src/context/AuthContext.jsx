import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock roles: 'admin', 'chef_garage', 'chauffeur', 'comptable'
  
  useEffect(() => {
    // Check for stored session here if needed
    const storedUser = localStorage.getItem('slps_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    // Mock login logic
    setLoading(true);
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let mockUser = null;
        
        // Simple logic for demo/mocking
        if (credentials.username === 'admin' && credentials.password === 'admin') {
          mockUser = { id: 1, username: 'admin', role: 'admin', name: 'Administrateur' };
        } else if (credentials.username === 'chef' && credentials.password === 'garage') {
          mockUser = { id: 2, username: 'chef', role: 'chef_garage', name: 'Chef Garage' };
        } else if (credentials.username === 'chauffeur' && credentials.password === 'moto') {
          mockUser = { id: 3, username: 'chauffeur', role: 'chauffeur', name: 'Chauffeur SLPS' };
        }

        if (mockUser) {
          setUser(mockUser);
          localStorage.setItem('slps_user', JSON.stringify(mockUser));
          setLoading(false);
          resolve(mockUser);
        } else {
          setLoading(false);
          reject(new Error('Identifiants incorrects'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('slps_user');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAdmin: user?.role === 'admin',
    isChefGarage: user?.role === 'chef_garage',
    isChauffeur: user?.role === 'chauffeur',
    isComptable: user?.role === 'comptable',
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
