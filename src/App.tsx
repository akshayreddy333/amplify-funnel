import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="funnel"></div>
      <script
        id="indeed-partnership-funnel-script"
        type="text/javascript"
        src="https://partnerships.indeed.com/static/scout-file/scout.js"
        data-indeed-container-id="your-container-id"
        data-indeed-partner-name="Grubhub">
      </script>
    </div>
  );
}

export default App;
