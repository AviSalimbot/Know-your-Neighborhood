import React, {Component} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import $ from 'jquery';

class Register extends Component {

    constructor(){
        super();
        this.state={
            "firstName":'',
            "lastName":'',
            "userName":'',
            "email":'',
            "password":'',
            "phoneNumber":'',
            "address":''
        }
    };

    firstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    };

    lastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    };

    userNameChange = (event) => {
        this.setState({ userName: event.target.value });
    };

    emailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    passwordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    phoneNumberChange = (event) => {
        this.setState({ phoneNumber: event.target.value });
    };

    addressChange = (event) => {
        this.setState({ address: event.target.value });
    };

    register = (event) => {
        alert(this.state.firstName + " " + this.state.lastName );
        axios.post('addUser',this.state)
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        });
    };


    render(){
        return (
            <div className="align-items-center position-relative" style={{ height: "100vh", overflow: "hidden" }}>
            <img className="position-absolute" style={{ minWidth: "100%" }} src="neighborhood.jpg" alt="neighborhood" />
            <h1 className="text-white text-center ps-5 pt-5 pb-0 mb-0" style={{ fontSize: "3em", fontWeight: 700, position: "relative", top: "50px" }}>REGISTRATION</h1>
                    
                <div className='container mt-5 border p-5 pt-0 rounded' style={{ width: '50%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>


                        <div className='row justify-content-evenly mt-5'>                         
                            <hr className="col-4 py-2 mb-0"></hr>
                            <p type="button" className="col-4 py-2 mb-0 text-center" style={{ position: "relative", top: "-20px" }}>Don't have an account? Register!</p>
                            <hr className="col-4 py-2 mb-0"></hr>
                        </div>

                        <form onSubmit={this.register} className='m-2 d-grid'>

                            <div className='row'>
                                <div className='form-group mb-3 col-6'>
                                    <label htmlFor='firstName'>First Name</label>
                                    <input 
                                    type='text' 
                                    className='form-control'
                                    id='firstName'
                                    value={this.state.firstName}
                                    onChange={this.firstNameChange}
                                    />
                                </div>

                                <div className='form-group mb-3 col-6'>
                                    <label htmlFor='lastName'>Last Name</label>
                                    <input 
                                    type='text' 
                                    className='form-control'
                                    id='lastName'
                                    value={this.state.lastName}
                                    onChange={this.lastNameChange}
                                    />
                                </div>
                            </div>

                            <div className='form-group mb-3'>
                                <label htmlFor='userName'>Username</label>
                                <input 
                                type='text' 
                                className='form-control'
                                id='userName'
                                value={this.state.userName}
                                onChange={this.userNameChange}
                                />
                            </div>

                            <div className='form-group mb-3'>
                                <label htmlFor='email'>Email Address</label>
                                <input 
                                type='email' 
                                className='form-control'
                                id='email'
                                value={this.state.email}
                                onChange={this.emailChange}
                                />
                            </div>

                            <div className='form-group mb-3'>
                                <label htmlFor='password'>Password</label>
                                <input 
                                type='password' 
                                className='form-control'
                                id='password'
                                value={this.state.password}
                                onChange={this.passwordChange}
                                />
                            </div>

                            <div className='row'>
                                <div className='form-group mb-3 col-6'>
                                    <label htmlFor='phoneNumber'>Phone Number</label>
                                    <input 
                                    type='text' 
                                    className='form-control'
                                    id='phoneNumber'
                                    value={this.state.phoneNumber}
                                    onChange={this.phoneNumberChange}
                                    />
                                </div>

                                <div className='form-group mb-3 col-6'>
                                    <label htmlFor='address'>Address</label>
                                    <input 
                                    type='text' 
                                    className='form-control'
                                    id='address'
                                    value={this.state.address}
                                    onChange={this.addressChange}
                                    />
                                </div>
                            </div>

                            <button type='submit' className='btn btn-outline-dark px-5 mt-3'>Register</button>

                        </form>
                </div>
            </div>
        );
    }
}

export default Register;