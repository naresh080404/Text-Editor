import { useState } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import "./App.css";

const modules={
  toolbar:[
    
    [{font: []}],
    [{size: []}],
    ["bold", "italic"]
  ]
}

const App = () => {
  const [value,setValue]=useState("");
  const handleReset = () => {
    setValue("");
  };
  const handleSave = () => {
    alert("Saved");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="editor">
        <ReactQuill 
        theme='snow'
        value={value}
        onChange={setValue}
        className="editor-input"
        modules={modules}
        />
        </div>
        <div className="buttons">
          <p>
        <button onClick={handleReset} className="resetbutton">Reset</button>
        <button onClick={handleSave} className="savebutton">Save</button>
        </p>
        </div>
      </div>
    </div>
  );
}

export default App;
