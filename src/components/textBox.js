import React, { Component } from "react";
import fire from "./config";
import { useHistory } from "react-router-dom";

import { ListItemText, ListItem, List, TextField } from "@material-ui/core";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { text: "", messages: [] };

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    fire.auth().signOut();
  }

  componentDidMount() {
    // this.getMessages();
  }
  onSubmit = (event) => {
    if (event.charCode === 13 && this.state.text.trim() !== "") {
      this.writeMessageToDB(this.state.text);
      this.setState({ text: "" });
    }
  };

  writeMessageToDB = (message) => {
    fire
      .database()
      .ref("messages/")
      .push({
        text: message
      });
  };

  getMessages = () => {
    var messagesDB = fire
      .database()
      .ref("messages/")
      .limitToLast(9);
    messagesDB.on("value", (snapshot) => {
      let newMessages = [];
      snapshot.forEach((child) => {
        var message = child.val();
        newMessages.push({ id: child.key, text: message.text });
      });
      this.setState({ messages: newMessages });
      this.bottomSpan.scrollIntoView({ behavior: "smooth" });
      console.log("get message from Db", this.state.text);
    });
  };

  renderMessages = () => {
    return this.state.messages.map((message) => (
      <ListItem>
        <ListItemText
          style={{ wordBreak: "break-word" }}
          primary={message.text}
        />
      </ListItem>
    ));
  };
  render() {
    return (
      <div className="text-field">
        <button type="button" class="btn btn-primary" onClick={this.onLogout}>
          Logout
        </button>

        <List>{this.renderMessages()}</List>
        <TextField
          autoFocus={true}
          multiline={true}
          rowsMax={3}
          placeholder="Type something.."
          onChange={(event) => this.setState({ text: event.target.value })}
          value={this.state.text}
          onKeyPress={this.onSubmit}
          style={{ width: "100%", overflow: "hidden", backgroundColor: "" }}
        />
        <span ref={(el) => (this.bottomSpan = el)} />
      </div>
    );
  }
}
