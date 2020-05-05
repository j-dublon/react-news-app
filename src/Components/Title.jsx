import React from "react";

function Title({ username }) {
  //area label for span
  return (
    <header>
      <h1>
        <span className="highlight" aria-label="highlighted first letter">
          N
        </span>
        ORTHCODERS{" "}
        <span className="highlight" aria-label="highlighted first letter">
          N
        </span>
        EWS
      </h1>
      <h2 className="welcome">
        Welcome! You are currently logged in as{" "}
        <span className="highlight">{username}</span>
      </h2>
    </header>
  );
}

export default Title;
