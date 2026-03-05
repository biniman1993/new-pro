import React, { useRef } from "react";
//npm run dev -- --host
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import TopMenu from "./Components/TopMenu/TopMenu";
import TermsPage from "./Components/TermsPage";

import Carousel from "./Components/Carousel/Carousel";
import CompanyStats from "./Components/CompanyStats/CompanyStats";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Footer.tsx";
import TopProducts from "./Components/TopProducts.tsx";
import Products from "./Components/Products/Products";
import Logobrand from "./Components/Logo/Logobrand.jsx";

import Login from "./Components/Login/Login.jsx";
import Brand from "./Components/Brand/Brand.tsx";
import ContactPage from "./Components/style/ContactPage.jsx";
import About from "./Components/About/About.tsx";
import FridayPromo from "./Components/FridayPromo.js";
import Aboutwhy from "./Components/About/Why/Aboutwhy.jsx";
import HeroSection from "./Components/HeroSection.tsx";
import Contact from "./Components/Contact/Contact.jsx";
import AboutCards from "./Components/AboutCard";
import DataCenterPage from "./Components/DataCenterPage";

import {
  laptopsData,
  desktopData,
  monitorData,
  displayData,
  printerData,
  networkingData,
} from "./Components/Products/productsData.jsx";
import Catalog from "./pages/Catalog.js";
import Why from "./Components/Why.tsx";
import LetUsMeet from "./Components/LetUsMeet";
import BrandShowcase from "./Components/BrandShowcase.tsx";


// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  // Refs for smooth scrolling
  const laptopsRef = useRef(null);
  const gamingRef = useRef(null);
  const officeRef = useRef(null);
  const displayRef = useRef(null);
  const printersRef = useRef(null);

  const scrollToSection = (category) => {
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
        displayRef.current?.scrollIntoView({ behavior: "smooth" });
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
    <Router>
      <div className="App">
        <Navbar />
        <TopMenu />
        <ScrollToTop />

        <Routes>
          {/* Catalog Routes */}
          <Route path="/catalog">
            <Route index element={<Catalog />} />
            <Route path=":category" element={<Catalog />} />
          </Route>
          <Route path="/datacenter" element={<DataCenterPage />} />
          {/* Other Routes */}
          <Route path="/brand" element={<Brand />} />
          <Route path="/shop" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
<Route path="/terms" element={<TermsPage />} />

          {/* ===== PRODUCT CATEGORY ROUTES ===== */}
          {/* These must come BEFORE the home route */}

          {/* Laptops Page */}
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

          {/* Desktops Page */}
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

          {/* Printers Page */}
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
          {/* Networking Page */}
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
          {/* ===== HOME ROUTE (ALWAYS LAST) ===== */}
          <Route
            path="/"
            element={
              <div>
                <div>
                  <HeroSection />
                  <FridayPromo />
                  <TopProducts onViewMore={scrollToSection} />

                  {/* Products sections with refs and category props */}
                  <Products
                    title="Top-Rated Laptops"
                    productsData={laptopsData}
                    ref={laptopsRef}
                    category="laptops"
                  />
                  <Products
                    title="Desktop Products"
                    productsData={desktopData}
                    ref={gamingRef}
                    category="desktop"
                  />
                  <Products
                    title="Monitor Equipment"
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
                    ref={displayRef}
                    category="networking"
                  />

                  <CompanyStats />
                  <Partners />
                  <Why />
                  <BrandShowcase />
                  <AboutCards />
                  <LetUsMeet />
                </div>
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
