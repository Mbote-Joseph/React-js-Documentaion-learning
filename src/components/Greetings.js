import React from "react";

function Subscribe(props) {
  return <h3>Click to Subscribe to our channel</h3>;
}
function Welcome(props) {
  return <h3>Thank you for Subscribing</h3>;
}

function Greetings(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Subscribe />;
  }
  return <Welcome />;
}

export default Greetings;
