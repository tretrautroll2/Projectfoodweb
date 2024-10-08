import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Item from './Pages/Item';
import Home from './Pages/Home';
import Food from './Pages/Food';
import Drinks from './Pages/Drinks';
import Others from './Pages/Others';
import About from './Pages/About';
function App() {
  return (
    <>
  <Router>
     
      
  <h1>Legendary Items Market</h1>
    
  <Navbar />
  <Routes>
  <Route path='/' element={<About />} />
  <Route path="/item/:id" element={<Item />} />
  <Route path="/Home" element={<Home />} />
  <Route path='/Food' element={<Food />} />
  <Route path='/Drinks' element={<Drinks />} />
  <Route path='/Others' element={<Others />} />
  </Routes>
  </Router>
    </>
  );
}

export default App;
