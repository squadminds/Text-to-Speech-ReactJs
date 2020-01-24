import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "./Route";

export default class Test extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}
