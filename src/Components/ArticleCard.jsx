import React from "react";

const ArticleCard = ({ title, author }) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>{author}</p>
    </section>
  );
};

export default ArticleCard;
