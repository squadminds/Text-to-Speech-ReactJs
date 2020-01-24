import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Routes from "./components/Route";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChatBox from "./components/ChatBox";
import ContactList from "./components/ContactList";
import MessageBox from "./components/MessageBox";
import List from "./components/List";
import DisplayContent from "./components/DisplayContent";

function App() {
  return (
    <div className="App">
      <List />
      <DisplayContent />
      <MessageBox />
    </div>
  );
}

export default App;
