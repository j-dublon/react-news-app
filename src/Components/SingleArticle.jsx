import React, { Component } from "react";
import * as api from "../utils/api";
import modifyDate from "../utils/utils";
import Comments from "./Comments";
import Voter from "./Voter";
import ErrorDisplayer from "./ErrorDisplayer";

class SingleArticle extends Component {
  state = {
    article: {},
    err: "",
  };

  componentDidMount = () => {
    this.getArticle();
  };

  getArticle = () => {
    const id = window.location.pathname.slice(10);
    api
      .fetchArticle(id)
      .then((article) => {
        article.date = modifyDate(article.created_at);
        this.setState({ article });
      })
      .catch((err) => {
        this.setState((currentState) => {
          return {
            article: currentState.article,
            err: err.response.data.msg,
          };
        });
      });

    this.setState((currentState) => {
      return {
        article: currentState.article,
        err: "",
      };
    });
  };

  render() {
    const {
      article: { title, author, date, body, article_id, votes },
      err,
    } = this.state;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <section>
        <main className="singleArticle">
          <h3 className="articleTitle">{title}</h3>
          <h4 className="singleArticleAuthor">
            {author}, {date}
          </h4>
          <p>{body}</p>
          <Voter votes={votes} id={article_id} section="articles" />
        </main>
        <Comments id={article_id} username={this.props.username} />
      </section>
    );
  }
}

export default SingleArticle;
