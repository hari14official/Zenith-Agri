import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Droplet, Leaf, BarChart2, ShieldCheck, Users, TrendingUp, Calendar, Zap, Bell } from 'lucide-react';

const FarmerDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9]">
      <Navbar role="Farmer" />
      
      {/* Immersive Command Center Hero */}
      <section className="relative w-full h-[65vh] bg-nature-950 overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/videos/agriculture.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-agriculture-field-water-fountain-irrigation-4113-large.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-tr from-nature-950 via-nature-900/60 to-transparent flex items-center z-10">
          <div className="px-12 md:px-24 max-w-5xl">
            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-2xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10 backdrop-blur-3xl shadow-2xl">
              <div className="w-2.5 h-2.5 bg-nature-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></div>
              <span>Command Center Active: Southern Zone</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
              Precision <br/><span className="text-nature-400">Intelligence.</span>
            </h1>
            
            <p className="text-nature-100/70 text-xl md:text-2xl font-light mb-12 max-w-2xl leading-relaxed">
              Synthesizing 128 dynamic soil data points with real-time satellite telemetry to maximize your seasonal output.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <button
                onClick={() => navigate('/farmer/analysis')}
                className="group bg-nature-500 hover:bg-white text-white hover:text-nature-900 px-12 py-5 rounded-[2.5rem] font-black text-lg flex items-center gap-4 transition-all duration-500 shadow-[0_25px_50px_-10px_rgba(34,197,94,0.4)] hover:-translate-y-2 uppercase tracking-widest"
              >
                Launch Lab Diagnostics
                <Zap size={22} className="group-hover:rotate-12 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/farmer/services')}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-3xl text-white border border-white/10 px-12 py-5 rounded-[2.5rem] font-black text-lg transition-all duration-500 hover:-translate-y-2 uppercase tracking-widest"
              >
                System Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 px-8 md:px-24 py-16 w-full -mt-20 relative z-20">
        
        {/* Core Metrics Engine */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Crops Analyzed', value: '1,240', icon: Leaf, color: 'bg-nature-500', trend: '+12% this month' },
            { label: 'Soil Health %', value: '94.2', icon: BarChart2, color: 'bg-blue-500', trend: 'Soil: Alluvial' },
            { label: 'Threat Response', value: 'Instant', icon: ShieldCheck, color: 'bg-emerald-500', trend: 'No active blights' },
            { label: 'Community Hub', value: '12.5k', icon: Users, color: 'bg-amber-500', trend: '+450 new experts' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] p-8 border border-white flex flex-col group hover:shadow-2xl transition-all duration-700">
                <div className={`${stat.color} w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-10 text-white shadow-xl group-hover:rotate-12 transition-transform`}>
                  <Icon size={28} />
                </div>
                <div>
                  <div className="text-4xl font-black text-gray-900 tracking-tighter mb-1">{stat.value}</div>
                  <div className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em] mb-4">{stat.label}</div>
                  <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-[10px] font-bold text-nature-600 uppercase tracking-widest">
                    <TrendingUp size={14} />
                    {stat.trend}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
           {/* Primary Operations */}
           <div className="lg:w-2/3 space-y-12">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-sm font-black text-nature-600 uppercase tracking-[0.4em] mb-4">Core Ecosystem</h2>
                  <h3 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">Operational <span className="text-nature-600">Modules</span></h3>
                </div>
                <button className="text-xs font-bold text-gray-400 hover:text-nature-600 uppercase tracking-widest transition-colors flex items-center gap-2 group">
                  View full stack <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { id: 'analysis', title: 'Land & Soil Labs', desc: 'Predictive modeling for NPK values and crop sequencing based on active location telemetry.', img: '/images/agri_3.jpg', link: '/farmer/analysis' },
                    { id: 'disease', title: 'AI Diagnostics', desc: 'Visual recognition engine for fungal, bacterial, and pest-related crop pathologies.', img: '/images/agri_8.jpg', link: '/farmer/analysis' }
                  ].map((feat) => (
                    <button
                      key={feat.id}
                      onClick={() => navigate(feat.link)}
                      className="bg-white rounded-[3rem] shadow-2xl p-4 border border-gray-100 hover:-translate-y-2 transition-all duration-700 group flex flex-col text-left overflow-hidden"
                    >
                      <div className="h-64 rounded-[2.5rem] overflow-hidden mb-8 relative">
                        <img src={feat.img} alt={feat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-nature-950/60 to-transparent flex items-end p-8">
                           <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-nature-900">Module Beta 2.0</span>
                        </div>
                      </div>
                      <div className="px-6 pb-6">
                        <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-4">{feat.title}</h4>
                        <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">{feat.desc}</p>
                        <div className="w-12 h-12 bg-nature-50 rounded-2xl flex items-center justify-center text-nature-600 group-hover:bg-nature-900 group-hover:text-white transition-all">
                           <ArrowRight size={20} />
                        </div>
                      </div>
                    </button>
                  ))}
              </div>
           </div>

           {/* Live Intelligence Feed */}
           <div className="lg:w-1/3">
              <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-10 flex flex-col h-full">
                 <div className="flex items-center justify-between mb-12">
                   <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter">Live Intel Feed</h3>
                   <div className="relative">
                      <Bell size={24} className="text-gray-300" />
                      <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                   </div>
                 </div>

                 <div className="space-y-10 flex-1">
                   {[
                     { user: 'Dr. Kannan', time: '12m ago', action: 'Verified new Paddy techniques for Thanjavur region.', icon: BookOpen },
                     { user: 'AI Engine', time: '2h ago', action: 'Detected high humidity anomaly in Cauvery delta.', icon: Droplet },
                     { user: 'Gov. Service', time: '5h ago', action: 'Released new subsidy for organic transplanters.', icon: Zap },
                     { user: 'Field Team', time: '1d ago', action: 'Completed 128-point soil audit in Coimbatore.', icon: BarChart2 }
                   ].map((item, i) => {
                     const Icon = item.icon;
                     return (
                     <div key={item.user + i} className="flex gap-6 items-start group">
                          <div className="w-12 h-12 rounded-2xl bg-nature-50 flex items-center justify-center group-hover:bg-nature-900 transition-all shadow-inner shrink-0 italic text-nature-900 group-hover:text-white">
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                               <span className="font-black text-xs text-gray-900 uppercase tracking-tight">{item.user}</span>
                               <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{item.time}</span>
                            </div>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">{item.action}</p>
                          </div>
                       </div>
                     );
                   })}
                 </div>

                 <button onClick={() => navigate('/farmer/hub')} className="mt-12 w-full py-5 bg-nature-950 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-nature-600 transition-all shadow-xl">
                   Access Knowledge Hub
                 </button>
              </div>
           </div>
        </div>

        {/* Global Strategy Section */}
        <section className="mt-32 p-20 bg-nature-950 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-20 overflow-hidden relative group">
           <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-[3s]">
              <img src="/images/hero2.jpg" alt="Background Texture" className="w-full h-full object-cover" />
           </div>
           
           <div className="relative z-10 md:w-1/2">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/10 border border-white/20 text-nature-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10 backdrop-blur-3xl">
                <Calendar size={14} />
                <span>Season Forecast 2026/27</span>
              </div>
              <h3 className="text-5xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">Maximize <br/> <span className="text-nature-400">Biological</span> Yield.</h3>
              <p className="text-xl text-nature-100/60 font-light mb-12 leading-relaxed">
                 Our proprietary Breeding Engine allows you to simulate crop performance against historical weather patterns reaching back 45 years. Start your simulation today.
              </p>
              <button onClick={() => navigate('/about')} className="bg-white text-nature-950 px-12 py-5 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-nature-500 hover:text-white transition-all">
                The Science of Growth
              </button>
           </div>

           <div className="md:w-1/2 grid grid-cols-2 gap-6 relative z-10">
              {[
                { l: 'Profitability', v: '+28%' },
                { l: 'Resource Savings', v: '45%' },
                { l: 'Carbon Credits', v: '12.2' },
                { l: 'Global Index', v: '#1' }
              ].map((m, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-center text-center">
                   <div className="text-4xl font-black text-white mb-2">{m.v}</div>
                   <div className="text-[10px] text-nature-400 font-bold uppercase tracking-widest">{m.l}</div>
                </div>
              ))}
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FarmerDashboard;
