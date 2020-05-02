import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
  };

  getArticles = () => {
    const { topic_slug } = this.props;
    const { sort_by } = this.state;
    api
      .fetchArticles(topic_slug, sort_by)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => console.log(err));
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
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main>
        <h3>Sort articles by:</h3>
        <form>
          <select onChange={this.selectSortBy}>
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
