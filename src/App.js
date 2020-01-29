import React, { Component } from "react";
import "./App.css";
import IdleTimer from "react-idle-timer";
import { ToastContainer, toast } from "react-toastify";
import { simpleAction } from "./actions/simpleAction";
import { connect } from "react-redux";

import MessageBox from "./components/MessageBox";
import List from "./components/List";
import DisplayContent from "./components/DisplayContent";
import UserProfile from "./components/UserProfile";
import { Router } from "react-router";
import Routes from "./components/Route";

class App extends Component {
  constructor(props) {
    super(props);
    this.idleTimer = null;
    this.onAction = this._onAction.bind(this);
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
  }

  simpleAction = (event) => {
    this.props.simpleAction();
  };

  render() {
    console.log("reduxxxxxxxxx", this.props);
    return (
      <div className="App">
        {/* <Router>
        <Routes />
      </Router> */}
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={5000}
        />
        {/* <List /> */}
        {/* <DisplayContent /> */}

        {/* <UserProfile /> */}
        {/* <MessageBox /> */}
        {/* <ToastContainer />; */}

        <button onClick={this.simpleAction}>Test redux action</button>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
      </div>
    );
  }

  _onAction(e) {
    // console.log("user did something", e);
  }

  _onActive(e) {
    // console.log("user is active", e);
    // console.log("time remaining", this.idleTimer.getRemainingTime());
  }

  _onIdle(e) {
    // console.log("user is idle", e);
    // console.log("last active", this.idleTimer.getLastActiveTime());
    this.notify();
  }

  notify = () => toast("Session time out !");
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
