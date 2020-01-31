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
  }
  handleChange = (text) => {
    console.log("onchangeeeeeeeeeeeee", text);
    this.setState({
      message: [...this.state.message, text]
    });
  };

  render() {
    return (
      <div>
        {/* <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Control.text model=".message" className="messageDisplay" />
        </LocalForm> */}
        <form>
          <input
            className="messageDisplay"
            type="text"
            placeholder="Enter the Message and press Enter"
            onClick={(e) => this.props.handleChange(e.target.value)}
          />
          {console.log("xxxxxxxxxxxxxxxxxxxx", this.state.message)}
          {/* <Bubble value={this.state.message} /> */}
        </form>
      </div>
    );
  }
}
