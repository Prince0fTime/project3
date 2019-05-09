import React from 'react';
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