import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, FileText, Activity, Plus } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 flex items-center gap-6 hover:-translate-y-1 transition-transform cursor-default">
    <div className={`p-5 rounded-2xl ${color} shadow-lg`}>
      <Icon size={32} className="text-white" />
    </div>
    <div>
      <p className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-1">{title}</p>
      <h3 className="text-4xl font-extrabold text-nature-900">{value}</h3>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-nature-50">
      <Navbar role="Admin" />
      
      {/* Informational / Training Video */}
      <div className="w-full h-[60vh] bg-stone-900 relative shadow-2xl z-0">
        <iframe 
          className="w-full h-full object-cover" 
          src="https://www.youtube.com/embed/zMPEy1x1iZ0?controls=1" 
          title="Smart Farming Overview" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>

      <main className="flex-1 p-8 max-w-7xl mx-auto w-full -mt-16 relative z-10">
        <header className="flex justify-between items-center mb-12 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60">
          <div>
            <h1 className="text-4xl font-extrabold text-nature-900 tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2 text-lg font-light">Manage platform research, field modules, and backend agronomic analytics.</p>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-nature-600 hover:bg-nature-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_-5px_var(--tw-shadow-color)] shadow-nature-600/50 hover:-translate-y-1"
          >
            <Plus size={22} />
            Publish Article
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Total Articles" value="142" icon={FileText} color="bg-nature-500" />
          <StatCard title="Active Farmers" value="850" icon={Users} color="bg-earth-500" />
          <StatCard title="Platform Activity" value="+24% Today" icon={Activity} color="bg-blue-500" />
        </div>

        {showForm && (
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white p-10 mb-12 transition-all duration-300 transform animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-nature-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
            <h2 className="text-3xl font-extrabold text-nature-900 mb-8 border-b border-gray-100 pb-6 relative z-10">Create New Research Article</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Crop Name</label>
                <input type="text" className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-nature-500 focus:border-nature-500 outline-none" placeholder="e.g., Wheat" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Ideal Climate/Season</label>
                <input type="text" className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-nature-500 focus:border-nature-500 outline-none" placeholder="e.g., Temperate / Winter" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Ideal Soil Type</label>
                <input type="text" className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-nature-500 focus:border-nature-500 outline-none" placeholder="e.g., Loamy" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Required Moisture Level</label>
                <select className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-nature-500 focus:border-nature-500 outline-none bg-white">
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
              <div className="col-span-1 md:col-span-2 space-y-1">
                <label className="text-sm font-medium text-gray-700">Recommended Fertilizers</label>
                <input type="text" className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-nature-500 focus:border-nature-500 outline-none" placeholder="e.g., NPK 10-20-10" />
              </div>
              <div className="col-span-1 md:col-span-2 space-y-1">
                <label className="text-sm font-medium text-gray-700">Step-by-Step Cultivation Process</label>
                <textarea rows="4" className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-nature-500 focus:border-nature-500 outline-none" placeholder="Describe the process..."></textarea>
              </div>
              <div className="col-span-1 md:col-span-2 flex justify-end">
                <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 rounded-xl font-medium text-gray-500 hover:text-gray-700 mr-2 transition">Cancel</button>
                <button type="submit" className="bg-nature-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-nature-700 transition">Save Article</button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-nature-100 p-8 mb-10">
           <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Publications</h2>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="text-gray-500 text-sm border-b border-gray-100">
                   <th className="pb-3 font-medium">Crop</th>
                   <th className="pb-3 font-medium">Soil Type</th>
                   <th className="pb-3 font-medium">Season</th>
                   <th className="pb-3 font-medium">Date Published</th>
                 </tr>
               </thead>
               <tbody className="text-sm">
                 <tr className="border-b border-gray-50 hover:bg-nature-50 cursor-pointer transition-colors">
                   <td className="py-4 font-medium text-gray-900">Sweet Corn</td>
                   <td className="py-4 text-gray-600">Well-drained</td>
                   <td className="py-4 text-gray-600">Summer</td>
                   <td className="py-4 text-gray-500">Oct 12, 2026</td>
                 </tr>
                 <tr className="border-b border-gray-50 hover:bg-nature-50 cursor-pointer transition-colors">
                   <td className="py-4 font-medium text-gray-900">Tomatoes</td>
                   <td className="py-4 text-gray-600">Loamy</td>
                   <td className="py-4 text-gray-600">Spring</td>
                   <td className="py-4 text-gray-500">Oct 10, 2026</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
