import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Devices from './pages/Devices';
import Users from './pages/Users';
import Settings from './pages/Settings';

function App() {
  // Mock authentication - will be replaced with real auth using Kuzzle
  // const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const isAuthenticated = true;
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/devices" 
          element={isAuthenticated ? <Devices /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/users" 
          element={isAuthenticated ? <Users /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/settings" 
          element={isAuthenticated ? <Settings /> : <Navigate to="/login" />} 
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
