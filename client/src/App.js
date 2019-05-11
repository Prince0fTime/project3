import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  login() {
    this.props.auth.login(); 
  }
  logout() {
    this.props.auth.logout();
  }
  componentDidMount() {
    const { renewSession } = this.props.auth;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">BitsPlease</a>
            </Navbar.Brand>
            {
              isAuthenticated() && (
                <null>
                <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'home')}
              >
                Home
              </Button>
                
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button>
                  </null>
                )
            }
            {
              isAuthenticated() && (
                <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'some-bits-Please')}
              >
                some bits-Please!
              </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
        {
          !isAuthenticated() && (
            <div className="container">
            <div className="col-12">
              <div className="login-div">
              <Button
              id="qsLoginBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.login.bind(this)}
            >
              Log In
            </Button>
            <Button
            id="qsLoginBtn"
            bsStyle="primary"
            className="btn-margin"
            onClick={this.login.bind(this)}
          >
            Sign Up
          </Button>
              </div>

            </div>
          </div>
            )
        }
      </div>
    );
  }
}

export default App;
