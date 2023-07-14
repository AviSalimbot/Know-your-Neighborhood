import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class Contact extends Component {

    render(){
        return (
            <div className=''>
                <h1 className="text-center mt-5 ps-5 pt-5 pb-5 mb-0" style={{ fontSize: "3em", fontWeight: 700}}>Contact Us</h1>
                <div className='container' style={{ width: "70%" }}>
                    <p className='text-center mx-5 px-5 pb-5'>We value your feedback and are here to assist you. Whether you have questions, suggestions, or need assistance, please don't hesitate to reach out to us. Our team is dedicated to providing prompt and helpful support for all your inquiries<br/> about Know Your Neighborhood.</p>
                </div>
                <div className='container mb-5 pb-5' style={{ width: "50%" }}>
                        <div className='row '>
                            <div className='col-4 px-0'>
                                <img className="" style={{ width: "100%" }} src="dots.jpg" alt="dots" />
                            </div>
                            <div className='col-4 text-center'>
                                <h5 className='mt-5 py-3'style={{ fontWeight: 700 }}>Address</h5>
                                <p>6000 Gov. M. Cuenco Ave,<br/> Cebu City, 6000 Cebu
                                </p>
                            </div>
                            <div className='col-4 px-0'>
                                <img className="" style={{ width: "100%" }} src="call.jpg" alt="dots" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 text-center'>
                                <h5 className='mt-5 py-3'style={{ fontWeight: 700 }}>Email</h5>
                                <p>kyn@email.com<br/>
                                kyn@support.com<br/>
                                kyn_official@email.com</p>
                            </div>
                            <div className='col-4 px-0'>
                                <img className="" style={{ width: "100%" }} src="482.jpg" alt="dots" />
                            </div>
                            <div className='col-4 text-center'>
                                <h5 className='mt-5 py-3'style={{ fontWeight: 700 }}>Phone</h5>
                                <p>09123456789<br/>
                                09987654321<br/>
                                091264829465</p>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default Contact;