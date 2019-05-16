import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import BitsCard from '../components/Bits/BitsCard';


class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {

    return (
      <div className="container">
        
              <h4>
                You are logged in! You can now view your
              </h4>
              <div className="col-12">
            <BitsCard/>
            </div>
      </div>
    );
  }
}

export default Home;
