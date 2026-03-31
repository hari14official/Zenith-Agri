import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import FarmerDashboard from './pages/FarmerDashboard';
import LandAnalysis from './pages/LandAnalysis';
import KnowledgeHub from './pages/KnowledgeHub';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ExploreMore from './pages/ExploreMore';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-nature-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<ExploreMore />} />
          <Route path="/services" element={<Services role="Farmer" />} />
          <Route path="/about" element={<About role="Farmer" />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/hub" element={<KnowledgeHub role="Admin" />} />
          <Route path="/admin/about" element={<About role="Admin" />} />
          <Route path="/admin/services" element={<Services role="Admin" />} />
          
          {/* Farmer Routes */}
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/farmer/hub" element={<KnowledgeHub role="Farmer" />} />
          <Route path="/farmer/analysis" element={<LandAnalysis />} />
          <Route path="/farmer/about" element={<About role="Farmer" />} />
          <Route path="/farmer/services" element={<Services role="Farmer" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
