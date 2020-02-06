import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./List.css";

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userId: null,
      posts: [],
      matchedId: []
    };

    // this.onButtonClick = this.onButtonClick.bind(this);
    // this._onButtonClick = this._onButtonClick.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then((json) => {
        this.setState({
          users: json
        });
      });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())

      .then((json) => {
        this.setState({
          posts: json
        });
      });
  }

  render() {
    var { users, userId, posts, matchedId } = this.state;
    // console.log("useridddddd", userId, final);
    const result = posts.filter((item) => item.userId === userId);
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", matchedId);

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
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <div className="buttons">
                  <button
                    type="button"
                    onClick={() => this.setState({ userId: user.id })}
                    class="btn btn-warning"
                  >
                    {user.name}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
