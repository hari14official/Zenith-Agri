import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Sun, Droplet, Sprout, Leaf, BarChart2, ShieldCheck, Users, TrendingUp } from 'lucide-react';

const FarmerDashboard = () => {
  const navigate_to = (path) => window.location.href = path;
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar role="Farmer" />
      
      {/* Hero Banner with farm video */}
      <div className="relative w-full h-[50vh] bg-stone-900 overflow-hidden pointer-events-none">
        
        {/* using YouTube iframe for 100% guaranteed unblocked playback */}
        <iframe 
          className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 opacity-60 scale-125"
          src="https://www.youtube.com/embed/n41v_IqC_9c?autoplay=1&mute=1&loop=1&playlist=n41v_IqC_9c&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Agriculture Background"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="absolute inset-0 bg-gradient-to-r from-nature-900/90 via-nature-900/60 to-transparent flex items-center z-10 pointer-events-auto">
          <div className="px-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nature-500/30 border border-nature-400/40 text-nature-200 text-xs font-bold uppercase tracking-widest mb-4">
              <Sprout size={12} />
              <span>Zenith Agri Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Welcome to Your<br/>Smart Farm Dashboard
            </h1>
            <p className="text-nature-100 text-lg font-light mb-6">
              AI-powered insights for better yields, healthier crops, and smarter decisions — all in one place.
            </p>
            <button
              onClick={() => window.location.href = '/farmer/analysis'}
              className="bg-nature-500 hover:bg-nature-400 text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-3 transition-all shadow-lg shadow-nature-500/30"
            >
              <span>Start AI Analysis</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-12 mb-12 relative z-10">
          {[
            { label: 'Crops Analyzed', value: '1,240', icon: Leaf, color: 'bg-green-500', light: 'bg-green-50 text-green-700' },
            { label: 'Soil Reports', value: '380', icon: BarChart2, color: 'bg-blue-500', light: 'bg-blue-50 text-blue-700' },
            { label: 'Disease Alerts', value: '56', icon: ShieldCheck, color: 'bg-red-500', light: 'bg-red-50 text-red-700' },
            { label: 'Farmers Served', value: '8,500+', icon: Users, color: 'bg-amber-500', light: 'bg-amber-50 text-amber-700' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 border border-white/60 flex items-center gap-4">
                <div className={`${stat.light} p-3 rounded-xl`}>
                  <Icon size={24} />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-nature-900 mb-2">What Zenith Agri Offers You</h2>
          <p className="text-gray-500 mb-8 font-light">A complete suite of smart agricultural tools powered by AI and real-time data.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Land & Soil Analysis',
                desc: 'Upload a soil photo and pin your location to receive AI-generated soil composition reports, crop suitability scores, and fertilization protocols tailored to Tamil Nadu conditions.',
                img: '/images/agri_3.jpg',
                link: '/farmer/analysis',
              },
              {
                icon: ShieldCheck,
                title: 'Crop Disease Detection',
                desc: 'Our deep computer vision model analyzes your crop leaf images to identify fungal, bacterial, or pest-related diseases, and recommends the exact chemical or organic treatment path.',
                img: '/images/agri_8.jpg',
                link: '/farmer/analysis',
              },
              {
                icon: TrendingUp,
                title: 'Knowledge Hub',
                desc: 'Explore curated research articles by agronomy experts on variety testing, high-yield protocols, pest management, organic farming, and weather-synchronized cultivation strategies.',
                img: '/images/agri_10.jpg',
                link: '/farmer/hub',
              },
            ].map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  onClick={() => window.location.href = feat.link}
                  className="bg-white rounded-3xl shadow-lg border border-nature-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={feat.img} alt={feat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-nature-100 p-2 rounded-lg group-hover:bg-nature-500 transition-colors">
                        <Icon size={20} className="text-nature-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-extrabold text-gray-900">{feat.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                    <div className="mt-5 flex items-center gap-2 text-nature-600 font-bold text-sm group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recent Research */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-nature-900 mb-2 flex items-center gap-3">
            <span className="bg-nature-500 w-2 h-8 rounded-full"></span>
            Recently Published Agronomy Research
          </h2>
          <p className="text-gray-500 mb-8 font-light ml-5">Curated articles by field experts for Tamil Nadu agro-climatic conditions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div onClick={() => window.location.href = '/farmer/hub'} className="bg-white p-8 rounded-3xl shadow-lg border border-nature-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <div className="h-48 bg-nature-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <img src="/images/paddy.jpg" alt="Rice" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <h4 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-nature-600 transition-colors">Paddy Farming in Tamil Nadu</h4>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed font-light">Best practices for paddy cultivation emphasizing water management and pest control using modern techniques suited for Tamil Nadu's agro-climatic zones.</p>
              <div className="flex gap-4 text-sm font-semibold text-gray-600">
                <span className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full"><Droplet size={16} className="text-blue-500"/><span>High</span></span>
                <span className="flex items-center gap-1.5 bg-earth-50 px-3 py-1 rounded-full"><Sun size={16} className="text-earth-500"/><span>Tropical</span></span>
              </div>
            </div>

            <div onClick={() => window.location.href = '/farmer/hub'} className="bg-white p-8 rounded-3xl shadow-lg border border-nature-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <div className="h-48 bg-nature-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <img src="/images/tomato.jpg" alt="Tomatoes" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <h4 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-nature-600 transition-colors">High-Yield Tomatoes</h4>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed font-light">Implement drip irrigation and organic fertilizers synchronized with climate mapping to dramatically increase per-acre tomato yields.</p>
              <div className="flex gap-4 text-sm font-semibold text-gray-600">
                <span className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full"><Droplet size={16} className="text-blue-500"/><span>Moderate</span></span>
                <span className="flex items-center gap-1.5 bg-earth-50 px-3 py-1 rounded-full"><Sun size={16} className="text-earth-500"/><span>Warm</span></span>
              </div>
            </div>

            <div onClick={() => window.location.href = '/farmer/hub'} className="bg-white p-8 rounded-3xl shadow-lg border border-nature-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <div className="h-48 bg-nature-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <img src="/images/sugarcane.jpg" alt="Sugarcane" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <h4 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-nature-600 transition-colors">Sugarcane Yield Optimization</h4>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed font-light">Advanced ratoon management and integrated nutrient supply systems for achieving record sugarcane tonnage in South Indian conditions.</p>
              <div className="flex gap-4 text-sm font-semibold text-gray-600">
                <span className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full"><Droplet size={16} className="text-blue-500"/><span>High</span></span>
                <span className="flex items-center gap-1.5 bg-earth-50 px-3 py-1 rounded-full"><Sun size={16} className="text-earth-500"/><span>Sunny</span></span>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default FarmerDashboard;
