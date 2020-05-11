import React, { Component } from "react";
import * as api from "../utils/api";

class AddArticle extends Component {
  state = {
    body: "",
    title: "",
  };

  handleInput = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { body, title } = this.state;
    const { username, topic, handleAddArticle } = this.props;
    api.postArticle({ username, topic, title, body }).then((response) => {
      handleAddArticle(response);
    });
  };

  render() {
    const { topic } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add an article about {topic}:</h3>
        <label>
          Title:{" "}
          <input
            type="text"
            name="title"
            onChange={this.handleInput}
            className="articleTitle"
            required
          ></input>
        </label>
        <label>
          Article:
          <textarea
            name="body"
            onChange={this.handleInput}
            className="articleBody"
            required
          />
        </label>
        <button className="submitButton">Submit</button>
      </form>
    );
  }
}

export default AddArticle;
