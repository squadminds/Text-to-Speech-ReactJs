import React, { Component } from "react";
import "./chatbubble.css";

export default class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())

      .then((json) => {
        this.setState({
          posts: json
        });
      });
  }

  render() {
    var { posts } = this.state;
    // const result = posts.filter(
    //   (post) => post.userId === this.props.userId && userId
    // );
    // console.log("resultttt", result);

    return (
      <div className="Bubble">
        {" "}
        {posts.map((post) => (
          <p>
            title==={post.title}
            <br />
            body==={post.body}
          </p>
        ))}
      </div>
    );
    // return this.props.value.map((item) => {
    //   return item !== "" && <div className="Bubble">{item}</div>;
  }
}
