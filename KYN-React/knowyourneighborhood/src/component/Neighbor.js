import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';

class Neighbor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResults: [], // Initialize displayResults as an empty array
    };
  }

  componentDidMount() {
    axios.get('viewUsers')
      .then((res) => {
        this.setState({
          displayResults: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const header = <tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Username</th><th>Phone Number</th><th>Address</th></tr>;
    const data = this.state.displayResults.map((user, key) => (
      <tr key={key}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.userName}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.address}</td>
      </tr>
    ));

    return (
            
      <div className='container my-5 py-5 '>
        {/* <img className="position-absolute" style={{ minWidth: "100%" }} src="neighborhood.jpg" alt="neighborhood" />
         */}
        <h1 className="text-center ps-5 pt-5 pb-0" style={{ fontSize: "3.5em", fontWeight: 700}}>REGISTERED NEIGHBORS</h1>
        
        <div className='d-flex justify-content-evenly mt-5'>                         
            <hr className="col-5 py-2 mb-0"></hr>
            <i  class="bi bi-journal-check"></i>
            <hr className="col-5 py-2 mb-0"></hr>
        </div>

        <div className='container d-flex justify-content-center pb-5 mb-5 pt-5'>
          <table border="1" className='table table-dark table-striped'>
            <thead>{header}</thead>
            <tbody>{data}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Neighbor;
