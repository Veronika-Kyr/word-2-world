import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <main>
        <Dictionary />

      </main>

      <footer>

        <p><a className="aboutme" href="https://veronika-kyrylovska.netlify.app/" title="Go to GitHub">Open-source</a> code by <a className="aboutme" href="https://veronika-kyrylovska.netlify.app/" title="Go to my page">Veronika Kyrylovska </a></p>
      </footer>
    </div>
  );
}

export default App;
