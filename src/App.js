import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Item from './Pages/Item';
import Home from './Pages/Home';
import Food, { AllFoodItems } from './Pages/Food';
import Drinks, { AllDrinksItems } from './Pages/Drinks';
import Others, { AllOtherItems } from './Pages/Others';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Logo from './Pages/img/Logo.webp'
import { Cart } from './Pages/Cart';

export const Allitems = [...AllFoodItems, ...AllDrinksItems, ...AllOtherItems]

function App() {
  return (
    <>
 
        <Router>
          <div className='header'>
            <h1 className='Page-title'><img src={Logo} className='logo' alt='Page Logo'></img>Legendary Items Market
              <Link to="/Cart" className='Page-title-Cart'>Cart</Link>
            </h1>

            <Navbar />
            <hr className='Custom-hr'></hr>
          </div>



          <Routes>
            <Route path='/' element={<About />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/Home" element={<Home />} />
            <Route path='/Food' element={<Food />} />
            <Route path='/Drinks' element={<Drinks />} />
            <Route path='/Others' element={<Others />} />
            <Route path='/Cart' element={<Cart />} />
            <Route component={NotFound} />
          </Routes>
        </Router>
    
    </>
  );
}

export default App;
