import React from "react";
import Clock from "./Clock";
import Toggle from "./Toggle";
import Greetings from "./Greetings";
import Logincontrol from "./Logincontrol";
import Form from "./Form";

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
      <div className="row">
        <div className="col-9">
          {result}

          <Toggle />
          <Greetings isLoggedIn={true} />
          <Logincontrol />
          <Form />
        </div>
        <div className="col-3">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default Jsx;
