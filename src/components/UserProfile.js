import React, { Component } from "react";
import "./DisplayContent.css";

export default class UserProfile extends Component {
  render() {
    console.log("propssssssss", this.props);
    return (
      <div>
        <div className="displayToolbar">
          <h4 className="displayToolbar">Jenny</h4>
          <img
            class="conversation-photo"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="conversation"
          />{" "}
        </div>
      </div>
    );
  }
}
