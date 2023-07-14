import React, {Component, useState} from 'react';
import axios from 'axios';
import $ from 'jquery';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import jwtDecode from 'jwt-decode';
import GoogleLogin from 'react-google-login';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


class Login extends Component {

    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            user: {}
        }
    };
    
    componentDidMount() {

        // Initialize Google
        const google = window.google;
        if (typeof google !== "undefined" && google.accounts) {
            google.accounts.id.initialize({
                client_id: "403478482626-m67ihhdtb52brbhonkooknqcucfig5o2.apps.googleusercontent.com",
                callback: this.handleCallbackResponse.bind(this),
            });

            google.accounts.id.renderButton(document.getElementById("signInDiv"), {
                theme: "filled_white",
                size: "large",
                logo_alignment: "left",
                text: "signin_with",
                locale: "en_US",
            });
        } else {
            console.error("Google API library not loaded");
        }

         //Get Google or Normal User
         const storedUser = localStorage.getItem('user');
         if (storedUser) {
             this.setState({ user: JSON.parse(storedUser) });
             $(".glog").hide();
             $(".loggedIn").show();
             $(".unauthenticated").hide();
         }

        //Get Facebook User
        axios.get("/user")
            .then(response => {
                $("#user").html(response.data.userAuthentication.details.name);
                 $(".unauthenticated").hide();
                $(".authenticated").show();
            })
            .catch(error => {
                console.log(error);
            });
    }
      
    redirectToFacebookLogin = () => {
        window.location.href = "http://localhost:9091/login";
     };

    emailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    passwordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    // Google Login
    handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);
        this.setState({ user: userObject });
        console.log(this.state.user);

        localStorage.setItem('user', JSON.stringify(userObject));

        $(".glog").hide();
        $(".loggedIn").show();
        $(".unauthenticated").hide();

        window.location.reload();
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    
    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
    
        try {
          const response = await axios.post("http://localhost:9091/stsLogin?email="+this.state.email+"&password="+this.state.password);
          $("#normUser").html(response.data);
          if (response.data === "") {
            console.log("Invalid Credentials");
            alert("Invalid Credentials");
          } 
          else if (response.data !== null) {
            this.setState({ user: response.data });

            localStorage.setItem('user', JSON.stringify(response.data));
        
            console.log("Login Successful");

            $(".loggedIn").show();
            $(".unauthenticated").hide();

            window.location.reload();
          } 
        } catch (error) {
          console.log("Login failed:", error);
          alert(error);
        }
      };

   
    render(){

        return (
            
            <div className="align-items-center position-relative" style={{ height: "100vh", overflow: "hidden" }}>
            <img className="position-absolute" style={{ minWidth: "100%" }} src="neighborhood.jpg" alt="neighborhood" />
            <h1 className="text-white text-center ps-5 pt-5 pb-0 mb-0" style={{ fontSize: "3em", fontWeight: 700, position: "relative", top: "50px" }}>LOGIN</h1>

                <div className='container mt-3 border p-5 pt-0 rounded' style={{ width: '35%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>                        
                    
                    {/* Facebook Login Success */}    
                    <div className="container authenticated text-center pt-5" style={{display: 'none'}}>
                        <i style={{ fontSize: "3em"}} class="bi bi-person-fill-check"></i>
                        <br/>Logged in as:<br/>
                        <h6 className='mt-2'><span id="user"></span></h6>
                    </div>

                    {/* Google and Normal Login Success */} 
                    <div id='loggedIn' className='container loggedIn text-center pt-5' style={{display: 'none'}}>
                        <i style={{ fontSize: "3em"}} class="bi bi-person-fill-check"></i>

                        <br/>Logged in as:<br/>
                        <h6 className='mt-2'>{this.state.user.name}</h6>
                        <h6>{this.state.user.firstName}<span> {this.state.user.lastName}</span></h6>
                    </div>

                    <div className="container unauthenticated">
                         <div className='row justify-content-evenly mt-5'>                         
                            <hr className="col-4 py-2 mb-0"></hr>
                            <p type="button" className="col-4 py-2 mb-0 text-center" style={{ position: "relative", top: "-20px" }}>Login with:</p>
                            <hr className="col-4 py-2 mb-0"></hr>
                        </div>

                        <div className='row justify-content-evenly'>                         
                            <button type="button" class="btn btn-outline-dark col-5 border py-0 rounded text-white" style={{ backgroundColor: 'rgb(59, 89, 154)'}} onClick={this.redirectToFacebookLogin}><FontAwesomeIcon icon={faFacebookF} style={{ color: 'white' }} /> Facebook</button>
                            
                            <a className="btn btn-outline-dark col-5 border py-0 rounded"
                                                style={{ backgroundColor: 'white' }}
                                                href="#!"
                                                role="button">
                                                <div id="signInDiv" className='signInDiv mx-auto d-flex justify-content-center py-0 border-0'></div>
                                            </a>
                        </div>

                        <div className='row justify-content-evenly mt-5'>                         
                            <hr className="col-4 py-2 mb-0"></hr>
                            <p type="button" className="col-4 py-2 mb-0 text-center" style={{ position: "relative", top: "-20px", fontSize: "15px" }}>Login with email:</p>
                            <hr className="col-4 py-2 mb-0"></hr>
                        </div>
                        
                        <form className='m-2 d-grid' onSubmit={this.handleSubmit}>

                            <div className='form-group mb-3'>
                                <label htmlFor='email'>Email Address</label>
                                <input 
                                type='email' 
                                className='form-control'
                                id='email'
                                onChange={this.emailChange}
                                value={this.state.email}
                                />
                            </div>

                            <div className='form-group mb-3'>
                                <label htmlFor='password'>Password</label>
                                <input 
                                type='password' 
                                className='form-control'
                                id='password'
                                onChange={this.passwordChange}
                                value={this.state.password}
                                />
                            </div>

                            <button type='submit' className='btn btn-outline-dark px-5 mt-3'>Login</button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;