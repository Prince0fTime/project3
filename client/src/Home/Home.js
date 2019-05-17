import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import BitsCard from '../components/Bits/BitsCard';


class Home extends Component {
  state = {
    profile: {}
  };

  goTo(route) {
    this.props.history.push(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }
  componentDidMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className='container'>
        <Fragment>{!this.state.profile.name && <div>Loading...</div>}</Fragment>
        <Fragment>
          {this.state.profile.name && (
            <Fragment>
              <Button
                bsStyle='primary'
                className='btn-margin'
                onClick={this.goTo.bind(this, 'some-bits-Please')}
              >
                New Snippet
              </Button>
              <div className='col-12'>
                <BitsCard userName={profile.name} />
              </div>
            </Fragment>
          )}
        </Fragment>
      </div>
    );
  }
}

export default Home;
