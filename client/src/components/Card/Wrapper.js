import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './SnippetForm';

const Container = styled.div`
background: white;
width: 50%;
padding-top:2em;
padding-left: 2em;
padding-right: 2em;
padding-bottom: 2em;
display: inline-block;
border: 2px solid grey;
border-radius: 0.3px;
`;

const CenteredContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
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
      <CenteredContainer>
        <Container>
          <div className='rowC'>
            <Form userName={profile.name} />
          </div>
        </Container>
      </CenteredContainer>
    );
  }
}

export default Wrapper;