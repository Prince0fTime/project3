import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    return (
      <div className="container">
        
              <h4>
                You are logged in! You can now view your{' '}
                <Link to="profile">profile area</Link>
                .
              </h4>
      </div>
    );
  }
}

export default Home;
