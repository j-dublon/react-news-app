import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  getArticles = () => {
    api
      .fetchArticles(this.props.topic_slug)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount = () => {
    this.getArticles();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.topic_slug !== this.props.topic_slug) {
      this.getArticles();
    }
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main>
        {articles.map((article) => {
          const { article_id } = article;
          return <ArticleCard {...article} key={article_id} />;
        })}
      </main>
    );
  }
}

export default ArticleList;
