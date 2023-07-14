import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
    render(){
        return (
            <div className="align-items-center position-relative" style={{ height: "100vh", overflow: "hidden" }}>
            <img className="position-absolute" style={{ minWidth: "100%" }} src="neighborhood.jpg" alt="neighborhood" />

            <div className="mx-5">
                <div className="row pt-5">
                <div className="col pt-5 mt-5">
                    <h1 className="text-white text-center ps-5 pt-5 pb-0 mb-0" style={{ fontSize: "6.5em", fontWeight: 700, position: "relative", top: "50px" }}>KNOW YOUR<br />NEIGHBORHOOD</h1>
                    <p className="text-white text-center ps-5 pt-5" style={{ fontSize: "1.5em", fontWeight: 200, position: "relative", top: "50px" }}>For you, your family, and your neighborhood's safety.</p>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;
