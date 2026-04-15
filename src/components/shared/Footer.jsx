import React from 'react';

import { FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

import KeenKeeperLogo from '../../assets/logo-xl.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
      
        <div className="mb-4">
          <img 
            src={KeenKeeperLogo} 
            alt="KeenKeeper" 
            className="h-10 w-auto object-contain" 
          />
        </div>

       
        <p className="text-gray-300 text-sm max-w-lg mb-6 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

       
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">Social Links</h4>
          <div className="flex justify-center gap-5">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <FaTwitter size={22} />
            </a>
          </div>
        </div>

       
        <div className="w-full border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-wider">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;