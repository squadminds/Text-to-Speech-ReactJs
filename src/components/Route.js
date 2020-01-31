import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import UserProfile from "./UserProfile";
import MessageBox from "./MessageBox";
import SecondUserProfile from "./SecondUserProfile";

export default function Routes() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} /> */}
        <Route exact path="/userProfile" component={UserProfile} />
        <Route exact path="/secondUserProfile" component={SecondUserProfile} />
      </Switch>
    </Router>
  );
}
