import React, { Component } from "react";
import "./messageBox.css";

export default class MessageBox extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    // console.log(e.target.value);
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("thissssssssssssss", this.state.message);
    // this.props.onSend(this.state.message);
  }

  render() {
    // console.log(this.state.message);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="messageDisplay"
          type="text"
          placeholder="Enter the Message and press Enter"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
