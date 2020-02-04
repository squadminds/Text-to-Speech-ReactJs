import React, { Component } from "react";
import "./App.css";
import IdleTimer from "react-idle-timer";
import { simpleAction } from "./actions/simpleAction";
import { connect } from "react-redux";
import MessageBox from "./components/MessageBox";
import List from "./components/List";
import swal from "sweetalert";

import DisplayContent from "./components/DisplayContent";
import TextBox from "./components/textBox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: [],
      timeout: 500000,
      showModal: false,
      userLoggedIn: false,
      isTimedOut: false
    };

    this.idleTimer = null;
    this.onAction = this._onAction.bind(this);
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
  }
  simpleAction = (event) => {
    this.props.simpleAction();
  };

  _onAction(e) {
    console.log("user did something", e);
    this.setState({ isTimedOut: false });
  }

  _onActive(e) {
    console.log("user is active", e);
    this.setState({ isTimedOut: false });
  }

  _onIdle(e) {
    console.log("user is idle", e);
    const isTimedOut = this.state.isTimedOut;
    if (isTimedOut) {
    } else {
      this.setState({ showModal: true });
      this.idleTimer.reset();
      this.setState({ isTimedOut: true });
    }
    swal({
      title: "Your session is about to expire.",
      text: "wooosshhhhh.",
      closeOnClickOutside: false,
      closeOnEsc: false,
      icon: "warning",
      buttons: true,

      buttons: ["Continue Session", "Logout"],
      dangerMode: true
    }).then((Session) => {
      if (Session) {
        swal("logged Out", {
          icon: "success"
        });
      } else {
      }
    });
  }
  render() {
    console.log("reduxxxxxxxxx", this.props);
    console.log("childdddddddddddd----data", this.state.message);
    return (
      <div className="App">
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={this.state.timeout}
        />
        {/* <Router>
          <Routes />
        </Router> */}
        <List />
        <DisplayContent />
        <MessageBox />
        <TextBox />

        {/* <button onClick={this.simpleAction}>Test redux action</button> */}
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
