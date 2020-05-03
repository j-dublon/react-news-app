import React, { Component } from "react";
import * as api from "../utils/api";
import modifyDate from "../utils/utils";

class SingleArticle extends Component {
  state = {
    article: {},
  };

  componentDidMount = () => {
    this.getArticle();
  };

  getArticle = () => {
    const id = window.location.pathname.slice(10);
    api.fetchArticle(id).then((article) => {
      article.date = modifyDate(article.created_at);
      this.setState({ article });
    });
  };

  render() {
    const {
      article: { title, author, date, body },
    } = this.state;
    return (
      <main className="singleArticle">
        <h3 className="articleTitle">{title}</h3>
        <h4 className="singleArticleAuthor">
          {author}, {date}
        </h4>
        <p>{body}</p>
      </main>
    );
  }
}

export default SingleArticle;
