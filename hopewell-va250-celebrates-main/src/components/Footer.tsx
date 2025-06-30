
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, RotateCcw } from 'lucide-react';
import { useAccessibility } from '../hooks/useAccessibility';

const Footer = () => {
  const { accessibility, increaseTextSize, toggleHighContrast, resetPreferences } = useAccessibility();

  return (
    <footer id="accessibility" className="bg-[#002868] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/6c8c455d-604e-48d5-9123-eb22a9eb5303.png" 
              alt="Hopewell VA250 Logo" 
              className="h-32 mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              Celebrating 250 years of American independence and Hopewell's unique place in our nation's history. 
              Join us for events, historic tours, and community celebrations throughout 2026.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About VA250</a></li>
              <li><a href="#timeline" className="text-gray-300 hover:text-white transition-colors duration-300">Timeline</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white transition-colors duration-300">Events</a></li>
              <li><a href="#sites" className="text-gray-300 hover:text-white transition-colors duration-300">Historic Sites</a></li>
              <li><a href="https://www.hopewellva.gov/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">Hopewell Website</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#BF0A30]" />
                <span className="text-gray-300">(804) 541-2200</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#BF0A30]" />
                <span className="text-gray-300">info@hopewellva.gov</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#BF0A30]" />
                <span className="text-gray-300">300 N Main St, Hopewell, VA 23860</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Statement */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-xl font-bold mb-4">Accessibility Commitment</h3>
          <p className="text-gray-300 mb-4">
            The City of Hopewell is committed to making our VA250 celebration accessible to all community members. 
            Our website features keyboard navigation, screen reader compatibility, and adjustable text sizes.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={increaseTextSize}
              className={`px-4 py-2 rounded transition-colors duration-300 ${
                accessibility.textSize === 'large' 
                  ? 'bg-[#BF0A30] hover:bg-red-700 text-white' 
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
              }`}
            >
              A+ {accessibility.textSize === 'large' ? 'Reset' : 'Increase'} Text Size
            </button>
            <button 
              onClick={toggleHighContrast}
              className={`px-4 py-2 rounded transition-colors duration-300 ${
                accessibility.highContrast 
                  ? 'bg-[#BF0A30] hover:bg-red-700 text-white' 
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
              }`}
            >
              {accessibility.highContrast ? 'Normal' : 'High'} Contrast Mode
            </button>
            <button 
              onClick={resetPreferences}
              className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded transition-colors duration-300 flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Preferences
            </button>
            <a href="mailto:accessibility@hopewell.gov" className="bg-[#BF0A30] hover:bg-red-700 px-4 py-2 rounded transition-colors duration-300">
              Report Accessibility Issue
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.facebook.com/HopewellCityGovt/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="https://x.com/Hopewell_VA" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/hopewellva/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <Instagram className="w-8 h-8" />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2025 City of Hopewell, Virginia. All rights reserved. | Part of America's VA250 Celebration
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
