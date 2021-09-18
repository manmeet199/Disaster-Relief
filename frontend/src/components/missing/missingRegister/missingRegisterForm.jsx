import React, { Component } from "react";

class missingRegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      photo: "",
      description: "",
    };
  }
  handleChange = (name) => (e) => {
    this.setState({ [name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, age, photo, description } = this.state;
  };

  render() {
    return (
      <div className="form-container">
        <h2>missingRegisterForm Here</h2>
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
            <label htmlFor="age">age </label>
            <input
              type="text"
              value={this.state.age}
              onChange={this.handleChange("age")}
              name="age"
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="photo">photo </label>
            <input
              type="image"
              value={this.state.phoneno}
              onChange={this.handleChange("phoneno")}
              name="photo"
              required
            />
          </div>

          <div className="form-element">
            <label htmlFor="description">description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              required
              value={this.state.description}
              onChange={this.handleChange("description")}
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

export default missingRegisterForm;
