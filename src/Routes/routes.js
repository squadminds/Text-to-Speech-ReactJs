import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import List from "../components/List";
import TextBox from "../components/textBox";
import UserProfile from "../components/UserProfile";
import MessageBox from "../components/MessageBox";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/MessageBox" component={MessageBox} />
        <Route exact path="/UserProfile" component={UserProfile} />
        <Route exact path="/TextBox" component={TextBox} />
        <Route exact path="/" component={List} />
      </Router>
    );
  }
}
