import {useState} from "react";

import './App.css';
import {Display} from './components/index'

import gamefile from "./horror-story.json";

function App() {
  // todo - load/start screen
  const gamefile = require('./horror-story.json')
  const [displayedText, setDisplayedText] = useState('')  //gamefile.intro_text.join('\n')

  return (
    <div className="App">
      <Display />
      <button onClick={() => setDisplayedText(displayedText + 'Another click ')}>Click me</button>
    </div>
  );
}

export default App;
