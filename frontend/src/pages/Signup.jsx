import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('Farmer');

  const handleSignup = (e) => {
    e.preventDefault();
    if (role === 'Admin') navigate('/admin');
    else navigate('/farmer');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=2000" 
          alt="Agriculture Background" 
          className="w-full h-full object-cover brightness-[0.6]"
        />
      </div>

      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden min-h-[550px]">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-gray-50 p-8 md:p-12 flex flex-col relative border-r border-gray-100">
          <button onClick={() => navigate('/')} className="text-gray-400 hover:text-gray-600 mb-12 self-start">
            <ArrowLeft size={24} />
          </button>
          
          <div className="mt-auto mb-auto">
             <h2 className="text-2xl font-bold text-gray-900 mb-2">Continue with</h2>
            <p className="text-gray-500 text-sm mb-6">Choose an alternative way to sign up</p>
            
            <button type="button" className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-4 shadow-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              <span>Sign up with Google</span>
            </button>
            <button type="button" className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>Sign up with Email/Password</span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900">Sign up</h2>
          <p className="text-sm text-gray-500 mt-1 mb-8">
             or <button onClick={() => navigate('/login')} className="text-blue-600 font-medium hover:underline">sign in to account</button>
          </p>

          <form onSubmit={handleSignup} className="space-y-4">
             <div>
              <input 
                type="text" 
                placeholder="Full Name" 
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
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
              Create Account
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Signup;
