import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import "brace/mode/javascript";
import "brace/theme/monokai";


function onChange(newValue) {
  console.log("change", newValue);
}

// Render editor
function Editor() {
  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default Editor;