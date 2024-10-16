import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Item from './Pages/Item';
import Home from './Pages/Home';
import Food from './Pages/Food';
import Drinks from './Pages/Drinks';
import Others from './Pages/Others';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import { Cart } from './Pages/Cart';
import Signup from './Pages/Signup.js'
import Login from './Pages/Login.js'
import LoginBar from './components/login-bar.js';
import Header from './components/Header.js';

function App() {

  return (
    <>
      <Router>
        <div className='header'>
          <Header />
        </div>
        <LoginBar />
        <Navbar />
        <hr className='Custom-hr'></hr>




        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/About" element={<About />} />
          <Route path='/Food' element={<Food />} />
          <Route path='/Drinks' element={<Drinks />} />
          <Route path='/Others' element={<Others />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route component={NotFound} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
