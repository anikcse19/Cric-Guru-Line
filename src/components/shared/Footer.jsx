import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaApple } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <img
            src="/logo.png" // Replace with your actual logo path
            alt="Cricket Line Guru"
            className="h-20 w-32 object-cover"
          />
        </div>

        {/* App Links */}
        <div>
          <h3 className="font-semibold mb-3">GET THE APP ON</h3>
          <div className="flex items-center gap-2 mb-2">
            <SiGoogleplay className="text-xl text-green-500" />
            <span>Google Play</span>
          </div>
          <div className="flex items-center gap-2">
            <FaApple className="text-xl text-gray-300" />
            <span>App Store</span>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3">FOLLOW US ON</h3>
          <div className="flex items-center gap-2 mb-2">
            <FaYoutube className="text-xl text-red-600" />
            <span>YouTube</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaFacebookF className="text-xl text-blue-600" />
            <span>Facebook</span>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram className="text-xl text-pink-500" />
            <span>Instagram</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-1">
            {["Home", "Schedule", "Series", "News", "Videos", "Polls"].map(
              (item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-yellow-400">
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-gray-300 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <span>Love. Play. Cricket. Repeat 🙏</span>
        <span className="hidden md:inline">|</span>
        <Link to="/about" className="hover:text-yellow-400">
          About Us
        </Link>
        <span className="hidden md:inline">|</span>
        <Link to="/privacy" className="hover:text-yellow-400">
          Privacy Policy
        </Link>
        <span className="hidden md:inline">|</span>
        <Link to="/terms" className="hover:text-yellow-400">
          Terms of Use
        </Link>
        <span className="hidden md:inline">|</span>
        <Link to="/grievance" className="hover:text-yellow-400">
          Grievance
        </Link>
        <span className="hidden md:inline">|</span>
        <span>Version 5.4.25</span>
      </div>
    </footer>
  );
};

export default Footer;
