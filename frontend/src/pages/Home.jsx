import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, Activity, Leaf, ShieldCheck, BarChart4, ChevronRight, Star, Droplets, Sun, Globe, Search, Landmark, BookOpen } from 'lucide-react';
import Footer from '../components/Footer';
import AgribusinessInfo from '../components/AgribusinessInfo';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white selection:bg-nature-500 selection:text-white">
      {/* Premium Navbar */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-5 md:px-16 flex justify-between items-center transition-all duration-500 bg-nature-950/40 backdrop-blur-xl border-b border-white/10">
        <button className="flex items-center gap-4 group text-left" onClick={() => navigate('/')}>
          <div className="bg-nature-500 p-2.5 rounded-2xl group-hover:rotate-12 transition-transform duration-500 shadow-xl shadow-nature-500/20">
            <Sprout size={30} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter leading-none text-white uppercase italic">ZENITH AGRI</span>
            <span className="text-[10px] text-nature-400 font-bold tracking-[0.3em] uppercase mt-1">Global Ecosystem</span>
          </div>
        </button>
        
        <div className="hidden lg:flex items-center gap-10">
           {['About', 'Services', 'Ecosystem', 'Research'].map((item) => (
             <button 
               key={item} 
               onClick={() => navigate(`/${item.toLowerCase()}`)} 
               className="text-xs font-black uppercase tracking-[0.2em] text-nature-100 hover:text-nature-400 transition-colors relative group py-2"
             >
               {item}
               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nature-500 transition-all duration-300 group-hover:w-full"></span>
             </button>
           ))}
        </div>

        <div className="flex items-center gap-8">
          <button onClick={() => navigate('/login')} className="font-black text-white hover:text-nature-400 transition-colors text-xs uppercase tracking-[0.2em]">Login</button>
          <button onClick={() => navigate('/signup')} className="bg-nature-500 text-white px-10 py-3.5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-nature-900 transition-all shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:-translate-y-1 active:scale-95">Enroll Now</button>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nature-950">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0 scale-110">
          {slides.map((slide, index) => (
            <img
              key={slide}
              src={slide}
              alt={`Agriculture Landscape ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-out ${
                index === currentSlide ? "opacity-40 scale-100 blur-0" : "opacity-0 scale-110 blur-xl"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-nature-950/80 via-transparent to-nature-950/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 text-nature-300 text-[10px] font-black uppercase tracking-[0.3em] mb-10 mx-auto shadow-2xl animate-bounce">
            <Activity size={14} className="text-nature-500" />
            <span>Next-Gen AgTech Intelligence</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase italic">
            Harvesting <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature-400 via-nature-200 to-nature-500">The Future.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-nature-100/70 font-light mb-16 leading-relaxed max-w-4xl mx-auto tracking-tight">
            Zenith Agri is a multi-dimensional platform bridging the gap between ancestral wisdom and AI-driven precision to secure global food systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button 
              onClick={() => navigate('/signup')}
              className="group bg-nature-500 hover:bg-white text-white hover:text-nature-900 w-full sm:w-auto px-16 py-6 rounded-[2rem] font-black text-xl transition-all duration-500 shadow-[0_25px_60px_rgba(34,197,94,0.4)] hover:-translate-y-2 flex items-center justify-center gap-4 uppercase tracking-widest"
            >
              Start Your Cycle
              <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-3xl text-white border border-white/10 w-full sm:w-auto px-16 py-6 rounded-[2rem] font-black text-xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center gap-4 uppercase tracking-widest"
            >
              The Vision
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
           <div className="w-px h-20 bg-gradient-to-b from-white/0 via-white to-white/0"></div>
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white rotate-90 origin-left mt-8">Explore</span>
        </div>
      </section>

      {/* Trust Markers Bar */}
      <div className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-16">
          {[
            { icon: Star, label: 'Active Breeders', value: '4,500+' },
            { icon: Droplets, label: 'Water Usage Δ', value: '-35%' },
            { icon: Sun, label: 'Yield Multiplier', value: '2.8x' },
            { icon: Globe, label: 'Countries Impacted', value: '12' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="group text-center">
                <div className="w-16 h-16 bg-nature-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-nature-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={32} className="text-nature-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-gray-400 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services Portfolio — The Zenith Pillars */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-nature-600 uppercase tracking-[0.4em] mb-6 block">Zenith Ecosystem</h2>
              <h3 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase italic leading-none">Unified <span className="text-nature-600">Agricultural</span> Intelligence.</h3>
            </div>
            <p className="text-xl text-gray-500 font-light max-w-md leading-relaxed pb-2">
              From genetic sequencing to global market logistics, we've digitized every point of the agricultural value chain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: 'Land Analysis', desc: 'Predictive soil modeling & GPS-bound crop suggestions based on active climate telemetry.', path: '/services', color: 'nature' },
              { icon: ShieldCheck, title: 'Diagnostics', desc: 'Enterprise-grade AI vision identifying leaf pathogens with 98.4% diagnostic accuracy.', path: '/services', color: 'blue' },
              { icon: Landmark, title: 'Compliance', desc: 'Real-time mapping of state subsidies, insurance claims and G.A.P certification logs.', path: '/services', color: 'amber' },
              { icon: BookOpen, title: 'Expert Hub', desc: 'Academic-grade cultivation manuals sourced directly from global agronomy institutes.', path: '/knowledge-hub', color: 'nature' }
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 hover:-translate-y-4 transition-all duration-700 group flex flex-col items-center text-center">
                  <div className={`w-20 h-20 bg-${service.color}-50 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-nature-900 transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]`}>
                    <Icon className="text-nature-600 group-hover:text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tighter">{service.title}</h3>
                  <p className="text-gray-500 font-light leading-[1.8] mb-10 flex-1">{service.desc}</p>
                  <button onClick={() => navigate(service.path)} className="w-14 h-14 bg-nature-50 rounded-2xl flex items-center justify-center text-nature-600 hover:bg-nature-900 hover:text-white transition-all shadow-inner">
                    <ChevronRight size={28} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hero Service Detail — Full Width Immersive */}
      <section className="py-32 bg-white selection:bg-nature-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative group">
               <div className="absolute -top-10 -left-10 w-64 h-64 bg-nature-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-[2s]"></div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
               <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-15px_rgba(0,0,0,0.15)] group-hover:rotate-1 transition-transform duration-700">
                  <img src="/images/agri_1.jpg" alt="Smart Farming Interface" className="w-full object-cover aspect-[4/5] scale-100 group-hover:scale-110 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-900/40 to-transparent"></div>
               </div>
            </div>
            <div className="lg:w-1/2">
               <span className="text-sm font-black text-nature-500 uppercase tracking-[0.5em] mb-8 block">Precision Agriculture</span>
               <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-10 leading-[0.9] tracking-tighter uppercase italic">The New <br/> <span className="text-nature-600">Green</span> Standard.</h2>
               <p className="text-2xl text-gray-400 mb-12 font-light leading-relaxed max-w-xl">
                 We've replaced guesswork with GPS-grade precision. Our platform monitors 128 data points per square meter to provide the most granular soil insights on the planet.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                 {[
                   { t: '98% Accuracy', d: 'Soil nutrient mapping' },
                   { t: 'Live Sync', d: 'Satellite weather data' },
                   { t: 'Instant Hub', d: '2k+ research papers' },
                   { t: 'Direct Pay', d: 'Subsidy transactions' }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col border-l-2 border-nature-100 pl-6 space-y-1">
                     <span className="text-2xl font-black text-gray-900 tracking-tighter">{item.t}</span>
                     <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{item.d}</span>
                   </div>
                 ))}
               </div>
               <button onClick={() => navigate('/services')} className="group bg-nature-900 text-white px-16 py-6 rounded-[2rem] font-black text-xl hover:bg-nature-500 transition-all shadow-2xl flex items-center gap-4 uppercase tracking-widest">
                 See All Capabilities
                 <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — 3D Parallax Style */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-white py-32 px-6">
        <div className="max-w-7xl w-full h-full bg-nature-900 rounded-[5rem] overflow-hidden relative shadow-[0_100px_80px_rgba(0,0,0,0.07)] flex items-center justify-center group">
          <img src="/images/hero3.jpg" alt="Final CTA" className="absolute inset-0 w-full h-full object-cover brightness-[0.2] transition-transform duration-[5s] group-hover:scale-105" />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h2 className="text-3xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase italic leading-none">Join the <span className="text-nature-400">Biological</span> <br/> Revolution.</h2>
            <p className="text-2xl text-nature-100/60 font-light mb-16 max-w-2xl mx-auto leading-relaxed">Modernize your legacy. Scale your returns. Secure your soil for the next seven generations.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <button 
                 onClick={() => navigate('/signup')} 
                 className="px-16 py-6 bg-nature-500 text-white font-black rounded-[2.5rem] text-xl transition-all duration-500 shadow-[0_30px_60px_rgba(34,197,94,0.4)] hover:-translate-y-2 uppercase tracking-widest"
               >
                 Go Digital Now
               </button>
            </div>
          </div>
        </div>
      </section>

      <AgribusinessInfo />

      <Footer />
    </div>
  );
};

export default Home;
