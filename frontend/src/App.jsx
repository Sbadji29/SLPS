import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/Auth/LoginPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/Dashboard/DashboardHome';
import ProtectedRoute from './components/Navigation/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/vehicles" element={<div className="p-8"><h1 className="text-3xl">Module Véhicules (Epic 3)</h1></div>} />
            <Route path="/maintenance" element={<div className="p-8"><h1 className="text-3xl">Module Entretien (Epic 4)</h1></div>} />
            <Route path="/inventory" element={<div className="p-8"><h1 className="text-3xl">Module Pièces (Epic 5)</h1></div>} />
            <Route path="/fuel" element={<div className="p-8"><h1 className="text-3xl">Module Carburant (Epic 6)</h1></div>} />
            <Route path="/documents" element={<div className="p-8"><h1 className="text-3xl">Module Documents (Epic 7)</h1></div>} />
            <Route path="/reports" element={<div className="p-8"><h1 className="text-3xl">Module Rapports (Epic 8)</h1></div>} />
          </Route>

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/unauthorized" element={<div className="h-screen flex items-center justify-center font-bold uppercase text-slps-magenta">Accès Non Autorisé</div>} />
          <Route path="*" element={<div className="h-screen flex items-center justify-center font-bold uppercase text-gray-400 tracking-widest">404 - Page non trouvée</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
