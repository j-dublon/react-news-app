import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import * as api from "../utils/api";
import ErrorDisplayer from "./ErrorDisplayer";
import PaginationBar from "./PaginationBar";
import AddArticle from "./AddArticle";

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
    const { topic_slug, author } = this.props;
    const { sort_by, page } = this.state;
    api
      .fetchArticles(topic_slug, sort_by, page, author)
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

  handleAddArticle = (newArticle) => {
    this.setState((currentState) => {
      return {
        articles: [newArticle, ...currentState.articles],
      };
    });
  };

  handleDeleteArticle = (article_id) => {
    api
      .removeArticle(article_id)
      .then(() => {
        this.setState((currentState) => {
          return {
            articles: currentState.articles.filter((article) => {
              return article.article_id !== article_id;
            }),
          };
        });
      })
      .catch((err) => {
        this.setState((currentState) => {
          return {
            articles: currentState.articles,
            err: err.response.data.msg,
          };
        });
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
    const { topic_slug, username } = this.props;
    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <main>
        <form className="sortByForm">
          <label htmlFor="sortBy" className="sortByLabel">
            Sort articles by:
          </label>
          <select onChange={this.selectSortBy} className="sortBySelect">
            <option value="created_at">Date</option>
            <option value="votes">Most voted</option>
            <option value="comment_count">Most commented</option>
          </select>
        </form>
        <h4 className="articleCount">{total_count} articles found</h4>
        <section className="articleContainer">
          {articles.map((article) => {
            const { article_id } = article;
            return (
              <ArticleCard
                {...article}
                key={article_id}
                topic={topic_slug}
                currentUser={username}
                handleDeleteArticle={this.handleDeleteArticle}
              />
            );
          })}
        </section>
        {topic_slug && (
          <AddArticle
            topic={topic_slug}
            handleAddArticle={this.handleAddArticle}
            username={username}
          />
        )}
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
