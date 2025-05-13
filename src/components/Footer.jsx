import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-xl font-bold mb-2">Smart Shopping Hub</h2>
          <p>Your go-to rental destination for fashion and style.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-pink-400">Home</a></li>
            <li><a href="#" className="hover:text-pink-400">Categories</a></li>
            <li><a href="#" className="hover:text-pink-400">Featured</a></li>
            <li><a href="#" className="hover:text-pink-400">How It Works</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-pink-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
            <li><a href="#" className="hover:text-pink-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-pink-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-500 mt-8 text-xs">
        © {new Date().getFullYear()} Smart Shopping Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
