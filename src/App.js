import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Routes from "./components/Route";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
        <ContactList />
        <ChatBox />
      </Router>
    </div>
  );
}

export default App;
