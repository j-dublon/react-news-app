import React, { Component } from "react";
import * as api from "../utils/api";

class AddComment extends Component {
  state = {
    body: "",
  };

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({
      body: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { body } = this.state;
    const { handleAdd, id, username } = this.props;
    api
      .postComment({ username, body }, id)
      .then((response) => {
        handleAdd(response);
      })
      .catch((err) => console.dir(err));
  };

  render() {
    return (
      <form className="commentBox" onSubmit={this.handleSubmit}>
        <h3 className="commentTitle">Add your comments:</h3>
        <label>
          <textarea
            name="body"
            onChange={this.handleInput}
            className="textArea"
            required
          />
        </label>
        <button className="submitButton">Submit</button>
      </form>
    );
  }
}

export default AddComment;
