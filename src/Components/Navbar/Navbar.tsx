import { useNavigate, NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Search,
  Phone,
  Mail,
  Menu,
  X,
  Home,
  Building2,
  Package,
  User,
  ShoppingBag,
  Info,
  LogIn,
  Contact,
  ChevronDown,
  ChevronUp,
  Cpu,
  Laptop,
  Monitor,
  Wifi,
  Mouse,
  Printer,
  Video,
  Tv,
  Server,
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
          isActive ? "text-[#ff9800] hover:text-[#ff9800]" : "text-white hover:text-[#ff9800]"
        }`
      }
      {...props}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F97316] to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
    </NavLink>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ADD THIS
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProductsOpen, setIsProductsOpen] = useState(false); // ADD THIS

// Add this after your useState declarations
useEffect(() => {
  if (isMenuOpen) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
  
  // Cleanup when component unmounts
  return () => {
    document.body.classList.remove('menu-open');
  };
}, [isMenuOpen]);


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
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F97316] to-blue-300 p-0.5">
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
                  className="w-70 xl:w-66 pl-10 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-[ff9800] focus:bg-white/15 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70 group-hover:text-[#F97316] transition-colors duration-300" />
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
          <div className="p-6 border-b border-white/10 bg-gradient-to-r from-[#2a5da5] to-[#1e293b]/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-blue-300 p-1">
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
              {/* Home Button */}
              <NavLink
                to="/"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-2 rounded-xl transition-all duration-300 group ${
                    isActive ? 'bg-white/10' : 'hover:bg-white/5'
                  }`
                }
              >
                <Home className={`w-5 h-5 ${location.pathname === '/' ? 'text-white' : 'text-white/70 group-hover:text-[#ff9800]'}`} />
                <span className="text-white font-medium text-lg group-hover:text-[#ff9800]">Home</span>
              </NavLink>

             

              {/* About Us Button */}
              <NavLink
                to="/about"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive ? 'bg-white/10' : 'hover:bg-white/5'
                  }`
                }
              >
                <Info className={`w-5 h-5 ${location.pathname === '/about' ? 'text-white' : 'text-white/70 group-hover:text-[#ff9800]'}`} />
                <span className="text-white font-medium text-lg group-hover:text-[#ff9800]">About Us</span>
              </NavLink>

             
              {/* Contact Us Button */}
              <NavLink
                to="/contact"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive ? 'bg-white/10' : 'hover:bg-white/5'
                  }`
                }
              >
                <Contact className={`w-5 h-5 ${location.pathname === '/contact' ? 'text-white' : 'text-white/70 group-hover:text-[#ff9800]'}`} />
                <span className="text-white font-medium text-lg group-hover:text-[#ff9800]">Contact Us</span>
              </NavLink>

             

              {/* Our Brand Button */}
              <NavLink
                to="/brand"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive ? 'bg-white/10' : 'hover:bg-white/5'
                  }`
                }
              >
                <Building2 className={`w-5 h-5 ${location.pathname === '/brand' ? 'text-white' : 'text-white/70 group-hover:text-[#ff9800]'}`} />
                <span className="text-white font-medium text-lg group-hover:text-[#ff9800]">Our Brand</span>
              </NavLink>

             

              {/* Our Clients Button */}
              <NavLink
                to="/about#clients"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    location.pathname === '/about' && location.hash === '#clients' ? 'bg-white/10' : 'hover:bg-white/5'
                  }`
                }
              >
                <User className={`w-5 h-5 ${location.pathname === '/about' && location.hash === '#clients' ? 'text-white' : 'text-white/70 group-hover:text-[#ff9800]'}`} />
                <span className="text-white font-medium text-lg group-hover:text-[#ff9800]">Our Clients</span>
              </NavLink>

           
              {/* Shop Now Button */}
              <NavLink
                to="/shop"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive ? 'bg-white/10' : 'hover:bg-white/5'
                  }`
                }
              >
                <ShoppingBag className={`w-5 h-5 ${location.pathname === '/shop' ? 'text-white' : 'text-white/70 group-hover:text-[#ff9800]'}`} />
                <span className="text-white font-medium text-lg group-hover:text-[#ff9800]">Shop Now</span>
              </NavLink>

            

              {/* Products Button with Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 group hover:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <Package className="w-5 h-5 text-white/70 group-hover:text-[#ff9800]" />
                    <span className="text-white font-medium text-lg group-hover:text-[#ff9800]">Products</span>
                  </div>
                  {isProductsOpen ? (
                    <ChevronUp className="w-5 h-5 text-white/70" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/70" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isProductsOpen && (
                  <div className="ml-8 pl-4 space-y-1 border-l border-white/10">
                    <NavLink
                      to="/Catalog/BusinessDesktop"
                      onClick={handleNavClick}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-white/5"
                    >
                      <Cpu className="w-4 h-4 text-white/60 group-hover:text-[#ff9800]" />
                      <span className="text-white/80 text-sm group-hover:text-[#ff9800]">Desktop</span>
                    </NavLink>
                    
                    <NavLink
                      to="/Catalog/BusinessLaptop"
                      onClick={handleNavClick}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-white/5"
                    >
                      <Laptop className="w-4 h-4 text-white/60 group-hover:text-[#ff9800]" />
                      <span className="text-white/80 text-sm group-hover:text-[#ff9800]">Laptop</span>
                    </NavLink>
                    
                    <NavLink
                      to="/Catalog/FullHDMonitor"
                      onClick={handleNavClick}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-white/5"
                    >
                      <Monitor className="w-4 h-4 text-white/60 group-hover:text-[#ff9800]" />
                      <span className="text-white/80 text-sm group-hover:text-[#ff9800]">Monitor</span>
                    </NavLink>
                    
                    <NavLink
                      to="/Catalog/HomeNetworking"
                      onClick={handleNavClick}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-white/5"
                    >
                      <Wifi className="w-4 h-4 text-white/60 group-hover:text-[#ff9800]" />
                      <span className="text-white/80 text-sm group-hover:text-[#ff9800]">Networking</span>
                    </NavLink>
                    
                    <NavLink
                      to="/Catalog/KeyboardMouse"
                      onClick={handleNavClick}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-white/5"
                    >
                      <Mouse className="w-4 h-4 text-white/60 group-hover:text-[#ff9800]" />
                      <span className="text-white/80 text-sm group-hover:text-[#ff9800]">Accessories</span>
                    </NavLink>
                    
                    <NavLink
                      to="/Catalog/InkjetPrinter"
                      onClick={handleNavClick}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-white/5"
                    >
                      <Printer className="w-4 h-4 text-white/60 group-hover:text-[#ff9800]" />
                      <span className="text-white/80 text-sm group-hover:text-[#ff9800]">Printer</span>
                    </NavLink>
                    
                    <NavLink
                      to="/Catalog/BusinessProjector"
                      onClick={handleNavClick}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-white/5"
                    >
                      <Video className="w-4 h-4 text-white/60 group-hover:text-[#ff9800]" />
                      <span className="text-white/80 text-sm group-hover:text-[#ff9800]">Projector</span>
                    </NavLink>
                    
                   
                    
                    <NavLink
                      to="/Catalog/LEDDigitalDisplay"
                      onClick={handleNavClick}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-white/5"
                    >
                      <Tv className="w-4 h-4 text-white/60 group-hover:text-[#ff9800]" />
                      <span className="text-white/80 text-sm group-hover:text-[#ff9800]">Digital Display</span>
                    </NavLink>
                    
                    <NavLink
                      to="/Catalog/ApplicationServers"
                      onClick={handleNavClick}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-white/5"
                    >
                      <Server className="w-4 h-4 text-white/60 group-hover:text-[#ff9800]" />
                      <span className="text-white/80 text-sm group-hover:text-[#ff9800]">Server</span>
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Divider after Products */}
              <div className="px-2 py-1">
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {/* Login Button */}
              <NavLink
                to="/login"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive ? 'bg-white/10' : 'hover:bg-white/5'
                  }`
                }
              >
                <LogIn className={`w-5 h-5 ${location.pathname === '/login' ? 'text-white' : 'text-white/70 group-hover:text-[#ff9800]'}`} />
                <span className="text-white font-medium text-lg group-hover:text-[#ff9800]">Login</span>
              </NavLink>

              
            </div>

          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;