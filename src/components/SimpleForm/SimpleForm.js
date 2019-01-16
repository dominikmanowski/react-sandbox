import React, { Component } from "react";

class SimpleForm extends Component {
  state = {
    firstName: "",
    surname: ""
  };

  handleInputChange = ({ target }) =>
    this.setState({
      [target.name]: target.value
    });

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            placeholder="Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Surname"
            name="surName"
            value={this.state.surName}
            onChange={this.handleInputChange}
          />{" "}
        </form>
        <span>
          {this.state.firstName} {this.state.surName}
        </span>
      </>
    );
  }
}

export default SimpleForm;
