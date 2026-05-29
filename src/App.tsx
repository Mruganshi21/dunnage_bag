import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import WhatIsDunnage from './components/WhatIsDunnage/WhatIsDunnage';
import HappyCustomers from './components/HappyCustomers/HappyCustomers';
import Products from './pages/Products';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Admin from './pages/Admin/Admin';
import Gallery from './pages/Gallery/Gallery';
import Overview from './pages/Overview/Overview';
import Features from './pages/Overview/Features';
import Technical from './pages/Overview/Technical';
import Certificates from './pages/Overview/Certificates';
import Footer from './components/Footer/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutSection />
              <WhatIsDunnage />
              <HappyCustomers />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/overview/features" element={<Features />} />
          <Route path="/overview/technical" element={<Technical />} />
          <Route path="/overview/certificates" element={<Certificates />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;