import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Search, Phone, Mail, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const CustomNavLink = ({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const handleClick = () => {
    if (window.location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) =>
        `relative px-4 py-2 font-semibold text-sm uppercase tracking-wide transition-all duration-300 group ${
          isActive ? "text-orange-400" : "text-white hover:text-orange-400"
        }`
      }
      {...props}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
    </NavLink>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSignIn = () => {
    navigate("/login");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#2a5da5] to-[#0a0e27] shadow-2xl">
      <div className="border-b border-white/10">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Consistent Size */}
            <div
              onClick={scrollToTop}
              className="flex-shrink-0 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto sm:h-12 md:h-12 lg:h-12 xl:h-12 object-contain drop-shadow-lg"
              />
            </div>

            {/* Desktop Menu with Centered Search */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-1 xl:gap-3">
              <CustomNavLink to="/">Home</CustomNavLink>
              <CustomNavLink to="/about">About</CustomNavLink>
              <CustomNavLink to="/shop">Shop</CustomNavLink>

              <CustomNavLink to="/brand">Brand</CustomNavLink>
              <CustomNavLink to="/contact">Contact Us</CustomNavLink>
              {/* Search in Middle */}
              <div className="relative mx-4 xl:mx-6 group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-70 xl:w-66 pl-10 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white/15 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70 group-hover:text-orange-400 transition-colors duration-300" />
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              {/* Phone */}
              <a
                href="tel:+251911517628"
                className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                <Phone className="w-4 h-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 group-hover:text-blue-300" />
                <span className="hidden xl:inline relative z-10 group-hover:text-blue-200 transition-colors duration-300">
                  + (251) 911 517 628
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:Pro2actives@gmail.com"
                className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-yellow-500/20 hover:border-orange-400/60 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                <Mail className="w-4 h-4 transform group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300 group-hover:text-orange-300" />
                <span className="hidden xl:inline relative z-10 group-hover:text-orange-200 transition-colors duration-300">
                  Pro2actives@gmail.com
                </span>
              </a>

              {/* Sign In - Updated to match other containers */}
              <button
                onClick={handleSignIn}
                className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-400/60 hover:shadow-lg hover:shadow-green-500/30"
              >
                {/* Animated gradient overlay - same as other containers */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                {/* Icon (optional - you can add one or keep text only) */}

                {/* Sign In text */}
                <span className="relative z-10 group-hover:text-green-200 transition-colors duration-300">
                  Sign In
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3 bg-gradient-to-b from-[#0a0e27] to-[#050818] border-t border-white/10">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-1">
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/about">About</CustomNavLink>
            <CustomNavLink to="/shop">Shop</CustomNavLink>
            <CustomNavLink to="/brand">Brand</CustomNavLink>
            <CustomNavLink to="/contact">Contact Us</CustomNavLink>
          </div>

          {/* Mobile Contact Info */}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href="tel:+251911517628"
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400/60 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>+ (251) 911 517 628</span>
            </a>

            <a
              href="mailto:Pro2actives@gmail.com"
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-orange-500/20 hover:border-orange-400/60 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>Pro2actives@gmail.com</span>
            </a>

            <button
              onClick={handleSignIn}
              className="w-full px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-sm font-bold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
