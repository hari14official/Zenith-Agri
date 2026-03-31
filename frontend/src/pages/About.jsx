import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Sprout, Zap, Leaf } from 'lucide-react';

const About = ({ role }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar role={role} />

      {/* ── Hero ── */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="/images/about1.jpg"
          alt="Agriculture field"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nature-900/60 to-nature-900/80" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-nature-500/30 border border-nature-400/50 rounded-full text-nature-200 text-xs font-bold uppercase tracking-widest mb-5">
            <Sprout size={14} /> Zenith Agri Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight">
            Technology Rooted in the Soil
          </h1>
          <p className="text-xl text-nature-200 max-w-3xl leading-relaxed">
            We are building India's most intelligent, farmer-first agricultural platform — combining real-time soil science, AI-driven insights, and government scheme guidance into one seamless experience.
          </p>
        </div>
      </section>

      {/* ── Our Mission ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="text-sm font-bold text-nature-600 uppercase tracking-widest">Our Mission</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
                Empowering Every Farmer with Data-Driven Precision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                India's agriculture sector supports over 600 million people. Yet most smallholder farmers still rely on generational intuition and costly intermediaries for critical decisions about what to grow, when to irrigate, and which government schemes they qualify for.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                Zenith Agri was built to change this. By combining the latest in satellite data, soil science, machine learning, and real-time weather APIs, we deliver a portable agronomist right inside a farmer's phone — fully localized for Tamil Nadu and surrounding states.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every feature, from the interactive land map to the AI crop advisor, is designed with one principle: actionable insight delivered at the right moment, in plain language any farmer can use.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/about2.jpg" alt="Farmer with technology" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-nature-900 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Bridging Tradition and Technology</p>
                  <p className="text-nature-300 text-sm">AI analysis tailored to Indian agro-climatic zones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-nature-900 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Crop Varieties Covered', value: '180+' },
              { label: 'Government Schemes Tracked', value: '42' },
              { label: 'Districts Supported', value: '38' },
              { label: 'AI Recommendations Delivered', value: '10,000+' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-white mb-2">{stat.value}</span>
                <span className="text-nature-300 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Use Zenith Agri ── */}
      <section className="bg-nature-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-nature-600 uppercase tracking-widest">Advantages</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Why Choose Zenith Agri?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Unlike generic software, every feature is purpose-built for the real challenges facing Tamil Nadu's farming communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Hyper-Local Precision', desc: 'AI recommendations are calibrated for your exact GPS coordinates, district-level weather data, and soil classification — not one-size-fits-all national averages.', color: 'bg-green-100 text-green-700' },
              { icon: Shield, title: 'Early Disease Detection', desc: 'Upload a photo of any crop leaf and our deep learning model instantly identifies the pathogen and prescribes organic or chemical treatment with dosage rates.', color: 'bg-red-100 text-red-700' },
              { icon: BarChart2, title: 'Real-Time Soil Analysis', desc: 'Combine your soil type, pH, and fertility data with live OpenWeatherMap meteorological feeds to get the most accurate crop suitability scores available.', color: 'bg-blue-100 text-blue-700' },
              { icon: Globe, title: 'Government Scheme Access', desc: 'We track central schemes like PM-KISAN, PMFBY, and state-level Tamil Nadu subsidies in real time, alerting you when you are eligible to apply.', color: 'bg-purple-100 text-purple-700' },
              { icon: BookOpen, title: 'Expert Knowledge Hub', desc: 'Curated, high-depth articles covering paddy, vegetables, fruits, and commercial crops — written using research from TNAU, ICAR, and the Ministry of Agriculture.', color: 'bg-yellow-100 text-yellow-700' },
              { icon: Leaf, title: 'Sustainable First Design', desc: 'Every recommendation prioritizes soil health and water conservation. We suggest organic inputs first, with chemical alternatives only when scientifically necessary.', color: 'bg-emerald-100 text-emerald-700' },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${f.color}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Vision & 3D Interactive Section ── */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 relative">
               {/* 3D-like floating cards using CSS transforms */}
               <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-nature-100 rounded-3xl rotate-12 shadow-2xl opacity-50 -z-10 animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-3xl -rotate-12 shadow-2xl opacity-50 -z-10 anima-pulse transition-all"></div>
                  <div className="w-full h-full bg-white rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.1)] p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-700 relative z-10 flex flex-col justify-center text-center">
                     <div className="w-20 h-20 bg-nature-900 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-xl">
                        <Zap size={40} className="text-nature-400" />
                     </div>
                     <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter uppercase">Our Vision</h3>
                     <p className="text-gray-500 font-light leading-relaxed">
                        To become the digital backbone of Indian agriculture, where every farmer works with the confidence of a scientist and the soul of a traditions-keeper.
                     </p>
                  </div>
               </div>
            </div>
            <div className="flex-1">
               <span className="text-sm font-black text-nature-600 uppercase tracking-[0.3em] mb-4 block">Sustainability</span>
               <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight">Revolutionizing the <span className="text-nature-600">Green Revolution</span></h2>
               <div className="space-y-6">
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                     The original Green Revolution brought chemicals; the Digital Green Revolution brings intelligence. We believe that true productivity comes NOT from doing more, but from doing better with less.
                  </p>
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                     Zenith Agri is a team of agronomists, data scientists, and engineers dedicated to solving the complex puzzle of smallholder farm economic stability. Our 3D mapping engine and AI vision systems are just the beginning of a larger commitment to rural prosperity.
                  </p>
               </div>
               <div className="flex items-center gap-12 mt-12">
                  <div>
                    <div className="text-3xl font-black text-nature-900">1.2M+</div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Soil Samples Analyzed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-nature-900">98.4%</div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Prediction Accuracy</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values with 3D Gradients ── */}
      <section className="bg-nature-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">The Zenith Pillars</h2>
              <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">Our identity is defined by three unwavering commitments to the farming community.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Trustworthiness', desc: 'No hidden agendas. We provides data-backed advice independently of chemical or fertilizer manufacturer interests.', img: '/images/agri_3.jpg', color: 'from-nature-600 to-nature-800' },
                { title: 'Accessibility', desc: 'Designed for the ground reality. Our interface works with old phones and low-bandwidth connections found in remote villages.', img: '/images/agri_8.jpg', color: 'from-blue-600 to-blue-800' },
                { title: 'Prosperity', desc: 'The end goal is always the farmers wallet. We focus on ROI-driven advice that directly increases net annual income.', img: '/images/agri_10.jpg', color: 'from-earth-600 to-earth-800' }
              ].map((v) => (
                <div key={v.title} className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-700">
                   <img src={v.img} alt={v.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                   <div className={`absolute inset-0 bg-gradient-to-t ${v.color} opacity-90 mix-blend-multiply group-hover:opacity-100 transition-opacity`}></div>
                   <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                      <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">{v.title}</h3>
                      <p className="text-white/80 font-light leading-relaxed">{v.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Impact Gallery ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
           <div className="flex justify-between items-end mb-12">
              <div>
                 <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Stories from the Field</h2>
                 <p className="text-xl text-gray-500 font-light mt-2">Visual journey of our impact across Indian agriculture.</p>
              </div>
              <button className="hidden md:block py-3 px-8 border-2 border-nature-900 rounded-full font-black text-xs uppercase tracking-widest hover:bg-nature-900 hover:text-white transition-all">View Full Gallery</button>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group shadow-xl">
                 <img src="/images/agri_1.jpg" alt="Paddy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-black text-xl uppercase tracking-widest">Cauvery Delta</span>
                 </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden group shadow-xl h-64">
                <img src="/images/agri_6.jpg" alt="Tomato" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-black text-sm uppercase tracking-widest">Horticulture</span>
                 </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden group shadow-xl h-64">
                <img src="/images/paddy.jpg" alt="Rice" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="col-span-2 relative rounded-3xl overflow-hidden group shadow-xl h-64">
                <img src="/images/agri_11.jpg" alt="Farmer Study" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
           </div>
        </div>
      </section>

      {/* ── Call to Action with 3D Depth ── */}
      <section className="relative h-[60vh] overflow-hidden bg-nature-950 flex items-center justify-center">
        <img src="/images/about3.jpg" alt="Bountiful harvest" className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">THE FUTURE IS <span className="text-nature-400">GROWING</span></h2>
          <p className="text-2xl text-nature-100/70 font-light mb-12">Start your journey with Zenith Agri today and unlock the intelligence of your land.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a
              href="/signup"
              className="px-12 py-5 bg-nature-500 text-white font-black rounded-2xl text-xl transition-all duration-300 shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:-translate-y-2 uppercase tracking-widest"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="px-12 py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black rounded-2xl text-xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 uppercase tracking-widest"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

About.propTypes = {
  role: PropTypes.string
};

export default About;
