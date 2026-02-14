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
              <img 
                src="https://customer-assets.emergentagent.com/job_balaji-foundry/artifacts/b6i7hxo2_Bg%20remove%20logo%20.png" 
                alt="Balaji Foundry Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Balaji Foundry</h3>
                <p className="text-sm text-gray-400">Since 2005</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              Balaji Foundry is a foundry in Ahmedabad manufacturing precision castings for general engineering industries across India. Established in 2005 | Pan-India Supply.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <span>36, 37, 38 Milan Industrial Estate, Nagarvel Hanuman Road, Amraiwadi, Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-500 flex-shrink-0" />
                <span>(O) 22749351, 22744075 | (M) 9426082074</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-500 flex-shrink-0" />
                <span>balajifoundry27@gmail.com</span>
              </div>
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
                <Link to="/products" className="hover:text-orange-500 transition-colors">
                  Products
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
              <li className="flex items-start space-x-2">
                <Phone size={16} className="text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <div>(O) 22749351, 22744075</div>
                  <div>(M) 9426082074</div>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-500 flex-shrink-0" />
                <span>balajifoundry27@gmail.com</span>
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