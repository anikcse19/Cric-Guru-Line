import clsx from "clsx";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location =useLocation()


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
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 text-white text-2xl font-bold">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt=""
                  className=" w-32 h-12 object-cover"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between space-x-6  text-white font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    "hover:text-white text-base font-normal py-5 px-6 transition",
                    location.pathname === link.path
                      ? "text-white border-b-4 border-white"
                      : "text-gray-300  "
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none text-2xl py-5"
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
