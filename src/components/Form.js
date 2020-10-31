import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      color: "Grapefruit",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleChangeColor(event) {
    this.setState({ color: event.target.value });
  }
  handleSubmit(event) {
    alert(
      "A name was submitted:" +
        this.state.value +
        "and fruit is " +
        this.state.color
    );
    event.preventDefault();
    this.setState({
      value: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Controlled compomponent form.</h3>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <label>
          Pick your favorite flavor: <br />
          <select value={this.state.value} onChange={this.handleChangeColor}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
