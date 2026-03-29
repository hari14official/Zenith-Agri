import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-nature-900 text-nature-200 py-8 border-t border-nature-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="font-semibold text-white tracking-widest uppercase">Zenith Agri</span> 
          <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
