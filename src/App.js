import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Dictionary</h1>
      </header>
      <main>
        <Dictionary />

      </main>

      <footer>

        <p><a className="aboutme" href="https://github.com/Veronika-Kyr/word-2-world" title="Go to GitHub">Open-source</a> code by <a className="aboutme" href="https://veronika-kyrylovska.netlify.app/" title="Go to my page">Veronika Kyrylovska </a></p>
      </footer>
    </div>
  );
}

export default App;
