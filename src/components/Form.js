import React, { Component } from "react";
import styles from "../static/styles/Form.css";

export default class Form extends Component {
  state = { value: "" };
  handleChange = city => this.setState({ value: city });
  submit = () => {
    this.setState({ value: "" });
    this.props.addCity(this.state.value);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form">
          <h2>Add your city</h2>
          <input
            type="text"
            placeholder="Enter your city"
            value={this.state.value}
            onChange={event => this.handleChange(event.target.value)}
          />
          <button type="submit" onClick={this.submit}>Submit</button>
        </div>
      </div>
    );
  }
}