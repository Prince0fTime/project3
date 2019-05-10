import React, { Component } from "react";
import AceEditor from "react-ace";
import "../../index.css";
import "brace/mode/javascript";
import "brace/theme/monokai";

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

  render() {
    return (
      <form>
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
        <input
          id="description"
          type="string"
          name="description"
          defaultValue={this.state.description}
          onChange={this.changeHandler}
        />
        <button type="submit" name="submit" />
      </form>
    );
  }
}

export default Form;
