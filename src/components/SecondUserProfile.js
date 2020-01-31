import React, { Component } from "react";
import "../ProfileUsers.css";

export default class SecondUserProfile extends Component {
  render() {
    console.log("propssssssss", this.props);
    return (
      <div>
        <div className="displayProfile">
          <h4>Jenny</h4>
          <img
            class="conversation-photo"
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt="conversation"
          />{" "}
        </div>
      </div>
    );
  }
}
