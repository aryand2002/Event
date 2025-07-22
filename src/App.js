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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CatalogItems from './components/CatalogItems';
import ItemDetails from './components/ItemDetails';
import Login from './auth/Login';
import { Toaster } from 'react-hot-toast';
import Register from './auth/Register';



function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>

        <Nav />
        <Routes>
          <Route path='/' element={
            <>

              <Hero />
              <Functions />
              <Catalog />
              <Offer />
              <Services />
              <Testimonials />
              <WhyChooseUs />
              <Faq />
              <Contact />
              <FloatingButtons />
            </>
          } />

          <Route path='/catalogItems' element={<CatalogItems />} />
          <Route path='/itemDetails' element={<ItemDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
