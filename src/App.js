import './App.css';
import Editor from './Components/Editor/index';
import Previewer from './Components/Previewer/index';

const initialRendering = {
  "h1": '<h1>Hello There</h1>'
}

function App() {
// const []



  return (
    <div className="App">
    <Editor value={initialRendering} />
    <Previewer />
    </div>
  );
}

export default App;
