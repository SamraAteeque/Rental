import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import CategorySection from "./components/CategorySection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Signup from "./components/Signup";
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CategorySection />
                <HowItWorks />
                <Testimonials />
                <CTA />
                <Footer />
              </>
            }
          />

          {/* ✅ Signup Page */}
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
