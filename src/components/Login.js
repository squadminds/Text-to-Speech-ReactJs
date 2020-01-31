import React, { Component } from "react";
import "./Login.css";
import Register from "./Register";
export default class Login extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   LoginComponent: false
    // };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  // _onButtonClick() {
  // console.log("props :", this.props);
  // this.setState({
  //   LoginComponent: true
  // });
  // this.props.history.push("/Register");
  // }

  render() {
    return (
      <div>
        {/* <div>{this.state.LoginComponent && <Register />}</div> */}

        <img className="imgages" src="./image.jpg" alt="logo" />
        <div class="card">
          <div class="card-body">
            <h3>Sign in</h3>
            <div class="form-group">
              <input
                className="input-field"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email, Phone pr Skype"
                requiredTxt
              />
              <p>No account? Create one!</p>
            </div>
            <div className="button">
              <button type="button" class="btn btn-primary">
                Login
              </button>
              <div className="button2">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this._onButtonClick}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
