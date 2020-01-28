import React, { Component } from "react";
// import { LocalForm, Control } from "react-redux-form";

import "./messageBox.css";
import UserProfile from "./UserProfile";
import Bubble from "./Bubble";

export default class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (text) => {
    // console.log("onchangeeeeeeeeeeeee", e.target.value);
    this.setState({
      message: [...this.state.message, text]
    });
  };

  handleSubmit = (values) => {
    console.log("submitttttttttttttt", values);
  };

  render() {
    return (
      <div>
        {/* <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Control.text model=".message" className="messageDisplay" />
        </LocalForm> */}
        <form onSubmit={this.handleSubmit}>
          <input
            className="messageDisplay"
            type="text"
            placeholder="Enter the Message and press Enter"
            onClick={(e) => this.handleChange(e.target.value)}
          />
          <Bubble value={this.state.message} />
        </form>
      </div>
    );
  }
}
