import React, { Component } from "react";
import Register from "./Register";
import "../components/Login.css";
import fire from "./config";
import Layout from "./Layout";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user: {},
      LoginComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.login = this.login.bind(this);
  }

  _onButtonClick() {
    console.log("props :", this.props);
    this.setState({
      LoginComponent: true
    });
    this.props.history.push("/Register");
  }

  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log("userrrrr", user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  login(e) {
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log("Login errrorrr", error);
      });
    // this.props.history.push("/Layout");
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
    console.log("login email and password", this.state.email);
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
    console.log("login email and password", this.state.password);
  };
  render() {
    return (
      <div>
        {this.state.user ? <Layout /> : <Login />}

        <img className="imgages" src="./image.jpg" alt="logo" />
        <div class="card">
          <div class="card-body">
            <h3>Sign in</h3>
            <div class="form-group">
              <input
                className="input-field"
                type="email"
                value={this.state.email}
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
                onChange={this.handleChange}
                required
              />

              <input
                className="input-field"
                type="password"
                class="form-control"
                id="exampleInputPassword"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChangePassword}
                required
              />
              <p>No account? Create one!</p>
            </div>
            <div className="button">
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.login}
              >
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
