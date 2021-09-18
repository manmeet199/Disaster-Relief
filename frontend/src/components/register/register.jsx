import React, { Component } from "react";
import "./register.css";
import { registerPerson } from "../../helper/apiCalls";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phoneno: "",
      medical_info: "",
    };
  }
  handleChange = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, phoneno, email, medical_info } = this.state;

    registerPerson({ firstname, lastname, email, phoneno, medical_info }).then(
      (response) => {
        console.log(response);
        this.setState({
          firstname: "",
          lastname: "",
          email: "",
          phoneno: "",
          medical_info: "",
        });
      }
    );
  };

  render() {
    return (
      <div className="form-container">
        <h2>Register Here</h2>
        <div className="seperator"></div>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-element">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.handleChange("firstname")}
              name="firstname"
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handleChange("lastname")}
              name="lastname"
            />
          </div>
          <div className="form-element">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange("email")}
              name="email"
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="number">phone number </label>
            <input
              type="text"
              value={this.state.phoneno}
              onChange={this.handleChange("phoneno")}
              name="number"
              required
            />
          </div>

          <div className="form-element">
            <label htmlFor="medical">any medical problem</label>
            <textarea
              name="medical"
              id="medical"
              cols="30"
              rows="10"
              required
              value={this.state.medical_info}
              onChange={this.handleChange("medical_info")}
            ></textarea>
          </div>

          <input
            type="submit"
            value="Submit"
            className="submit-button"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Register;
