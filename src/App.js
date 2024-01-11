import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import MainApp from "./app/index";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
