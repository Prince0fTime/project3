import React, { Component } from "react";
import AceEditor from "react-ace";
import styled from 'styled-components';
import "../../index.css";
import "brace/mode/javascript";
import "brace/theme/tomorrow";
import API from "../../utils/API";

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #000000;
  color: black;
  display: block;
  font-size: 1.5em;
  width: 80%;
  margin-bottom: 1em
`;

const Button = styled.button`
    background-color: #8842d5;
    border: none;
    color: white;
    padding: 18px 36px;
    text-decoration: none;
    margin: 5px 4px;
    cursor: pointer;  
`;

const form = styled.div`
position: relative;
`;


class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      content: "",
      date: ""
    };
  }



  changeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  onAceEditorChange = value => {
    this.setState({
      content: value
    });
  };

  saveHandler = event => {
    event.preventDefault();
    API.saveSnippet({
      title: this.state.title,
      content: this.state.content,
      description: this.state.description,
      author: this.props.userName // change this to email from login
    });
  };

  render() {

    return (
      <form>
        <label htmlFor='title'>Title:</label>
        <Input
          id='title'
          type='text'
          name='title'
          // placeholder='Snippet Title'
          value={this.state.title}
          onChange={this.changeHandler}
        />
        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          type='text'
          name='description'
          defaultValue={this.state.description}
          onChange={this.changeHandler}
        />
        <AceEditor
          mode='javascript'
          theme='tomorrow'
          name='content'
          value={this.state.content}
          onChange={this.onAceEditorChange}
          editorProps={{ $blockScrolling: true }}
          width='90%'
          className='codeEditor'
        />

        <Button type='submit' name='submit' id='saveBtn' onClick={this.saveHandler}>
          Save
        </Button>
      </form>
    );
  }
}

export default Form;
