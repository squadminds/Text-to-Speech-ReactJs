import React, { Component } from "react";
// import { LocalForm, Control } from "react-redux-form";

import Bubble from "./Bubble";

export default class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: []
    };
  }

  render() {
    console.log("messssaaaaaaggggggggeeeeeeeee", this.props);

    return (
      <div className="messages">
        <Bubble />
      </div>
    );
  }
}
