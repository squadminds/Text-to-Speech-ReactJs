import React, { Component } from "react";
// import { LocalForm, Control } from "react-redux-form";

import "./messageBox.css";
import Bubble from "./Bubble";

export default class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: []
    };
  }

  render() {
    return (
      <div className="messages">
        {/* <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Control.text model=".message" className="messageDisplay" />
        </LocalForm> */}

        <Bubble />
      </div>
    );
  }
}
