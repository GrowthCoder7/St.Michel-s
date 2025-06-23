import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '+919902699638'; // Replace with your actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap size={32} className="text-accent" />
              <div>
                <h3 className="text-xl font-bold text-white">St. Michel's</h3>
                <p className="text-xs text-gray-300">Excellence in Education</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              St. Michel's is committed to providing quality education and fostering academic excellence in a supportive environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={whatsappLink} className="text-gray-300 hover:text-accent transition-colors" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/student-life" className="text-gray-300 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Student Life
                </Link>
              </li>
              <li>
                <Link to="/news-events" className="text-gray-300 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-accent transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">BMSIT&M Campus, Doddaballapur Main Road, Avalahalli, Yelahanka, Bengaluru, Karnataka 560064</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accent mr-3 flex-shrink-0" />
                <a href="tel:+918026662222" className="text-gray-300 hover:text-accent transition-colors">
                  +91 (80) 2666-2222
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accent mr-3 flex-shrink-0" />
                <a href="mailto:info@brightonacademy.edu" className="text-gray-300 hover:text-accent transition-colors">
                  info@brightonacademy.edu
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter to receive school updates and announcements.</p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full px-4 py-2 rounded-md bg-primary-800 text-white border border-primary-700 focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-400"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-dark text-primary-900 font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-primary-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} St. Michel's. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;