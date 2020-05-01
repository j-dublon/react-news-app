import React from "react";

function Title({ username }) {
  return (
    <header>
      <h1>Northcoders News</h1>
      <h2>Welcome! You are currently logged in as {username}</h2>
    </header>
  );
}

export default Title;
