import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Shield, Zap, Heart, Sprout, Users, BarChart2, Globe, Leaf, BookOpen, Map, Award, CheckCircle, TrendingUp, Phone, Mail } from 'lucide-react';

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
              Unlike generic software, every feature is purpose-built for the real challenges facing India's farming communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Hyper-Local Precision', desc: 'AI recommendations are calibrated for your exact GPS coordinates, district-level weather data, and soil classification — not one-size-fits-all national averages.', color: 'bg-green-100 text-green-700' },
              { icon: Shield, title: 'Early Disease Detection', desc: 'Upload a photo of any crop leaf and our deep learning model instantly identifies the pathogen and prescribes organic or chemical treatment with dosage rates.', color: 'bg-red-100 text-red-700' },
              { icon: BarChart2, title: 'Real-Time Soil Analysis', desc: 'Combine your soil type, pH, and fertility data with live OpenWeatherMap meteorological feeds to get the most accurate crop suitability scores available.', color: 'bg-blue-100 text-blue-700' },
              { icon: Globe, title: 'Government Scheme Access', desc: 'We track central schemes like PM-KISAN, PMFBY, and state-level Government subsidies in real time, alerting you when you are eligible to apply.', color: 'bg-purple-100 text-purple-700' },
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

      {/* ── Platform Features Image Block ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/agri_1.jpg"  alt="Fields" className="rounded-2xl h-48 w-full object-cover shadow-lg" />
                <img src="/images/agri_6.jpg"  alt="Sunset Farm" className="rounded-2xl h-48 w-full object-cover shadow-lg mt-6" />
                <img src="/images/agri_9.jpg"  alt="Farmer" className="rounded-2xl h-48 w-full object-cover shadow-lg -mt-6" />
                <img src="/images/agri_11.jpg" alt="Landscape" className="rounded-2xl h-48 w-full object-cover shadow-lg" />
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <span className="text-sm font-bold text-nature-600 uppercase tracking-widest">Platform Features</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">Everything You Need in One Place</h2>
              <div className="space-y-5">
                {[
                  { icon: Map, text: 'Interactive Google Maps-based land selector with satellite overlay and precise GPS pinning.' },
                  { icon: TrendingUp, text: 'Real-time crop price trends from APMC mandis across Tamil Nadu to help you time your harvest sale.' },
                  { icon: Users, text: 'Multi-role platform supporting individual farmers, cooperative managers, and district administrators.' },
                  { icon: Award, text: 'Crop cultivation guides sourced directly from TNAU bulletins and ICAR research publications.' },
                  { icon: CheckCircle, text: 'Fully offline-capable article library — access Knowledge Hub content even without internet connectivity.' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-start gap-4">
                      <div className="bg-nature-100 p-2.5 rounded-lg shrink-0 mt-0.5">
                        <Icon size={20} className="text-nature-600" />
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-nature-900 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">How Zenith Agri Works</h2>
            <p className="text-nature-300 text-lg max-w-2xl mx-auto">From soil to harvest — four simple steps to transform your agricultural output.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-nature-600" />
            {[
              { step: '01', title: 'Mark Your Land', desc: 'Use our interactive map to precisely pin your farm location and enter soil parameters.' },
              { step: '02', title: 'Get AI Analysis', desc: 'Our Gemini-powered engine analyses soil, weather, and climate data to recommend the best crops.' },
              { step: '03', title: 'Read Detailed Guides', desc: 'Access deep-dive cultivation articles covering fertilization, irrigation, pest control, and harvest timing.' },
              { step: '04', title: 'Maximize Returns', desc: 'Discover value-addition strategies and government subsidies to maximize your farm income.' },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 bg-nature-800 border-4 border-nature-600 rounded-full flex flex-col items-center justify-center mb-5 shadow-xl">
                  <span className="text-nature-400 text-xs font-bold">STEP</span>
                  <span className="text-white text-2xl font-extrabold">{s.step}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-nature-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="relative h-80 overflow-hidden">
        <img src="/images/about3.jpg" alt="Bountiful harvest" className="absolute inset-0 w-full h-full object-cover brightness-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h2 className="text-4xl font-extrabold text-white mb-4">Join India's Agricultural Revolution</h2>
          <p className="text-nature-200 text-lg max-w-2xl mb-8">Sign up for free and get your first AI-powered crop recommendation within minutes.</p>
          <a
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-nature-500 hover:bg-nature-600 text-white font-bold rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Sprout size={22} /> Get Started Free
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
