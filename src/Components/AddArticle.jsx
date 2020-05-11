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
      <form onSubmit={this.handleSubmit} className="articleForm">
        <h3 className="articleFormTitle">Add your {topic} article:</h3>
        <label className="addArticleLabel" htmlFor="addArticleTitle">
          Title:{" "}
        </label>
        <input
          type="text"
          name="title"
          onChange={this.handleInput}
          id="addArticleTitle"
          required
        ></input>
        <label className="addArticleLabel" htmlFor="addArticleBody">
          Article:{" "}
        </label>
        <textarea
          name="body"
          onChange={this.handleInput}
          id="addArticleBody"
          required
        />
        <button className="submitButton addArticle">Submit</button>
      </form>
    );
  }
}

export default AddArticle;
