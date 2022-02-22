import React, { useState } from 'react';
import './App.css';
import { Helmet } from "react-helmet"
import QaTest from "./QA-test"
import ProdTest from './Prod-test';

function App() {

  const [isQA, setIsQA] = useState<boolean>(true);

  function handleClick() {
    setIsQA(!isQA);
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Switch Env</button>
        {isQA ?
          <QaTest />
          :
          <ProdTest />
        }
      </header>
    </div>
  );
}

export default App;
