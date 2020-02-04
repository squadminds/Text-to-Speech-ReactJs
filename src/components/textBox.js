import React, { Component } from "react";
import Bubble from "./Bubble";

export default class TextBox extends Component {
  render() {
    return (
      <div>
        <input
          className="messageDisplay"
          type="text"
          placeholder="Enter the Message and press Enter"
        />{" "}
      </div>
    );
  }
}
