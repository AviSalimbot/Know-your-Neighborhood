import './App.css';
import Home from './component/Home';
import axios from 'axios';
import $ from 'jquery';
import React, { Component } from 'react';
import Register from './component/Register';
import Login from './component/Login';
import About from './component/About';
import Contact from './component/Contact';
import Terms from './component/Terms';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class Header extends Component {
    render(){

        return(
            <Router>
      
        <div className="bg-black text-center text-white px-5 sticky-top loggedIn" style={{ display: 'none' }}>
          <div className="App">
            <div className="d-flex">
              <div className="me-auto p-2"><h3>KYN</h3></div>
              <div className="p-2 my-auto"><Link to="/" className="text-decoration-none text-white">Home</Link></div>
              <div className="p-2 my-auto"><Link to="/register" className="text-decoration-none text-white">Register</Link></div>
              <div className="p-2 my-auto"><Link to="/login" className="text-decoration-none text-white">Login</Link></div>
            </div>
          </div>
        </div>
      
        <div className="bg-black text-center text-white px-5 sticky-top loggedOut" id='loggedOut'>
          <div className="App">
            <div className="d-flex">
              <div className="me-auto p-2"><h3>KYN</h3></div>
              <div className="p-2 my-auto"><Link to="/" className="text-decoration-none text-white">Home</Link></div>
              <div className="p-2 my-auto"><Link to="/register" className="text-decoration-none text-white">Register</Link></div>
              <div className="p-2 my-auto"><Link to="/login" className="text-decoration-none text-white">Login</Link></div>
              <div className="p-2 my-auto"><Link to="/about" className="text-decoration-none text-white">About</Link></div>
              <div className="p-2 my-auto"><Link to="/contact" className="text-decoration-none text-white">Contact</Link></div>
              <div className="p-2 my-auto"><Link to="/terms" className="text-decoration-none text-white">Terms</Link></div>
            </div>
          </div>
        </div>
      

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/terms" element={<Terms/>}/>
          
        </Routes>
        
    </Router>
        )
    }
}
export default Header;