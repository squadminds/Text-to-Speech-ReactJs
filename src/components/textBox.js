import React, { Component } from "react";
import Bubble from "./Bubble";
export default class TextBox extends Component {
  render() {
    return (
      <div className="text-field">
        <input
          className="messageDisplay"
          type="text"
          placeholder="Enter the Message and press Enter"
        />{" "}
      </div>
    );
  }
}
