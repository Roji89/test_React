import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/button/button";
import { Counter } from "./components/counter/counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <Counter description="My Counter" defaultCount={0} />
      </header>
    </div>
  );
}

export default App;
