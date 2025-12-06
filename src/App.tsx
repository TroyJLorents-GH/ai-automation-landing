import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import CaseStudy from './components/CaseStudy';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Success from './components/Success';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'success' | 'pricing'>('home');

  useEffect(() => {
    // Simple routing based on URL path
    const path = window.location.pathname;
    
    if (path === '/success') {
      setCurrentPage('success');
    } else if (path === '/pricing') {
      setCurrentPage('pricing');
      // Scroll to pricing section after a short delay
      setTimeout(() => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setCurrentPage('home');
    }

    // Handle hash navigation (e.g., /#contact)
    const hash = window.location.hash;
    if (hash && currentPage === 'home') {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  // Show success page
  if (currentPage === 'success') {
    return <Success />;
  }

  // Show main landing page
  return (
    <div className="min-h-screen">
      <Hero />
      <Problems />
      <Services />
      <HowItWorks />
      <CaseStudy />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
