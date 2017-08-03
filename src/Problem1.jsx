/**
 * @fileOverview Provides stub for Problem1
 * @copyright (C) RiskSense, Inc.
 * @license Proprietary
 */

import React from "react";
import "./problem1.css";

class Project1 extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    success: false
  };

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = () => {
    const self = this;
    const { firstName, lastName } = this.state;
    fetch("/test", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName })
    }).then(function(response) {
      if (response.ok && response.status === 200) {
        self.setState(
          {
            success: true
          },
          () => {
            self.reset();
          }
        );
      }
    });
  };

  reset = () => {
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  renderSuccessMessage = () => {
    return <p>Submit Successful!</p>;
  };

  render() {
    const { firstName, lastName, success } = this.state;
    return (
      <div className="Login-Container">
        <div className="Login-Form">
          <div className="Form-Group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              className="Form-Control"
              onChange={this.handleInputChange}
              value={firstName}
            />
          </div>
          <div className="Form-Group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              className="Form-Control"
              onChange={this.handleInputChange}
              value={lastName}
            />
          </div>
          <div className="Form-Group">
            <button className="Form-Control" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        {success ? this.renderSuccessMessage() : null}
      </div>
    );
  }
}

export default Project1;
