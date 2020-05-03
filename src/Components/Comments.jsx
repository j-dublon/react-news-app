import React, { Component } from "react";
import * as api from "../utils/api";

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

  render() {
    const { comments } = this.state;
    return (
      <main>
        {comments.map((comment) => {
          const { comment_id, author, created_at, body, votes } = comment;
          return (
            <section key={comment_id}>
              <h3>
                {author}, {created_at}
              </h3>
              <p>{body}</p>
              <h4>Votes: {votes}</h4>
            </section>
          );
        })}
      </main>
    );
  }
}

export default Comments;
