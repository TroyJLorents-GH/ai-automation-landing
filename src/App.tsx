import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import Services from './components/Services';
import Problems from './components/Problems';
import CaseStudy from './components/CaseStudy';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Success from './components/Success';
import ChatWidget from './components/ChatWidget';
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

  // Show main landing page with optimized section order:
  // Hero → TrustLogos → Services → Problems → CaseStudy → HowItWorks → Pricing → Contact → Footer
  // This order leads with what you do (services), connects pain points, proves with case study,
  // explains process, then pricing to convert
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustLogos />
      <Services />
      <Problems />
      <CaseStudy />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
