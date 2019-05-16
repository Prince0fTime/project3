import React from 'react';
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

function Wrapper() {
  return (
    <Container>
      <div className='rowC'>
        <Form />
      </div>
    </Container>
  );
};

export default Wrapper;