import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import CaseStudy from './components/CaseStudy';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
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
