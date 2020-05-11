import React from "react";
import modifyDate from "../utils/utils";
import { Link } from "@reach/router";

const ArticleCard = ({
  title,
  author,
  created_at,
  comment_count,
  votes,
  article_id,
  topic,
  currentUser,
  handleDeleteArticle,
}) => {
  const date = modifyDate(created_at);
  let ImagePath = "";

  try {
    ImagePath = require(`../Images/${article_id}.jpg`);
  } catch (err) {
    ImagePath = require(`../Images/${topic}.jpg`);
  }

  return (
    <section className="articleCard">
      <h3 className="articleLink">
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h3>
      <h4 className="author">
        <Link to={`/${author}`} className="authorLink">
          {author}
        </Link>
        , {date}
      </h4>
      <h5 className="articleScore">
        comments: {comment_count}, votes: {votes}
      </h5>
      {author === currentUser && (
        <button
          onClick={() => handleDeleteArticle(article_id)}
          className="submitButton"
        >
          Delete your article
        </button>
      )}
      <img src={ImagePath} alt="thumbnailPic" className="cardPic" />
    </section>
  );
};

export default ArticleCard;
