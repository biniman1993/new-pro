import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  Search,
  Phone,
  Mail,
  Menu,
  X,
  Home,
  User,
  ShoppingBag,
  Info,
  LogIn,
  Contact,
} from "lucide-react";

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
        `relative px-4 py-2 font-semibold text-sm  tracking-wide transition-all duration-300 group ${
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
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#2a5da5] to-[#143057] ">
      <div className="border-b border-white/10">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand Name */}
            <div
              onClick={scrollToTop}
              className="flex-shrink-0 cursor-pointer transform transition-transform duration-300 hover:scale-105 flex flex-col items-start"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  {/* Logo Container with gradient border */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-blue-300 p-0.5">
                    {/* Inner circle with solid color */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#143057] to-[#2a5da5] flex items-center justify-center">
                      {/* Logo Icon/Text */}
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
                  </div>
                </div>
                {/* Brand Name */}
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-xl tracking-tight">
                    Proactive
                  </span>
                  <span className="text-xs text-white/70 tracking-wider font-medium mt-[-4px]">
                    TRADING
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Menu with Centered Search */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-0.5 xl:gap-0.5">
              <CustomNavLink to="/">Home</CustomNavLink>
              <CustomNavLink to="/about">About</CustomNavLink>
              <CustomNavLink to="/shop">Shop</CustomNavLink>

              <CustomNavLink to="/brand">Brand</CustomNavLink>
              <CustomNavLink to="/contact">Contact</CustomNavLink>
              {/* Search in Middle */}
              <div className="relative mx-4 xl:mx-6 group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-70 xl:w-66 pl-10 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white/15 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70 group-hover:text-[#ff6b35] transition-colors duration-300" />
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
                  +251911517628
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
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2   text-white  transition-all duration-300 hover:scale-110"
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

      {/* Modern Sidebar for Mobile/Tablet */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#2a5da5] via-[#16325a] to-[#081322] shadow-2xl transform transition-transform duration-500 ease-out ${
            isMenuOpen
              ? "translate-x-0 shadow-orange-500/20"
              : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-white/10 bg-gradient-to-r from-[#2a5da5] to-[#0a0e27]/30">
            <div className="flex items-center gap-3 ">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-blue-300 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#143057] to-[#2a5da5] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">Proactive</span>
                <span className="text-white text-sm font-semibold tracking-wider">
                  TRADING
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="h-[calc(100%-140px)] overflow-y-auto">
            {/* Navigation Links */}
            <div className="p-4 space-y-2">
              {[
                { to: "/", icon: Home, label: "Home" },
                { to: "/about", icon: Info, label: "About" },
                { to: "/shop", icon: ShoppingBag, label: "Shop" },
                { to: "/brand", icon: User, label: "Brand" },
                { to: "/contact", icon: Contact, label: "Contact" },
                { to: "/contact", icon: Contact, label: "Product" },
                { to: "/contact", icon: Contact, label: "My Cart" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? "bg-gradient-to-r "
                        : " hover:border-l-4 hover:border-orange-400"
                    }`
                  }
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      location.pathname === item.to
                        ? "text-white"
                        : "text-white/70 group-hover:text-orange-400"
                    }`}
                  />
                  <span className="text-white font-medium text-lg group-hover:text-orange-400">
                    {item.label}
                  </span>
                </NavLink>
              ))}
            </div>

            {/* Divider */}
            <div className="px-6 py-2">
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Contact Info Section */}
            <div className="p-4 space-y-4">
              <div className="space-y-3"></div>

              {/* Login Button */}
              <button
                onClick={handleSignIn}
                className="w-full px-2 py-3 rounded-xl  text-white font-bold text-lg hover:shadow-xl hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <LogIn className="w-5 h-5" />
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
