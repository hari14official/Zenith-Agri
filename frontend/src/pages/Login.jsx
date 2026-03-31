import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('Farmer');

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'Admin') navigate('/admin');
    else navigate('/farmer');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/login.jpg" 
          alt="Agriculture Background" 
          className="w-full h-full object-cover brightness-[0.6]"
        />
      </div>

      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden min-h-[550px]">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-nature-700 via-nature-800 to-nature-950 p-10 md:p-14 flex flex-col relative overflow-hidden text-white">
          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-nature-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-nature-400/10 rounded-full blur-[100px]"></div>
          
          <button onClick={() => navigate('/')} className="text-white/60 hover:text-white mb-12 self-start flex items-center gap-3 transition-all relative z-10 group bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-white/20">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back to Portal</span>
          </button>
          
          <div className="relative z-10">
            <div className="mb-10 mt-4">
              <h3 className="text-xs font-bold text-nature-400 uppercase tracking-[0.3em] mb-4">Quick Access</h3>
              <div className="space-y-4">
                <button type="button" className="w-full flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white transition-all backdrop-blur-xl shadow-2xl hover:-translate-y-1 group">
                  <div className="bg-white rounded-full p-1 group-hover:scale-110 transition-transform">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                  </div>
                  <span className="tracking-wide">Continue with Google</span>
                </button>
                <button type="button" className="w-full flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-white transition-all backdrop-blur-xl shadow-2xl hover:-translate-y-1 group">
                  <div className="bg-nature-500 rounded-full p-1.5 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="tracking-wide">Continue with Email</span>
                </button>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

            <h2 className="text-4xl font-black text-white mb-4 tracking-tighter leading-tight">Harvest Success with <span className="text-nature-400">AI Intelligence.</span></h2>
            <p className="text-nature-100/70 text-sm font-light leading-relaxed mb-12">Join over 12,500+ professionals using Zenith Agri to optimize yields and secure sustainable futures.</p>
            
            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-2xl shadow-inner group">
               <div className="flex items-center gap-5 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-nature-500 flex items-center justify-center text-white text-2xl font-black shadow-xl group-hover:rotate-6 transition-transform">Z</div>
                  <div>
                    <div className="text-white text-lg font-black tracking-tight">Zenith Agri AI</div>
                    <div className="text-nature-400 text-[10px] font-bold uppercase tracking-[0.2em]">Next-Gen Agronomy</div>
                  </div>
               </div>
               <p className="text-nature-100 text-sm italic font-light leading-relaxed">
                 "Our soil analysis models have achieved a 98% accuracy rate in the Southern Belt, helping farmers save 40% on fertilizer costs."
               </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">Portal Login</h2>
            <p className="text-sm text-gray-400 mt-2 font-medium">
               New to the ecosystem? <button onClick={() => navigate('/signup')} className="text-nature-600 font-bold hover:underline underline-offset-4 decoration-nature-600/30">Request Access</button>
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="email" 
                placeholder="Email Id" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-white bg-blue-600 border-gray-300 rounded focus:ring-blue-500 checked:bg-blue-600" defaultChecked />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            <div className="flex gap-4 pt-2">
              <label className="flex items-center text-sm text-gray-700 cursor-pointer">
                <input type="radio" name="role" value="Farmer" checked={role === 'Farmer'} onChange={() => setRole('Farmer')} className="mr-2 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <span>Farmer</span>
              </label>
              <label className="flex items-center text-sm text-gray-700 cursor-pointer">
                <input type="radio" name="role" value="Admin" checked={role === 'Admin'} onChange={() => setRole('Admin')} className="mr-2 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <span>Admin</span>
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors mt-6">
              Sign in
            </button>
          </form>

          <div className="mt-8 text-center">
            <button className="text-sm text-blue-600 font-medium hover:underline">
              Forgotten your password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
