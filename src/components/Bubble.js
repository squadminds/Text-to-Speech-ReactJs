import React, { Component } from "react";
import "./chatbubble.css";

export default class Bubble extends Component {
  render() {
    console.log("bubble", this.props);
    return this.props.value.map((item) => {
      return item !== "" && <div className="Bubble">{item}</div>;
    });
  }
}
