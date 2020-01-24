import React, { Component } from "react";
import "./Login.css";
export default class Register extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   LoginComponent: false
    // };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    // console.log("props :", this.props);
    // this.setState({
    //   LoginComponent: true
    // });
    this.props.history.push("/Login");
  }

  render() {
    return (
      <div>
        <img className="images" src="./image1.jpg" alt="logo" />
        <div class="card">
          <div class="card-body">
            <h3>Register</h3>
            <form role="form" data-toggle="validator">
              <div class="form-group">
                <input
                  className="input-field"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                  required
                />
                <input
                  className="input-field"
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Last Name"
                  required
                />

                <input
                  className="input-field"
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                />

                <input
                  className="input-field"
                  type="password"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                  maxLength="15"
                  required
                />

                <input
                  className="input-field"
                  type="number"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Mobile Number"
                  required
                />
              </div>

              <div className="button">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>

                <div className="button2">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={this._onButtonClick}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
