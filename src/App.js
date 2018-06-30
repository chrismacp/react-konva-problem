import React, { Component } from 'react';
import './App.css';
import { Stage, Layer} from 'react-konva';
import MyComponent from './components/MyComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <MyComponent someNumber={1}/>
          </Layer>
        </Stage>
      </div>
    );
  }
}
export default App;
