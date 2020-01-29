import React, { Component } from "react";
import "./gridLayout.css";
import List from "./List";
import DisplayContent from "./DisplayContent";
import MessageBox from "./MessageBox";
import UserProfile from "./UserProfile";
export default class GridLayout extends Component {
  render() {
    return (
      <div className="main">
        <div className="div1">
          <List />
        </div>
        <div className="div2">
          <DisplayContent />
        </div>
        <div className="div3">
          <UserProfile />
        </div>
        <div className="div4">
          <MessageBox />
        </div>
      </div>
    );
  }
}
