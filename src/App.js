
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Carousel from './components/Carousel';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import MoreDetails from './components/MoreDetails';





function App() {
  return (
    <Router>
      {/* Navbar stays visible on all pages */}
      <Navbar />

      <Routes>
        {/* Main landing page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Carousel />
              <Product />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* "SEE MORE" button target page */}
        <Route path="/more-details" element={<MoreDetails/>} />
        <Route path="/login" element={<Login />} />
         <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      
    </Router>
  );
}

export default App;
