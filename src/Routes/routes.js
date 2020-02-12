import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import App from "../App";

import Layout from "../components/Layout";
import List from "../components/List";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        {/* <Route exact path="/MessageBox" component={MessageBox} /> */}
        {/* <Route exact path="/posts/:userId" component={Layout2} /> */}

        <Route exact path="/" component={App} />
      </Router>
    );
  }
}
