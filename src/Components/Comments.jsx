import React, { Component } from "react";
import * as api from "../utils/api";
import modifyDate from "../utils/utils";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";
import ErrorDisplayer from "./ErrorDisplayer";
import PaginationBar from "./PaginationBar";

class Comments extends Component {
  state = {
    comments: [],
    total_count: 0,
    page: 1,
    maxPage: Infinity,
    err: "",
  };

  componentDidMount = () => {
    this.getComments();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
      this.getComments();
    }
  };

  getComments = () => {
    const id = window.location.pathname.slice(10);
    const { page } = this.state;
    api
      .fetchComments(id, page)
      .then(({ comments, total_count, maxPage }) => {
        this.setState({ comments, total_count, maxPage });
      })
      .catch((err) => {
        this.setState((currentState) => {
          return {
            comments: currentState.comments,
            err: err.response.data.msg,
          };
        });
      });

    this.setState((currentState) => {
      return {
        comments: currentState.comments,
        err: "",
      };
    });
  };

  handleAdd = (newComment) => {
    this.setState((currentState) => {
      return {
        comments: [newComment, ...currentState.comments],
      };
    });
  };

  handleDelete = (id) => {
    api
      .removeComment(id)
      .then(() => {
        this.setState((currentState) => {
          return {
            comments: [...currentState.comments].filter(
              (comment) => comment.comment_id !== id
            ),
          };
        });
      })
      .catch((err) => {
        this.setState((currentState) => {
          return {
            comments: currentState.comments,
            err: err.response.data.msg,
          };
        });
      });
  };

  changeCommentsPage = (pageChange) => {
    this.setState((currentState) => {
      return { page: currentState.page + pageChange };
    });
  };

  render() {
    const { comments, err, page, maxPage } = this.state;
    const article_id = this.props.id;
    if (err) return <ErrorDisplayer err={err} />;
    return (
      <main>
        <AddComment
          username={this.props.username}
          handleAdd={this.handleAdd}
          id={article_id}
        />
        {comments.map((comment) => {
          comment.date = modifyDate(comment.created_at);
          const { comment_id } = comment;
          const currentUser = this.props.username;
          return (
            <CommentCard
              comment={comment}
              key={comment_id}
              currentUser={currentUser}
              handleDelete={this.handleDelete}
            />
          );
        })}
        <PaginationBar
          changePage={this.changeCommentsPage}
          page={page}
          maxPage={maxPage}
        />
      </main>
    );
  }
}

export default Comments;
