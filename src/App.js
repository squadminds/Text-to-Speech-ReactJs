import React from "react";
import "./App.css";

import MessageBox from "./components/MessageBox";
import List from "./components/List";
import DisplayContent from "./components/DisplayContent";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes />
      </Router> */}

      <List />
      <DisplayContent />
      <UserProfile />
      <MessageBox />
    </div>
  );
}

export default App;
