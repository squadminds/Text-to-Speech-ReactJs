import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
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

    return (
      <div className="Bubble">
        <Link to={`/`}>Back</Link>{" "}
        {posts.map((post) => (
          <p>
            userId===={post.userId}
            <br />
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
