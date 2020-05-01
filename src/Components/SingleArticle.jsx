import React, { Component } from "react";
import * as api from "../utils/api";

class SingleArticle extends Component {
  state = {
    article: {},
  };

  getArticle = () => {
    const id = window.location.pathname.slice(10);
    api.fetchArticle(id).then((article) => {
      this.setState({ article });
    });
  };

  render() {
    const { article } = this.state;
    const { title } = article;
    return (
      <div>
        <h3>{title}</h3>
      </div>
    );
  }
}

export default SingleArticle;
