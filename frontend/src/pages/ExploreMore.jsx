import React from 'react';
import Footer from '../components/Footer';
import { CheckCircle2, Leaf, BarChart2, ShieldCheck, Users, TrendingUp, Droplets, Sun, ArrowRight } from 'lucide-react';

const ExploreMore = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Full-screen Hero */}
      <div className="relative h-[60vh] bg-stone-900">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
          alt="Agriculture Field" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900/80 flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nature-500/30 border border-nature-400/30 text-nature-200 text-xs font-bold uppercase tracking-widest mb-5">
            <span>Zenith Agri Platform</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5 leading-tight">Explore More</h1>
          <p className="text-xl text-white/90 font-light max-w-2xl">Discover the full power of Zenith Agri — your complete intelligent agriculture management solution</p>
        </div>
      </div>

      <main className="flex-1">
        {/* About the Platform */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-14 items-center">
              <div className="flex-1">
                <span className="text-nature-600 font-bold uppercase tracking-widest text-sm">About Zenith Agri</span>
                <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-6">Revolutionizing Farming with Data Science</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Zenith Agri is an end-to-end intelligent agriculture platform designed for Tamil Nadu's agro-climatic diversity. 
                  We combine machine learning, real-time satellite data, and localized agronomy knowledge to give every farmer the tools of precision agriculture.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  From paddy fields in Thanjavur to sugarcane farms in Erode to mango orchards in Krishnagiri — our platform provides actionable, location-specific insights that help farmers make better decisions every day.
                </p>
                <div className="space-y-3">
                  {['AI Soil & Crop Analysis', 'Real-time Weather Integration', 'Disease Detection & Treatment', 'Multilingual Support', 'Tamil Nadu Agro Zone Coverage'].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 size={20} className="text-nature-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000" alt="Data Farming" className="rounded-3xl shadow-2xl w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-nature-50 py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Platform Features</h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">Everything you need for modern, data-driven agriculture in one unified platform</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Leaf, title: 'AI Land Analysis', desc: 'Upload soil photos and pin your location to receive AI-generated soil reports, crop suitability scores, and precise NPK fertilization protocols.', color: 'bg-green-100 text-green-600', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=600' },
                { icon: ShieldCheck, title: 'Disease Detection', desc: 'Deep computer vision scans crop leaf images to identify fungal, bacterial, and pest-based infections with 90%+ accuracy and prescribes targeted treatments.', color: 'bg-red-100 text-red-600', img: 'https://images.unsplash.com/photo-1592982537447-6f29efcb9693?auto=format&fit=crop&q=80&w=600' },
                { icon: BarChart2, title: 'Agronomy Analytics', desc: 'Visualize soil health trends, weather alignments, crop performance data, and compare yields across seasons through interactive dashboards.', color: 'bg-blue-100 text-blue-600', img: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&q=80&w=600' },
                { icon: Users, title: 'Farmer Community', desc: 'Connect with 8,500+ farmers across Tamil Nadu, share knowledge, discuss regional pest outbreaks, and access government scheme information.', color: 'bg-amber-100 text-amber-600', img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=600' },
                { icon: TrendingUp, title: 'Knowledge Hub', desc: 'Access 100+ expert-authored research articles on crop cultivation, pest management, organic farming, and smart irrigation tailored for Tamil Nadu zones.', color: 'bg-purple-100 text-purple-600', img: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&q=80&w=600' },
                { icon: Sun, title: 'Climate Integration', desc: "Real-time weather data integration identifies monsoon patterns, temperature anomalies, and drought risks to help you plan planting calendars accurately.", color: 'bg-orange-100 text-orange-600', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=600' },
              ].map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                    <div className="h-44 overflow-hidden">
                      <img src={feat.img} alt={feat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-7">
                      <div className={`inline-flex p-2.5 rounded-xl mb-3 ${feat.color}`}>
                        <Icon size={22} />
                      </div>
                      <h3 className="text-xl font-extrabold text-gray-900 mb-2">{feat.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Crops We Support */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Crops We Cover</h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">Zenith Agri provides specialized guidance for all major crops grown in Tamil Nadu</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: 'Paddy', img: 'https://images.unsplash.com/photo-1536640712-4d4c36ef0e2c?auto=format&fit=crop&q=80&w=300' },
                { name: 'Sugarcane', img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=300' },
                { name: 'Tomato', img: 'https://images.unsplash.com/photo-1592688086082-996ff7638d97?auto=format&fit=crop&q=80&w=300' },
                { name: 'Wheat', img: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&q=80&w=300' },
                { name: 'Fruits', img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=300' },
                { name: 'Vegetables', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=300' },
              ].map((crop, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
                  <div className="h-36 overflow-hidden">
                    <img src={crop.img} alt={crop.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="bg-nature-900 text-white text-center py-2.5 font-bold text-sm">{crop.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sustainable Breeding */}
        <div className="bg-nature-900 py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row-reverse gap-14 items-center">
              <div className="flex-1">
                <span className="text-nature-400 font-bold uppercase tracking-widest text-sm">Science-Backed</span>
                <h2 className="text-4xl font-extrabold text-white mt-3 mb-6">Sustainable Breeding Technologies</h2>
                <p className="text-lg text-nature-100 font-light leading-relaxed mb-6">
                  Manage complex pedigrees, phenotypes, and generations securely. Map DNA traits efficiently without traditional paper logs. 
                  We focus on enhancing standard yields with sustainable biological interactions and advanced genetic marker technologies.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Droplets, label: 'DNA Traits Mapping', desc: 'Track molecular markers across generations' },
                    { icon: Leaf, label: 'Phenotype Management', desc: 'Systematically record morphological data' },
                    { icon: Sun, label: 'Climate Synergy', desc: 'Optimize variety selection per agro zone' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="bg-nature-700 p-2.5 rounded-xl shrink-0">
                          <Icon size={20} className="text-nature-300" />
                        </div>
                        <div>
                          <div className="text-white font-bold">{item.label}</div>
                          <div className="text-nature-300 text-sm">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-1">
                <img src="https://images.unsplash.com/photo-1642388865966-636f8a0f0bd4?auto=format&fit=crop&q=80&w=1000" alt="Sustainable Crop" className="rounded-3xl shadow-2xl w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-nature-50 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-gray-500 font-light text-lg mb-8">Join thousands of farmers already using Zenith Agri to make smarter decisions.</p>
          <a href="/login" className="inline-flex items-center gap-2 bg-nature-600 hover:bg-nature-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-nature-600/30">
            <span>Get Started Today</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExploreMore;
