import React, { Component } from "react";
import "./register.css";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      number: "",
      medical: "",
    };
  }
  handleFullNameChange = (e) => {
    this.setState({
      fullName: e.target.value,
    });
  };
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleNumberChange = (e) => {
    this.setState({
      number: e.target.value,
    });
  };
  handleMedicalChange = (e) => {
    this.setState({
      medical: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      this.state.fullName,
      this.state.email,
      this.state.number,
      this.state.medical
    );
  };
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-element">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.handleFullNameChange}
              name="fullName"
            />
          </div>
          <div className="form-element">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
              name="email"
            />
          </div>
          <div className="form-element">
            <label htmlFor="number">phone number </label>
            <input
              type="number"
              value={this.state.number}
              onChange={this.handleNumberChange}
              name="number"
            />
          </div>
          <div className="form-element">
            <label htmlFor="medical">any medical problem</label>
            <textarea
              name="medical"
              id="medical"
              cols="30"
              rows="10"
              value={this.state.medical}
              onChange={this.handleMedicalChange}
            ></textarea>
          </div>

          <input type="submit" value="Submit" className="submit-button" />
        </form>
      </div>
    );
  }
}

export default Register;
