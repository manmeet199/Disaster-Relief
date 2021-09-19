import React, { Component } from "react";
import { addMissingPerson } from "../../../helper/apiCalls";

class missingRegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      place: "",
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
    const { name, place, age, photo, description } = this.state;
    addMissingPerson({ name, place, age, description, photo })
      .then((response) => {
        console.log(response);
        this.setState({
          name: "",
          place: "",
          age: "",
          description: "",
          photo: "",
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="form-container">
        <h2>Give the Details of Missing Person Here</h2>
        <div className="seperator"></div>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-element">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange("name")}
              name="name"
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="place">Place</label>
            <input
              type="text"
              value={this.state.place}
              onChange={this.handleChange("place")}
              name="place"
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
              value={this.state.photo}
              onChange={this.handleChange("photo")}
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

          <div className="form-element">
            <label for="photo">Select a file:</label>
            <input
              type="file"
              id="myfile"
              onChange={this.handleChange("photo")}
              value={undefined}
              name="myfile"
            />
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
