import React, { Component, Fragment } from "react";
import AceEditor from "react-ace";
import styled from 'styled-components';
import "../../index.css";
import "brace/mode/javascript";
import "brace/theme/tomorrow";
import API from "../../utils/API";

const Input = styled.input`
  border: none;
  border-bottom: 4px solid #8842d5;
  color: black;
  display: block;
  font-size: 25px;
  width: 200px;
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
  goTo(route) {
    const {bitIdHandle} = this.props;
    bitIdHandle(0)
    this.props.history.push(`/${route}`)
  }
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      content: "",
      date: "",
      isEditing: false,
      id: ""
    };
  }

componentDidMount(){
if (this.props.bitsCard !== undefined){
  this.setState({
    title: this.props.bitsCard.title,
    description: this.props.bitsCard.description,
    content: this.props.bitsCard.content,
    isEditing: true,
    id: this.props.bitsCard._id
  });

}else{
  console.log("no Bits props")
}
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
    if (this.state.isEditing) {
      console.log("updating")
      console.log(this.state.id)
      
      API.updateSnippet(this.state.id,{
        title: this.state.title,
        content: this.state.content,
        description: this.state.description,
      })
    } else {
      API.saveSnippet({
        title: this.state.title,
        content: this.state.content,
        description: this.state.description,
        author: this.props.userName // change this to email from login
      }); 
    }
    this.goTo('home')
  };
  deleteHandler = event => {
    event.preventDefault();
      API.deleteSnippet(this.state.id); 
    
    this.goTo('home')
  };

  render() {
    console.log("isEditing: " + this.state.isEditing)
    console.log("ID: " + this.state.id)
    const { isEditing } = this.state;

    return (
      <form>
        <label htmlFor='title'>Title:</label>
        <Input
          id='title'
          type='text'
          name='title'
          placeholder='Snippet Title'
          value={this.state.title}
          onChange={this.changeHandler}
        />
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
        />
        <label htmlFor='title'>Description:</label>
        <div>
          <Button onClick={this.goTo.bind(this, 'home')}>
            Back
          </Button>
          {isEditing ?(
            <Fragment>
              <Button type='submit' name='submit' onClick={this.saveHandler}>
                Save Edit
              </Button>
              <Button onClick={this.deleteHandler}>
                Delete?
              </Button>     
            </Fragment>
          ):(        
            <Button type='submit' name='submit' onClick={this.saveHandler}>
              Save Snippet
            </Button>
          )}
        </div>
      </form>
    );
  }
}

export default Form;
