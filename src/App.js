import React from 'react';
import logo from './logo.svg';
import { Counter } from './components/counter/Counter';
import './App.css';
import AddressBook from "./components/addressBook/AddressBook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Counter />*/}
        <h2>
          Nuvalence React Demo
        </h2>
      </header>
        <AddressBook />
    </div>
  );
}

export default App;
