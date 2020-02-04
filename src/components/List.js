import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./List.css";
import UserProfile from "./UserProfile";
import Bubble from "./Bubble";
import { Link } from "react-router-dom";
export default class List extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  onButtonClick() {
    // console.log("clickkkkkkkkkkkkk", this.props.value);
  }

  _onButtonClick() {
    // console.log("clickkkkkkkkkkkkk", this.props.value);
    this.props.history.push("/UserProfile");
  }

  render() {
    // console.log("lissssssstt", this.props.value);
    return (
      <div className="scrollBar">
        <div className="mainList">
          <div className="iconLeft">
            <FontAwesomeIcon icon={faCogs} />
          </div>
          <h4 className="toolbar">Contact List</h4>

          <div className="iconRight">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>
        </div>
        <div className="searchBar">
          <input
            class="search_input"
            type="text"
            name=""
            placeholder="Search..."
          />
        </div>
        <div className="profile1">
          <img
            class="conversation-photo"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="conversation"
          />{" "}
          <div>
            <h6 className="conversation-title">
              {" "}
              <li>Jenny</li>
            </h6>
            {/* {this.props.value.map((item) => {
              return (
                item !== "" && <p className="conversation-snippet"> {item} </p>
              );
            })} */}
          </div>
          <div></div>
        </div>

        <div className="profile1">
          <img
            class="conversation-photo"
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt="conversation"
          />{" "}
          <div>
            <h6 className="conversation-title">
              {" "}
              <li>tina</li>
            </h6>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
