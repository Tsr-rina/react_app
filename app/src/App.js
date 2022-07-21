import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import NameForm from './components/NameForm';

function App() {
  const message = "Hello React Ya";
  const fruits =  ["Melon", "Apple", "Lemon"]
  const [name, setName] = useState("");

  const handleTextInput = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          { message }
          { fruits.map(item => <p>{item}</p>)}
          {/* <Message name = "MyName"/>
          <Message name = "Woo"/>
          <Message name = "Yummy"/> */}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <NameForm name={name} onChangeName={value => setName(value)}/>
        <Message name={name}/>
      </header>
    </div>
  );
}

export default App;
