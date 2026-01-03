import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import TopMenu from "./Components/TopMenu/TopMenu";
import Carousel from "./Components/Carousel/Carousel";
import CompanyStats from "./Components/CompanyStats/CompanyStats";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Navbar/Footer/Footer";
import TopProducts from "./Components/TopProducts/TopProducts";
import Products from "./Components/Products/Products";
import Logo from "./Components/logo/Logo";
import Logobrand from "./Components/Logo/Logobrand.jsx";
import Login from "./Components/Login/Login.jsx";
import Brand from "./Components/Brand/Brand.jsx";
import ContactPage from "./Components/style/ContactPage.jsx";
import About from "./Components/About/About.jsx";
import FridayPromo from "./Components/FridayPromo.js";
import Aboutwhy from "./Components/About/Why/Aboutwhy.jsx";
import HeroSection from "./Components/HeroSection.tsx";
import Contact from "./Components/Contact/Contact.jsx";
import {
  laptopsData,
  gamingProductsData,
  officeProductsData,
  displayProductsData,
  printersProductsData,
} from "./Components/Products/productsData.jsx";
import Catalog from "./pages/Catalog.js";

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

        <Routes>
          {/* Catalog Routes */}
          <Route path="/catalog">
            <Route index element={<Catalog />} />
            <Route path=":category" element={<Catalog />} />
          </Route>

          {/* Other Routes */}
          <Route path="/brand" element={<Brand />} />
          <Route path="/shop" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Home Route */}
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
                    productsData={gamingProductsData}
                    ref={gamingRef}
                    category="desktop"
                  />
                  <Products
                    title="Monitor Equipment"
                    productsData={officeProductsData}
                    ref={officeRef}
                    category="monitor"
                  />
                  <Products
                    title="Printer Equipment"
                    productsData={printersProductsData}
                    ref={printersRef}
                    category="printer"
                  />
                  <Products
                    title="Display Equipment"
                    productsData={displayProductsData}
                    ref={displayRef}
                    category="display"
                  />

                  <CompanyStats />
                  <Partners />
                  <Logo />
                  <Aboutwhy />
                  <Logobrand />
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