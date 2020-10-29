import React from "react";
import logo from "./../logo.svg";

function Intro() {
  return (
    <div>
      <header className="App-header">
        <h1>React Library</h1>
        <img src={logo} className="App-logo" alt="logo" />
        For Easy understanding Use this
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Documentation
        </a>
        every thing is made easy for you.
      </header>
    </div>
  );
}

export default Intro;
