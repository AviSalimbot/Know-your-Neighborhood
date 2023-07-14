import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class About extends Component {
    render(){
        return (
            <div className=''>
                <h1 className="text-center mt-5 ps-5 pt-5 pb-5 mb-0" style={{ fontSize: "3em", fontWeight: 700}}>About Us</h1>
                <div className='container' style={{ width: "70%" }}>
                    <p className='text-center mx-5 px-5 pb-5 mb-3'>Know Your Neighborhood is a trusted platform committed to delivering reliable and accurate information about your local community.<br/>
                    With a team of dedicated experts and a rigorous verification process, we ensure that the information we provide<br/> is up-to-date and trustworthy. </p>
                </div>
                <div className='container mb-5 pb-5' style={{ width: "50%" }}>
                        <div className='row '>
                            <div className='col-4 px-0'>
                                <img className="" style={{ width: "100%" }} src="group.jpg" alt="dots" />
                            </div>
                            <div className='col-4 text-center'>
                                <h5 className='mt-5 py-5'style={{ fontSize: "2.5em", fontWeight: 700 }}>Mission</h5>
                            </div>
                            <div className='col-4 px-0'>
                                <img className="" style={{ width: "100%" }} src="team.jpg" alt="dots" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 text-center'>
                                <h5 className='mt-5 py-5'style={{ fontSize: "2.5em", fontWeight: 700 }}>Vision</h5>
                            </div>
                            <div className='col-4 px-0'>
                                <img className="" style={{ width: "100%" }} src="uphere.jpg" alt="dots" />
                            </div>
                            <div className='col-4 text-center'>
                                <h5 className='mt-5 py-5'style={{ fontSize: "2.5em", fontWeight: 700 }}>Values</h5>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default About;