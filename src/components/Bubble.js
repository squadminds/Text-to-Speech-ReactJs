import React, { Component } from "react";
import "./chatbubble.css";

export default class Bubble extends Component {
  // const data = this.props.value;

  render() {
    return this.props.value.map((item) => {
      return item !== "" && <div className="Bubble">{item}</div>;
    });
  }
}
