import React from 'react';
import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 mt-4">
              <div className='par'>
                <img className="img-fluid p-3 logo" src={logo}
                  alt="logo" /></div>
            </div>
            <div className="col-xl-9 mb-3">

              <h1> Dictionary</h1>
              <p className='greet'>Would You like to open the World of Words or to open the whole World using Words? Or maybe You want to make Your own World wider? Let's get use our simple but powerful <br /> <strong> Dictionary “Word 2 open World”</strong>.
                <br /> Think about any Word and Open its definition! Have a nice search!
              </p>
            </div>
          </div>
        </div>

      </header>
      <main>
        <Dictionary />

      </main>

      <footer>

        <p className='footer'><a className="aboutme" href="https://github.com/Veronika-Kyr/word-2-world" title="Go to GitHub">Open-source</a> code by <a className="aboutme" href="https://veronika-kyrylovska.netlify.app/" title="Go to my page">Veronika Kyrylovska </a></p>
      </footer>
    </div>
  );
}

export default App;
