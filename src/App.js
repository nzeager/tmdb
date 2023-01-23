import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import { useState, useEffect } from 'react';


function App() {

    axios.get('https://api.themoviedb.org/3/search/movie?api_key=23ca29d10fcb0ee407a6a0fddb586cfc&language=en-US&page=1&include_adult=false&query=signs')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React now
        </a>
      </header>
    </div>
  );
}

export default App;
