import React, { Component } from "react";
import "./DisplayContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faPhoneAlt,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <div className="displayToolbar">
          <h4 className="displayToolbar">Jenny</h4>
          <img
            class="conversation-photo"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="conversation"
          />{" "}
          {/* <div className="contentIconRight">
            <div className="circle">
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
            <div className="circle">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <div className="circle">
              <FontAwesomeIcon icon={faVideo} />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
