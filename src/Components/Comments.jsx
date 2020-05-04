import React, { Component } from "react";
import * as api from "../utils/api";
import modifyDate from "../utils/utils";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";

class Comments extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    this.getComments();
  };

  getComments = () => {
    const id = window.location.pathname.slice(10);
    api.fetchComments(id).then((comments) => {
      this.setState({ comments: comments });
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
    api.removeComment(id).then(() => {
      this.setState((currentState) => {
        return {
          comments: [...currentState.comments].filter(
            (comment) => comment.comment_id !== id
          ),
        };
      });
    });
  };

  render() {
    const { comments } = this.state;
    const article_id = this.props.id;
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
      </main>
    );
  }
}

export default Comments;
