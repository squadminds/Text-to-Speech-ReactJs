import React, { Component } from "react";

const DummyData = [
  {
    senderId: "1",
    text: "hello"
  }
];

export default class ChatBox extends Component {
  render() {
    return (
      <div className="chat-box">
        {DummyData.map((message) => {
          return (
            <div className="text">
              {message.text}
              <br />
              {message.senderId}
              <br />
              <textarea placeholder="Enter text here...."></textarea>
            </div>
          );
        })}
      </div>
    );
  }
}
