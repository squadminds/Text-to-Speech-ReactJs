import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faPhoneAlt,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default class UserProfile extends Component {
  render() {
    return (
      <div className="userProfile">
        <div className="displayProfile">
          <h4>Jenny</h4>
          <img
            className="conversation-photo"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="conversation"
          />{" "}
        </div>
        <div className="contentIconRight">
          <div className="circle">
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <div className="circle">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </div>
          <div className="circle">
            <FontAwesomeIcon icon={faVideo} />
          </div>
        </div>
      </div>
    );
  }
}
