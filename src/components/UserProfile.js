import React, { Component } from "react";
import "../ProfileUsers.css";

export default class UserProfile extends Component {
  render() {
    console.log("propssssssss", this.props);
    return (
      <div>
        <div className="displayProfile">
          <h4>Jenny</h4>
          <img
            className="conversation-photo"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="conversation"
          />{" "}
        </div>
      </div>
    );
  }
}
