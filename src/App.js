import React from "react";
import logo from "./logo.svg";
import "./App.css";

import InputForm from "./form/inputForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Form Validation Demo</h2>
        <InputForm />
      </header>
    </div>
  );
}

export default App;
