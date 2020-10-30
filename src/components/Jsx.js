import React from "react";
import Clock from "./Clock";
import Toggle from "./Toggle";
import Greetings from "./Greetings";
import Logincontrol from "./Logincontrol";

function Jsx() {
  function nameFormmater(user) {
    if (user) {
      return user.firstname + " " + user.lastname;
    }
    return <h3>Greetings from unknown user.</h3>;
  }
  const user = {
    firstname: "Joseph",
    lastname: "Mbote",
  };
  const result = <h3>Greetings from {nameFormmater(user)} </h3>;
  return (
    <div className="App-header">
      {result}
      <Clock />
      <Toggle />
      <Greetings isLoggedIn={true} />
      <Logincontrol />
    </div>
  );
}

export default Jsx;
