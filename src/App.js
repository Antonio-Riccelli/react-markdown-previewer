import React, { useEffect, useState } from 'react'
import './App.css';
import Editor from './Components/Editor/index';
import Previewer from './Components/Previewer/index';

const initialRendering = `# Hello There
## Hello
[Google](https://www.google.com)
Heres some code, \`<div></div>\`, between 2 __backticks__.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
- to-do item
> Block Quotes!
![weird medieval image](https://64.media.tumblr.com/513dcf6a91fc4b6feb2bd71b5dff1856/tumblr_npjeybLLfI1qdm7pqo1_500.jpg)
`


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
