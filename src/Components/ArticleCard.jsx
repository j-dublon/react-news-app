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
}) => {
  const date = modifyDate(created_at);

  return (
    <section className="articleCard">
      <h3 className="articleLink">
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h3>
      <h4 className="author">
        {author}, {date}
      </h4>
      <h5 className="articleScore">
        comments: {comment_count}, votes: {votes}
      </h5>
      <img
        src={require(`../Images/${article_id}.jpg`)}
        alt="angularjs"
        className="cardPic"
      />
    </section>
  );
};

export default ArticleCard;
