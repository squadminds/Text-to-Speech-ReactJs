import React, { Component } from "react";
import fire from "./config";

import Login from "./Login";
import App from "../App";
export default class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log("userrrrr", user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div>{this.state.user ? <App /> : <Login />}</div>;
  }
}
