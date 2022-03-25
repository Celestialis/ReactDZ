import './App.css';
import React from 'react';
import { Message } from './components/Message/Message';

const name = "Alex"
const message = "Hello"

function App() {
  return (
    <div className="App">
      <Message name = {name} message = {message } />
    </div>
  );
}

export default App;
