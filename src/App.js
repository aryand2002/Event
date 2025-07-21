import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Functions from './components/Function'; // ✅ fixed here
import Offer from './components/Offer';
import Services from './components/Service';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/Whychoose';
import Faq from './components/Faq';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import Catalog from './components/Catalog';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Functions />
      <Offer />
      <Services />
     <Catalog />
      <Testimonials />
      <WhyChooseUs />
      <Faq />
      <Contact />
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
