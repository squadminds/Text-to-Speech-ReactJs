import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />

        <Route exact path="/Register" component={Register} />
        {/* <Route path="/chat" component={Groupchat} /> */}
      </Switch>
    </div>
  );
}
