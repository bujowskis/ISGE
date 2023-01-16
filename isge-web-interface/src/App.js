import './App.css';

function App() {
  // todo - load/start screen
  const gamefile = require('./horror-story.json')

  return (
    <div className="App">
      {gamefile.scenes.cell_room.name}
    </div>
  );
}

export default App;
