import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-full">
                <Heart className="h-6 w-6 text-blue-900" />
              </div>
              <div>
                <div className="font-bold text-lg">SwasthyaCare</div>
                <div className="text-sm text-blue-200">Multispeciality Hospital</div>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Serving India with quality, affordable healthcare. Your health is our mission.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-blue-300 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-blue-300 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-blue-300 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-blue-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/departments" className="text-blue-200 hover:text-white transition-colors">Departments</Link></li>
              <li><Link to="/doctors" className="text-blue-200 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/appointments" className="text-blue-200 hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>24x7 Emergency Care</li>
              <li>OPD/IPD Management</li>
              <li>Laboratory Services</li>
              <li>Pharmacy</li>
              <li>Teleconsultation</li>
              <li>Health Packages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">A-27, Near Sector 16 Metro Station,</p>
                  <p className="text-blue-100">DND Flyway Road, Sector 15A,</p>
                  <p className="text-blue-100">Noida, Uttar Pradesh – 201301</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">+91-9504077534</p>
                  <p className="text-red-300 font-semibold">Emergency: 108</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <p className="text-blue-100">info@swasthyacare.in</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">OPD: 8:00 AM - 8:00 PM</p>
                  <p className="text-blue-100">Emergency: 24x7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 SwasthyaCare Multispeciality Hospital. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-green-400 text-sm font-semibold">NABH Accredited</span>
              <span className="text-blue-200 text-sm">ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;