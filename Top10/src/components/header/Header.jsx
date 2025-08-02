import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { HeadLogo } from "../../assets";

// Header Component
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  // Sync activePath with current URL
  useEffect(() => {
    const handlePathChange = () => {
      setActivePath(window.location.pathname);
    };
    // Listen for popstate to handle browser back/forward navigation
    window.addEventListener("popstate", handlePathChange);
    return () => window.removeEventListener("popstate", handlePathChange);
  }, []);

  const navItems = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
    { title: "About", link: "/aboutUs" },
    { title: "Contact", link: "/contact" },
  ];

  // Animation variants for mobile menu
  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  const handleNavClick = (link) => {
    window.history.pushState({}, "", link);
    setActivePath(link);
    setIsMobileMenuOpen(false);
    // Trigger a popstate event to notify App.jsx
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" onClick={() => handleNavClick("/")}>
          <motion.img
            src={HeadLogo}
            alt="Top10Enterprise Logo"
            className="h-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => handleNavClick(item.link)}
              className={`text-gray-600 hover:text-red-900 font-medium transition-colors ${
                activePath === item.link
                  ? "text-red-900 border-b-2 border-red-900"
                  : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.title}
              </motion.div>
            </a>
          ))}
          <motion.a
            href="https://chat.whatsapp.com/IyyFIikPLVcJLIITqXFsLg?mode=r_c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-lg" />
            Join WhatsApp
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-red-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden bg-white shadow-md"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  onClick={() => handleNavClick(item.link)}
                  className={`text-gray-600 hover:text-red-900 font-medium ${
                    activePath === item.link ? "text-red-900" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                  </motion.div>
                </a>
              ))}
              <motion.a
                href="https://chat.whatsapp.com/IyyFIikPLVcJLIITqXFsLg?mode=r_c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaWhatsapp className="text-lg" />
                Join WhatsApp
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
