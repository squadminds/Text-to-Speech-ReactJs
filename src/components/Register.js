import React, { Component } from "react";
import "./Register.css";
export default class Register extends Component {
  render() {
    return (
      <div>
        <img className="img" src="./image1.jpg" alt="logo" />
        <div class="card">
          <div class="card-body">
            <h3>Register</h3>
            <div class="form-group">
              <input
                className="input-field"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="First Name"
              />
              <input
                className="input-field"
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Last Name"
              />

              <input
                className="input-field"
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Email"
              />

              <input
                className="input-field"
                type="password"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Password"
              />

              <input
                className="input-field"
                type="number"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Mobile Number"
              />
            </div>
            <div className="button">
              <button type="button" class="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
