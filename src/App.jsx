 
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Product";
 
import Contact from "./pages/Contact";

import "./index.css";
import About from './pages/About';
import Boneless from './sub-comp/Boneless';
import Curry from './sub-comp/curry-cut';
import Leg from './sub-comp/Leg-peice';
import Liver from './sub-comp/Liver';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/boneless" element={<Boneless />} />
         <Route path="/curry-cut" element={<Curry />} />
         <Route path="/leg-piece" element={<Leg />} />
         <Route path="/liver" element={<Liver/>} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
