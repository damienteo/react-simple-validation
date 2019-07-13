import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Form from "./form/form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Form Validation Demo</h2>
        <Form />
      </header>
    </div>
  );
}

export default App;
