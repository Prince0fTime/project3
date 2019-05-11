import React, { Component } from "react";
import AceEditor from "react-ace";
import "../../index.css";
import "brace/mode/javascript";
import "brace/theme/monokai";
import API from "../../utils/API";

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
      author: "mjg@phoenixtrap.com" // change this to email from login
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="string"
          name="title"
          value={this.state.title}
          onChange={this.changeHandler}
        />
        <AceEditor
          mode="javascript"
          theme="monokai"
          name="content"
          value={this.state.content}
          onChange={this.onAceEditorChange}
          editorProps={{ $blockScrolling: true }}
        />
        <label htmlFor="title">Description:</label>
        <input
          id="description"
          type="string"
          name="description"
          defaultValue={this.state.description}
          onChange={this.changeHandler}
        />
        <button type="submit" name="submit" onClick={this.saveHandler}>
          Save
        </button>
      </form>
    );
  }
}

export default Form;
