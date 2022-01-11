import React, { useEffect, useState } from 'react'
import './App.css';
import Editor from './Components/Editor/index';
import Previewer from './Components/Previewer/index';

const initialRendering =  '# Hello There'


function App() {
const [editorText, setEditorText] = useState(initialRendering)
const [previewerText, setPreviewerText] = useState(editorText);

function handleChange(e){
  console.log(e.target.value);
  setEditorText(e.target.value)
}

useEffect(() => {
setPreviewerText(editorText);
},
[editorText]);


  return (
    <div className="App">
    <h1>Markdown Previewer</h1>
    <Editor value={initialRendering} onChange={handleChange} />
    <Previewer text={previewerText} />
    </div>
  );
}

export default App;
