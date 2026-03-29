import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import FarmerDashboard from './pages/FarmerDashboard';
import LandAnalysis from './pages/LandAnalysis';
import KnowledgeHub from './pages/KnowledgeHub';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ExploreMore from './pages/ExploreMore';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-nature-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<ExploreMore />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/hub" element={<KnowledgeHub role="Admin" />} />
          
          {/* Farmer Routes */}
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/farmer/hub" element={<KnowledgeHub role="Farmer" />} />
          <Route path="/farmer/analysis" element={<LandAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
