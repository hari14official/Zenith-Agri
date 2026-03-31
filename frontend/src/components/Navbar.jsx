import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Map, Settings, LogOut, Sprout, Info, ShieldCheck } from 'lucide-react';

const Navbar = ({ role }) => {
  const navigate = useNavigate();
  const links = role === 'Admin' ? [
    { name: 'About', path: '/admin/about', icon: Info },
    { name: 'Services', path: '/admin/services', icon: ShieldCheck },
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Knowledge Hub', path: '/admin/hub', icon: BookOpen },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ] : [
    { name: 'About', path: '/farmer/about', icon: Info },
    { name: 'Services', path: '/farmer/services', icon: ShieldCheck },
    { name: 'Dashboard', path: '/farmer', icon: LayoutDashboard },
    { name: 'AI Analysis', path: '/farmer/analysis', icon: Map },
    { name: 'Knowledge Hub', path: '/farmer/hub', icon: BookOpen },
  ];

  return (
    <nav className="bg-nature-900/95 backdrop-blur-md text-white shadow-2xl sticky top-0 z-50 border-b border-white/5">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center h-20">
          {/* Left: Brand / Logo */}
          <button className="flex items-center gap-4 w-1/3 group text-left" onClick={() => navigate('/')}>
            <div className="bg-nature-500 p-2.5 rounded-2xl shrink-0 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-nature-500/20">
              <Sprout size={28} className="text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black tracking-tighter text-white leading-none italic uppercase">ZENITH AGRI</h1>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-nature-400 animate-pulse"></span>
                <span className="text-[10px] text-nature-300 font-bold uppercase tracking-[0.2em]">{role || 'GUEST'} ECOSYSTEM</span>
              </div>
            </div>
          </button>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center justify-center gap-3 flex-1">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-5 py-2.5 rounded-2xl transition-all duration-300 group ${
                      isActive 
                        ? 'bg-white/10 text-nature-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-white/10' 
                        : 'text-nature-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-xs uppercase tracking-widest leading-none">{link.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Right: Sign Out */}
          <div className="flex items-center justify-end w-1/3">
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl text-nature-300 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 group border border-transparent hover:border-red-500/20"
            >
              <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-xs uppercase tracking-widest leading-none hidden sm:block">Exit Portal</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
