import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "IPL🏆", path: "/ipl" },
    { name: "Schedule ", path: "/schedule" },
    { name: "Series", path: "/series" },
    { name: "Teams", path: "/teams" },
    { name: "Players", path: "/players" },
    { name: "Videos", path: "/videos" },
    { name: "Rankings", path: "/rankings" },
    { name: "Polls", path: "/polls" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className=" h-24"></div>
      <nav className="bg-gradient-to-r from-[#3d4375] via-[#4a2465] to-[#4d1e62] shadow-lg">
        <div className="max-w-[1400px]  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between  h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 text-white text-2xl font-bold">
              <Link to="/">
                <img src="/logo.png" alt="" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between space-x-16  text-white font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-yellow-300 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-white font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block hover:text-yellow-300 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="block bg-white text-indigo-700 text-center px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
