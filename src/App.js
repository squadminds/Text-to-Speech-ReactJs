import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Routes from "./components/Route";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import ContactList from "./components/ContactList";
import GridSystem from "./components/gridSystem";
import MessageBox from "./components/MessageBox";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes />
      </Router> */}
      {/* <ContactList /> */}
      {/* <ChatBox /> */}
      {/* <GridSystem /> */}
      {/* <MessageBox /> */}
      {/* <MessageDisplayBox /> */}

      <List />
    </div>
  );
}

export default App;
