import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Item from './Pages/Item';
import Home from './Pages/Home';
import Food from './Pages/Food';
import Drinks from './Pages/Drinks';
import Others from './Pages/Others';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Logo from './Pages/img/Logo.webp'
function App() {
  return (
  <>
  <Router>
  <div className='header'>       
  <h1 className='Page-title'><img src={Logo} className='logo'alt='Page Logo'></img>Legendary Items Market</h1>
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
  <Route component={NotFound} />  
  </Routes>
  </Router>
  </>
  );
}

export default App;
