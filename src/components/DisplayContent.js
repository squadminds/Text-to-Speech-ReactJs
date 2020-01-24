import React, { Component } from "react";
import "./DisplayContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faPhoneAlt,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
export default class DisplayContent extends Component {
  render() {
    return (
      <div>
        <div className="displayScrollableContent">
          <div className="messageList"></div>
          <div className="displayToolbar">
            <h4 className="displayToolbar">Conversation Title</h4>

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
        </div>
        <div className="messageContainer"></div>
      </div>
    );
  }
}
