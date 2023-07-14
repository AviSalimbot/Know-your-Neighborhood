import './App.css';
import Home from './component/Home';
import axios from 'axios';
import $ from 'jquery';
import React, { Component, useEffect, useState, useRef } from 'react';
import Register from './component/Register';
import Login from './component/Login';
import About from './component/About';
import Contact from './component/Contact';
import Terms from './component/Terms';
import Neighbor from './component/Neighbor';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [user, setUser] = useState(null);
  const myDivRef = useRef(null);
  const googleLogout = useRef(null);
  const loggedInNav = useRef(null);
  const facebookLogout = useRef(null);

  useEffect(() => {

    const storedUser = localStorage.getItem('user');

    //Fetch Facebook User
    axios.get("/user")
    .then(response => {
      // User exist
      if (response.data !== "") {
        loggedInNav.current.style.display = 'block';
        myDivRef.current.style.display = 'none';
        facebookLogout.current.style.display = 'block';
      } 
      // Google or Normal User
      else if (storedUser){
        setUser(JSON.parse(storedUser));
        loggedInNav.current.style.display = 'block';
        myDivRef.current.style.display = 'none';
        googleLogout.current.style.display = 'block';
      } 
      // User does not exist
      else {
        loggedInNav.current.style.display = 'none';
        myDivRef.current.style.display = 'block';
      }
    })
    .catch(error => {
      console.log(error);
    });
  })

  //Logout
  const handleSignOut = () => {
    // Clear stored user data
    localStorage.removeItem('user');

    // Reset component state
    setUser(null);
    
    const google = window.google;
    // Sign out from Google
    if (typeof google !== "undefined" && google.accounts && google.accounts.id) {
      google.accounts.id.revoke(localStorage.getItem('G-oauth2-id_token'), function () {
        console.log('User signed out from Google.');
      });
    }

    window.location.reload();
  };

  return (
    <Router>
      
        <div className="bg-black text-center text-white px-5 sticky-top loggedInNav" style={{ display: 'none' }}  ref={loggedInNav}>
          <div className="App">
            <div className="d-flex">
              <div className="me-auto p-2"><h3>KYN</h3></div>
              <div className="p-2 my-auto"><Link to="/" className="text-decoration-none text-white">Home</Link></div>
              <div className="p-2 my-auto"><Link to="/list" className="text-decoration-none text-white">Neighbor</Link></div>
              <div className="p-2 my-auto"><Link to="/login" className="text-decoration-none text-white">Login</Link></div>
              <button type="button" className="btn btn-danger ms-3 my-3" onClick={handleSignOut} style={{ display: 'none' }} ref={googleLogout}>Logout</button>
              <a href="http://localhost:9091/logout" type="button" className="text-decoration-none text-white btn btn-danger ms-3 my-3" style={{ display: 'none' }}  ref={facebookLogout}>Logout</a>
            </div>
          </div>
        </div>
      
        <div className="bg-black text-center text-white px-5 sticky-top loggedOutNav" id='loggedOut' ref={myDivRef}>
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
          <Route path="/list" element={<Neighbor/>}/>
        </Routes>

        <footer className='text-white bg-black' style={{ padding: '20px', textAlign: 'center' }}>
          <p>© 2023 Know Your Neighborhood. All rights reserved.</p>
        </footer>
        
    </Router>
      
  );
}

export default App;
