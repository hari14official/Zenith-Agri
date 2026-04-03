import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, Activity, Leaf, ShieldCheck, BarChart4, ChevronRight, Star, Droplets, Sun, Globe } from 'lucide-react';
import Footer from '../components/Footer';
import AgribusinessInfo from '../components/AgribusinessInfo';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop",
      title: "Empowering Rural Tradition",
      desc: "Zenith Agri honors the legacy of traditional farming while bringing modern AI-driven insights to every furrow plowed."
    },
    {
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2670&auto=format&fit=crop",
      title: "Precision Input Management",
      desc: "Optimize your sowing and fertilization with real-time soil health analytics and weather-synchronized protocols."
    },
    {
      img: "https://images.unsplash.com/photo-1560493676-04071c5f4cf2?q=80&w=2574&auto=format&fit=crop",
      title: "Success Through Intelligence",
      desc: "Harness the power of machine learning to identify crop diseases early and ensure a bountiful, healthy harvest."
    },
    {
      img: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=2664&auto=format&fit=crop",
      title: "Community-Driven Agronomy",
      desc: "Collaborate with experts and fellow farmers to share variety testing results and scale sustainable agricultural practices."
    },
    {
      img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2671&auto=format&fit=crop",
      title: "Future-Proof Your Farmland",
      desc: "From lush deltas to arid plains, our platform provides the intelligence needed to thrive in any agro-climatic condition."
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-white border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-nature-500 p-2 rounded-lg backdrop-blur-sm bg-opacity-80">
            <Sprout size={28} className="text-white" />
          </div>
          <span className="text-2xl font-bold tracking-widest uppercase">Zenith Agri</span>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => navigate('/login')} className="font-medium hover:text-nature-300 transition-colors text-sm uppercase tracking-wider">Login</button>
          <button onClick={() => navigate('/signup')} className="bg-nature-500 hover:bg-nature-400 text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-nature-500/50">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[90vh] overflow-hidden bg-stone-900">
        {/* Background Image Slider & Overlay */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.img}
              alt={`Agriculture Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 px-6 md:px-12 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nature-500/20 border border-nature-400/30 text-nature-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Activity size={14} />
              <span>Farm Field Management Software</span>
            </div>
            
            <div className="relative h-[280px] md:h-[350px]">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                  }`}
                >
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    {slide.title.includes(" ") ? (
                      <>
                        {slide.title.split(' ').slice(0, 2).join(' ')} <br/> {slide.title.split(' ').slice(2).join(' ')}
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 leading-relaxed max-w-2xl">
                    {slide.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={() => navigate('/login')}
                className="bg-nature-500 hover:bg-nature-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-nature-500/50 flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => navigate('/explore')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
              >
                Explore More
              </button>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex gap-3 mt-12">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-12 bg-nature-500' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-nature-900 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Star, label: 'Farms Managed', value: '12,500+' },
            { icon: Droplets, label: 'Water Saved', value: '40%' },
            { icon: Sun, label: 'Yield Increase', value: '2.8x' },
            { icon: Globe, label: 'Districts Covered', value: '32' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center">
                <Icon size={28} className="text-nature-400 mx-auto mb-2" />
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-nature-300 text-sm font-medium mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modules Section */}
      <section className="py-24 bg-nature-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Empowering the Seed Industry</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">From initial genetic research to full-scale commercial cultivation, our AI-powered modules provide complete visibility.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-nature-100 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="bg-nature-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-nature-500 transition-colors">
                <Leaf className="text-nature-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Variety Testing</h3>
              <p className="text-gray-600 leading-relaxed">Systematically evaluate multiple crop varieties across different geographies directly connected to live real-time weather stations.</p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-nature-100 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <BarChart4 className="text-blue-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Agronomy Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Deep visual crop health analysis using machine learning. Instantly identify diseases and recommend specific chemical treatments.</p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-nature-100 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="bg-earth-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-earth-500 transition-colors">
                <ShieldCheck className="text-earth-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plant Breeding</h3>
              <p className="text-gray-600 leading-relaxed">Manage complex pedigrees, phenotypes, and generations securely. Map DNA traits efficiently without traditional paper logs.</p>
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
