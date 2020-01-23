import React, { Component } from "react";
import "./Grid.css";

export default class GridSystem extends Component {
  render() {
    return (
      <div class="container">
        <h1>Messenger!</h1>
        <div className="search">
          <div class="active-cyan-3 active-cyan-4 mb-4">
            <input
              class="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <p>Mike</p>
            <p>Steve</p>
            <p>Sam</p>
            <p>Dean</p>
            <p>Mathew</p>
            <p>Jason</p>
            <p>Lisa</p>
          </div>
          <div class="col-sm-8">
            <ul className="chatoutput">
              <p>hi my name is vivek</p>
              <p>hi my name is vivek</p>
              <p>hi my name is vivek</p>
              <p>hi my name is vivek</p>
              <p>hi my name is vivek</p>
              <p>hi my name is vivek</p>
              <p>hi my name is vivek</p>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6"></div>
          <div class="col-sm-6 offset-sm-6">
            <textarea className="textarea"></textarea>
            <button type="button" class="btn btn-primary">
              send
            </button>
          </div>
        </div>
      </div>
    );
  }
}
