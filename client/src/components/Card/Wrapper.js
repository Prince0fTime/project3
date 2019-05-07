import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { Input } from './TextInput';
import Editor from './Editor';

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
        <Editor />
        <Input />
      </div>
    </Container>
  );
};

export default Wrapper;