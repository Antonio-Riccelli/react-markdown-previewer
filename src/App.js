import React, { useEffect, useState } from 'react'
import './App.css';
import Editor from './Components/Editor/index';
import Previewer from './Components/Previewer/index';

const initialRendering = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`\\' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


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
    <h1 id="title">Markdown Previewer</h1>
    <div id="wrapper">
    <Editor value={initialRendering} onChange={handleChange} />
    <Previewer text={previewerText} />
    </div>
    </div>
  );
}

export default App;
