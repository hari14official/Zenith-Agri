import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Sprout, Search, ShieldCheck, BookOpen, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';

const Services = ({ role }) => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'land-analysis',
      title: 'Land Analysis & Crop Suggestion',
      description: 'Our advanced AI analyzes your soil composition, moisture levels, and climatic data to recommend the most suitable crops for maximum yield.',
      icon: Search,
      color: 'bg-blue-500',
      image: '/images/agri_3.jpg',
      features: [
        'Soil nutrient profiling',
        'pH level assessment',
        'Localized crop matching',
        'Ideal sowing time prediction'
      ]
    },
    {
      id: 'crop-disease',
      title: 'Crop Analysis & Disease Detection',
      description: 'Instantly identify crop diseases and pests using your smartphone camera. Get immediate organic and chemical solution recommendations.',
      icon: ShieldCheck,
      color: 'bg-green-500',
      image: '/images/agri_8.jpg',
      features: [
        'Real-time leaf analysis',
        'Pest identification',
        'Remedy recommendations',
        'Growth stage tracking'
      ]
    },
    {
      id: 'gov-schemes',
      title: 'Government Schemes & Subsidies',
      description: 'Stay updated with the latest agricultural schemes, subsidies, and insurance policies provided by the government tailored to your region.',
      icon: Landmark,
      color: 'bg-amber-500',
      image: '/images/agri_1.jpg',
      features: [
        'Scheme eligibility checker',
        'Application guidance',
        'Direct subsidy links',
        'Insurance claim assistance'
      ]
    },
    {
      id: 'knowledge-hub',
      title: 'Farmers Knowledge Hub',
      description: 'Access a vast library of research articles, modern farming techniques, and expert advice to stay ahead in the agricultural game.',
      icon: BookOpen,
      color: 'bg-nature-500',
      image: '/images/agri_10.jpg',
      features: [
        'Expert farming articles',
        'Market price trends',
        'Weather-based farming tips',
        'Community forums'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar role={role} />
      
      {/* Hero Section */}
      <div className="bg-nature-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="/images/hero1.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-nature-100 max-w-2xl font-light">
            Empowering farmers with cutting-edge technology and data-driven insights to revolutionize traditional agriculture.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-16 w-full text-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group transition-all duration-500 hover:shadow-2xl">
              <div className="h-64 relative overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className={`${service.color} p-4 rounded-2xl shadow-lg`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-4 group-hover:text-nature-600 transition-colors uppercase tracking-tight">{service.title}</h2>
                <p className="text-gray-500 mb-8 leading-relaxed font-light">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-nature-500 shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <button 
                    onClick={() => navigate(service.id === 'knowledge-hub' ? `/${role.toLowerCase()}/hub` : `/${role.toLowerCase()}/analysis`)}
                    className="flex items-center gap-2 text-nature-600 font-bold group-hover:gap-4 transition-all"
                  >
                    <span>Activate Service</span>
                    <ArrowRight size={18} />
                  </button>
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Premium System</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-24 p-12 bg-white rounded-[3rem] shadow-2xl border border-gray-50 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-nature-50 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl"></div>
          
          <div className="w-full md:w-1/2 relative z-10">
            <h2 className="text-3xl font-extrabold mb-6 leading-tight">Why Choose Our Smart Platform?</h2>
            <div className="space-y-6">
              {[
                { title: 'Local Expert Integration', desc: 'Our algorithms are trained on South Indian soil and climate data specifically.' },
                { title: 'Offline Access', desc: 'Critical disease data is cached locally so you can use it even with poor connectivity.' },
                { title: 'Multi-lingual Support', desc: 'Switch between English, Tamil, and other regional languages instantly.' }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative z-10">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/agri_2.jpg" alt="Team Work" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
