import React, { Component } from "react";
// import "./form.css";

class Form extends Component {
  state = {
    email: "",
    password: ""
  };

  handleUserInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email } = this.state;
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={event => this.handleUserInput(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={name}
            onChange={event => this.handleUserInput(event)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    );
  }
}
export default Form;
