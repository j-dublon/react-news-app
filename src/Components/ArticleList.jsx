import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";
import ErrorDisplayer from "./ErrorDisplayer";
import PaginationBar from "./PaginationBar";

class ArticleList extends Component {
  state = {
    articles: [],
    total_count: 0,
    isLoading: true,
    sort_by: "created_at",
    err: "",
    page: 1,
    maxPage: Infinity,
  };

  getArticles = () => {
    const { topic_slug } = this.props;
    const { sort_by, page } = this.state;
    api
      .fetchArticles(topic_slug, sort_by, page)
      .then(({ articles, total_count, maxPage }) => {
        this.setState({
          articles,
          total_count,
          maxPage,
          isLoading: false,
        });
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
  };

  selectSortBy = (event) => {
    const { value } = event.target;
    this.setState({
      sort_by: value,
    });
  };

  changePage = (pageChange) => {
    this.setState((currentState) => {
      return { page: currentState.page + pageChange };
    });
  };

  componentDidMount = () => {
    this.getArticles();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.topic_slug !== this.props.topic_slug ||
      prevState.sort_by !== this.state.sort_by ||
      prevState.page !== this.state.page
    ) {
      this.getArticles();
    }
  };

  render() {
    const { articles, isLoading, err, total_count, page, maxPage } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <main>
        <form className="sortByForm">
          <label htmlFor="sortBy" className="sortBy">
            Sort articles by:
          </label>
          <select onChange={this.selectSortBy} className="dropDown">
            <option value="created_at">Date</option>
            <option value="votes">Most voted</option>
            <option value="comment_count">Most commented</option>
          </select>
        </form>
        <h4 className="totalCount">{total_count} articles found</h4>
        <section className="articleSection">
          {articles.map((article) => {
            const { article_id } = article;
            return <ArticleCard {...article} key={article_id} />;
          })}
        </section>
        <PaginationBar
          changePage={this.changePage}
          page={page}
          maxPage={maxPage}
        />
      </main>
    );
  }
}

export default ArticleList;
