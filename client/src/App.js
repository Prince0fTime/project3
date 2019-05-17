import React, { Component } from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';
import Avatar from 'react-avatar';
import Auth from '../src/Auth/Auth'
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  goTo(route) {
    this.props.history.push(`/${route}`)
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
            <Navbar.Brand href='/something' className='logo-text'>
              <Link to='/home'>BitsPlease</Link>
            </Navbar.Brand>
          </Navbar.Header>
          {isAuthenticated() && (
            <Form inline>
              <FormControl
                class='form-control mr-sm-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <Button
                class='btn btn-outline-success my-2 my-sm-0'
                type='submit'
              >
                Search
              </Button>

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
            </Form>
          )}
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
