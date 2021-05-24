import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <input type="number" placeholder="Enter number" className="input"  />
        <button>Submit</button>
        <h1 className="inactive">RESULT</h1>
        {/* <h1 className="active">RESULT</h1> */}
      </header>
    </div>
  );
}

export default App;
