import React, { Component } from "react";
import "./chatbubble.css";

export default class Bubble extends Component {
  render() {
    console.log("bubble", this.props);
    return (
      <div>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
        <h5 className="Bubble">kjfndskbgkgbkg</h5>
      </div>
    );
    // return this.props.value.map((item) => {
    //   return item !== "" && <div className="Bubble">{item}</div>;
  }
}
