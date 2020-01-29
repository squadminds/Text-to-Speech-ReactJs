import React from "react";
import "./App.css";
import IdleTimer from "react-idle-timer";

import MessageBox from "./components/MessageBox";
import List from "./components/List";
import DisplayContent from "./components/DisplayContent";
import UserProfile from "./components/UserProfile";
import Bubble from "./components/Bubble";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes />
      </Router> */}

      <List />
      <DisplayContent />
      <UserProfile />
      {/* <Bubble /> */}
      <MessageBox />
    </div>
  );
}

export default App;
