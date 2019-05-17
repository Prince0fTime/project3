import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './Form';

const Container = styled.div`
background: black;
color: white;
padding-top:5px;
padding-left: 5px;
padding-right: 5px;
padding-bottom: 5px
`;

class Wrapper extends Component {
  componentDidMount() {
    this.setState({ profile: {} });
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
      <Container>
      <div className='rowC'>
        <Form userName={profile.name}/>
      </div>
    </Container>
    );
  }
}

export default Wrapper;