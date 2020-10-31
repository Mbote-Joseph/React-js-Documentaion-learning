import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import Jsx from "./components/Jsx";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-3">
          <Intro />
        </div>
        <div className="col-9">
          <Jsx />
        </div>
      </div>
    </div>
  );
}

export default App;
