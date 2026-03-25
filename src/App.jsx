import React, { useRef, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react'; // Add this import

// ========== COMPONENTS (All your original imports preserved) ==========
import Navbar from "./Components/Navbar/Navbar";
import TopMenu from "./Components/TopMenu/TopMenu";
import TermsPage from "./Components/TermsPage";
import CompanyStats from "./Components/CompanyStats/CompanyStats";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Footer.tsx";
import TopProducts from "./Components/TopProducts.tsx";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login.jsx";
import Brand from "./Components/Brand/Brand.tsx";
import About from "./Components/About/About.tsx";
import FridayPromo from "./Components/FridayPromo.js";
import HeroSection from "./Components/HeroSection.tsx";
import Contact from "./Components/Contact/Contact.jsx";
import AboutCards from "./Components/AboutCard";
import DataCenterPage from "./Components/DataCenterPage";
import Why from "./Components/Why.tsx";
import LetUsMeet from "./Components/LetUsMeet";
import BrandShowcase from "./Components/BrandShowcase.tsx";
import Catalog from "./pages/Catalog.js";

// ========== DATA (Preserved exactly) ==========
import {
  laptopsData,
  desktopData,
  monitorData,
  displayData,
  printerData,
  networkingData,
} from "./Components/Products/productsData.jsx";

// ========== SCROLL TO TOP (Fixed "instant" bug) ==========
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Fixed: "instant" is not standard, using 0,0 works everywhere
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// ========== MAIN APP COMPONENT ==========
const App = () => {
  // ========== REFS (All original refs preserved + new networkingRef) ==========
  const laptopsRef = useRef(null);
  const gamingRef = useRef(null);      // For Desktops
  const officeRef = useRef(null);      // For Monitors
  const displayRef = useRef(null);     // For Display Equipment
  const printersRef = useRef(null);
  const networkingRef = useRef(null);  // NEW: Separate ref for networking (fixes duplicate)

  // ========== SCROLL FUNCTION (Enhanced with all your original cases) ==========
  const scrollToSection = (category) => {
    // Your original switch statement - FULLY PRESERVED
    switch (category) {
      case "Laptop":
        laptopsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Desktop":
        gamingRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Monitor":
        officeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Networking":
        networkingRef.current?.scrollIntoView({ behavior: "smooth" }); // FIXED: Now uses dedicated ref
        break;
      case "Printer":
        printersRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Display":
        displayRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        <Navbar />
        <TopMenu />
        <ScrollToTop />

        <Routes>
          {/* ===== CATALOG ROUTES ===== */}
          <Route path="/catalog">
            <Route index element={<Catalog />} />
            <Route path=":category" element={<Catalog />} />
          </Route>
          
          {/* ===== OTHER PAGES ===== */}
          <Route path="/datacenter" element={<DataCenterPage />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/shop" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* ===== PRODUCT CATEGORY PAGES ===== */}
          <Route
            path="/products/laptops"
            element={
              <div className="pt-24">
                <Products
                  title="Laptops"
                  productsData={laptopsData}
                  category="laptops"
                />
              </div>
            }
          />

          <Route
            path="/products/desktops"
            element={
              <div className="pt-24">
                <Products
                  title="Desktops"
                  productsData={desktopData}
                  category="desktops"
                />
              </div>
            }
          />

          <Route
            path="/products/printers"
            element={
              <div className="pt-24">
                <Products
                  title="Printers"
                  productsData={printerData}
                  category="printers"
                />
              </div>
            }
          />

          <Route
            path="/products/networking"
            element={
              <div className="pt-24">
                <Products
                  title="Networking"
                  productsData={networkingData}
                  category="networking"
                />
              </div>
            }
          />

          {/* ===== HOME ROUTE (ALL YOUR COMPONENTS PRESERVED IN EXACT ORDER) ===== */}
          <Route
            path="/"
            element={
              <div>
                {/* Hero Section */}
                <HeroSection />
                <FridayPromo />
                <TopProducts onViewMore={scrollToSection} />

                {/* Products Sections - ALL REFS PRESERVED + NEW networkingRef */}
                <Products
                  title="Latest Laptops"
                  productsData={laptopsData}
                  ref={laptopsRef}
                  category="laptops"
                />
                <Products
                  title="Latest Desktops"
                  productsData={desktopData}
                  ref={gamingRef}
                  category="desktop"
                />
                <Products
                  title="Pupular Monitor"
                  productsData={monitorData}
                  ref={officeRef}
                  category="monitor"
                />
                <Products
                  title="Printer Equipment"
                  productsData={printerData}
                  ref={printersRef}
                  category="printer"
                />
                <Products
                  title="Display Equipment"
                  productsData={displayData}
                  ref={displayRef}
                  category="display"
                />
                <Products
                  title="Networking Equipment"
                  productsData={networkingData}
                  ref={networkingRef}  // FIXED: Now uses dedicated ref
                  category="networking"
                />

                {/* Bottom Sections - ALL PRESERVED */}
                <CompanyStats />
                <Partners />
                <Why />
                <BrandShowcase />
                <AboutCards />
                <LetUsMeet />
              </div>
            }
          />
        </Routes>

        <Footer />
        <Analytics /> {/* Add Analytics component here */}
      </div>
    </Router>
  );
};

export default App;