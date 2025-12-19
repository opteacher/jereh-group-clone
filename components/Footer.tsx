import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jereh-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-jereh-red text-white flex items-center justify-center font-bold text-lg rounded">J</div>
                <span className="text-2xl font-bold">Jereh</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Jereh Group is a global integrated solution provider in oil & gas, power, and environmental management, dedicated to helping customers succeed.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-jereh-red transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">ESG</a></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="text-lg font-bold mb-6">Industries</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-jereh-red transition-colors">Oil & Gas</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">Power Services</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">Environmental Management</a></li>
              <li><a href="#" className="hover:text-jereh-red transition-colors">New Energy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-jereh-red" />
                <span>Jereh Global Headquarters, Laishan District, Yantai, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-jereh-red" />
                <span>+86-535-672-3000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-jereh-red" />
                <span>contact@jereh.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jereh Group. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;