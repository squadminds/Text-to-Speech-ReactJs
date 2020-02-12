import React, { Component } from "react";
import List from "./List";
import MessageBox from "./MessageBox";
import "../App.css";
import DisplayContent from "./DisplayContent";
import TextBox from "./textBox";
import UserProfile from "./UserProfile";

export default class Layout extends Component {
  render() {
    return (
      <div className="App">
        <List />
        <DisplayContent />
        <UserProfile />

        {/* <MessageBox /> */}
        <TextBox />
      </div>
    );
  }
}
