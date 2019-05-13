import React, { Component } from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';
import Avatar from 'react-avatar';
import Auth from '../src/Auth/Auth'
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
            <Navbar.Brand href='home' className='logo-text'>
              BitsPlease
            </Navbar.Brand>
            {isAuthenticated() && (
              <null>
                <Button
                  bsStyle='primary'
                  className='btn-margin'
                  onClick={this.goTo.bind(this, 'home')}
                >
                  Home
                </Button>

                <Button
                  bsStyle='primary'
                  className='btn-margin'
                  onClick={this.goTo.bind(this, 'profile')}
                >
                  Profile
                </Button>
              </null>
            )}
            {isAuthenticated() && (
              <Button
                id='qsLogoutBtn'
                bsStyle='primary'
                className='btn-margin'
                onClick={this.logout.bind(this)}
              >
                Log Out
              </Button>
            )}
            {isAuthenticated() && (
            <Form class="form-inline">
              <FormControl class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></FormControl>
              <Button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
            </Form>
            )}
            {isAuthenticated() && (
              <Avatar
                googleId={Auth.idToken}
                className='avatar-logo mr-sm-2'
                size='35px'
                round
                onClick={this.goTo.bind(this, 'profile')}
              />
            )}
          </Navbar.Header>
        </Navbar>
        <div className='container'>{this.props.children}</div>
        {!isAuthenticated() && (
          <div className='container'>
            <div className='col-12'>
              <div className='login-div'>
                <Button
                  id='qsLoginBtn'
                  bsStyle='primary'
                  className='btn-margin'
                  onClick={this.login.bind(this)}
                >
                  Log In
                </Button>
                <Button
                  id='qsLoginBtn'
                  bsStyle='primary'
                  className='btn-margin'
                  onClick={this.login.bind(this)}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
