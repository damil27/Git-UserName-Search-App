import React, { Component } from "react";
import axios from "axios";

class Form extends React.Component {
  state = { userName: "" };

  userInput = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };

  handleOnChange = (event) => this.setState({ userName: event.target.value });

  render() {
    return (
      <div className="continer">
        <div className="row  justify-content-center mx-auto offset ">
          <form onSubmit={this.userInput}>
            <div className="input-group mb-2 mt-4">
              <input
                value={this.state.userName}
                onChange={this.handleOnChange}
                type="text"
                className="form-control"
                placeholder="Enter Git username"
                required
              />
              <div className="input-group-append">
                <button className="btn btn-primary">ADD</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
