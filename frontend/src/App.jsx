import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import GoalsPage from './pages/GoalsPage';
import SimulatorPage from './pages/SimulatorPage';
import EducationPage from './pages/EducationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Protected Routes (Should Wrap in Auth Middleware later) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/simulator" element={<SimulatorPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
