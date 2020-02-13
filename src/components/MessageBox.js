import React, { Component } from "react";
// import { LocalForm, Control } from "react-redux-form";
import TextBox from "./textBox";
import { ListItemText, ListItem, List, TextField } from "@material-ui/core";
import firebase from "firebase";

import Bubble from "./Bubble";

export default class MessageBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="messages"></div>;
  }
}
