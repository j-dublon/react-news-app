import React from "react";

function Title({ username }) {
  return (
    <header>
      <h1>
        <span className="highlight">N</span>ORTHCODERS{" "}
        <span className="highlight">N</span>EWS
      </h1>
      <h2 className="welcome">
        Welcome! You are currently logged in as{" "}
        <span className="highlight">{username}</span>
      </h2>
    </header>
  );
}

export default Title;
