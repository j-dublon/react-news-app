import React from "react";
import Voter from "./Voter";

const CommentCard = ({ comment, currentUser, handleDelete }) => {
  const { author, date, body, votes, comment_id } = comment;
  return (
    <section className="commentBox">
      <h3 className="commentTitle">
        {author}, {date}
      </h3>
      <p className="commentBody">{body}</p>
      <Voter votes={votes} id={comment_id} section="comments" />
      {author === currentUser && (
        <button
          onClick={() => handleDelete(comment_id)}
          className="submitButton"
        >
          Delete your comment
        </button>
      )}
    </section>
  );
};

export default CommentCard;
