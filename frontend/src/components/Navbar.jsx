import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Map, Settings, LogOut, Sprout, Info } from 'lucide-react';

const Navbar = ({ role }) => {
  const navigate = useNavigate();
  const links = role === 'Admin' ? [
    { name: 'About', path: '/admin/about', icon: Info },
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Knowledge Hub', path: '/admin/hub', icon: BookOpen },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ] : [
    { name: 'About', path: '/farmer/about', icon: Info },
    { name: 'Dashboard', path: '/farmer', icon: LayoutDashboard },
    { name: 'AI Analysis', path: '/farmer/analysis', icon: Map },
    { name: 'Knowledge Hub', path: '/farmer/hub', icon: BookOpen },
  ];

  return (
    <nav className="bg-nature-900 text-white shadow-xl sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Left: Brand */}
          <div className="flex items-center gap-3 w-1/3">
            <div className="bg-nature-500 p-1.5 rounded-lg shrink-0">
              <Sprout size={24} className="text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold tracking-wider text-white leading-tight">Zenith Agri</h1>
              <span className="text-[10px] bg-nature-700 px-2 py-0.5 rounded-full text-nature-200 uppercase tracking-widest hidden sm:inline-block w-fit">{role} Portal</span>
            </div>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center justify-center gap-2 flex-1">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive ? 'bg-nature-700 text-nature-50 shadow-inner' : 'text-nature-200 hover:bg-nature-800 hover:text-white'
                    }`
                  }
                >
                  <Icon size={18} />
                  <span className="font-medium text-sm">{link.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Right: Sign Out */}
          <div className="flex items-center justify-end w-1/3">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 px-3 py-2 rounded-lg text-nature-200 hover:bg-red-500/10 hover:text-red-400 transition-colors duration-200">
              <LogOut size={18} />
              <span className="font-medium text-sm hidden sm:block">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
