import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Routes from "./components/Route";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import ContactList from "./components/ContactList";
import Test from "./components/gridSystem";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Routes /> */}
      {/* <ContactList /> */}
      {/* <ChatBox /> */}
      {/* </Router> */}
      <Test />
    </div>
  );
}

export default App;
