import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './SnippetForm';
import API from "../../utils/API";


const Container = styled.div`
background: white;
color: black;	width: 50%;
width: 600px;	padding-top:2em;
padding-top:5px;	padding-left: 2em;
padding-left: 5px;	padding-right: 2em;
padding-right: 5px;	padding-bottom: 2em;
padding-bottom: 5px;	
margin: 0 auto;	
display: inline-block;	display: inline-block;
border: 2px solid grey;
border-radius: 0.3px;
`;

 const CenteredContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    };
  }
  componentWillMount() {
    const bitsId = this.props.BitID;
    if (bitsId !== "0") {
      API.getSnippet(bitsId).then(response => {
        this.setState({
          bits: response.data,
          isEditing: true
        })
      }) 
    }
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
    
    const { profile, bits, isEditing} = this.state;
    return (
      <CenteredContainer>
        <Container>
          <div className='rowC'>
            {isEditing && (
              <Form
                bitIdHandle={this.props.bitIdHandle}
                history={this.props.history}
                userName={profile.name}
                bitsCard={bits}
              />
            )}
            {!isEditing && (
              <Form
                bitIdHandle={this.props.bitIdHandle}
                history={this.props.history}
                userName={profile.name}
                bitsCard={bits}
              />
            )}
          </div>
        </Container>
      </CenteredContainer>
    );
  }
}

export default Wrapper;