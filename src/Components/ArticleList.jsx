import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";
import ErrorDisplayer from "./ErrorDisplayer";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    err: "",
  };

  getArticles = () => {
    const { topic_slug } = this.props;
    const { sort_by } = this.state;
    api
      .fetchArticles(topic_slug, sort_by)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState((currentState) => {
          return {
            articles: currentState.articles,
            isLoading: false,
            sort_by: "created_at",
            err: err.response.data.msg,
          };
        });
      });

    this.setState((currentState) => {
      return {
        articles: currentState.articles,
        isLoading: false,
        sort_by: "created_at",
        err: "",
      };
    });
  };

  selectSortBy = (event) => {
    const { value } = event.target;
    this.setState((currentState) => {
      return {
        ...currentState.articles,
        ...currentState.isLoading,
        sort_by: value,
      };
    });
  };

  componentDidMount = () => {
    this.getArticles();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.topic_slug !== this.props.topic_slug ||
      prevState.sort_by !== this.state.sort_by
    ) {
      this.getArticles();
    }
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <main>
        <h3 className="sortBy">Sort articles by:</h3>
        <form>
          <select onChange={this.selectSortBy} className="dropDown">
            <option value="created_at">Date</option>
            <option value="votes">Most voted</option>
            <option value="comment_count">Most commented</option>
          </select>
        </form>
        <section className="articleSection">
          {articles.map((article) => {
            const { article_id } = article;
            return <ArticleCard {...article} key={article_id} />;
          })}
        </section>
      </main>
    );
  }
}

export default ArticleList;
