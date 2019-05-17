import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './SnippetForm';

const Container = styled.div`
background: white;
color: white;
width: 600px;
padding-top:5px;
padding-left: 5px;
padding-right: 5px;
padding-bottom: 5px;
margin: 0 auto;
display: inline-block;
`;

class Wrapper extends Component {
  componentWillMount() {
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