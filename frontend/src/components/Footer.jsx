import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Balaji Foundry</h3>
                <p className="text-sm text-gray-400">Since 2005</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              A trusted precision casting manufacturer based in Ahmedabad, Gujarat. 
              Serving pan-India manufacturers with reliable, high-quality castings since 2005.
            </p>
            <div className="flex items-start space-x-2 text-sm">
              <MapPin size={16} className="text-orange-500 mt-1 flex-shrink-0" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-orange-500 transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-500 flex-shrink-0" />
                <span>Contact for details</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-500 flex-shrink-0" />
                <span>Contact for details</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Balaji Foundry. All rights reserved. | Proprietorship Est. 2005
          </p>
        </div>
      </div>
    </footer>
  );
};