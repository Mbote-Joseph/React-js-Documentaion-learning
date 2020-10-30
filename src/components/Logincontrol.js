import React, { Component } from "react";

class Logincontrol extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogin() {
    this.setState({
      loggedIn: true,
    });
  }
  handleLogout() {
    this.setState({
      loggedIn: false,
    });
  }

  render() {
    const isLoggedIn = this.state.loggedIn;
    let button;
    if (isLoggedIn) {
      return <button onClick={this.handleLogout}>Log In</button>;
    }
    return <button onClick={this.handleLogin}>Log out</button>;
  }
}

export default Logincontrol;
