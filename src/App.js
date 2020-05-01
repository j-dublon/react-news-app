import React, { Component } from "react";
import "./App.css";
import Title from "./Components/Title";
import NavBar from "./Components/NavBar";
import { Router } from "@reach/router";
import ArticleList from "./Components/ArticleList";

class App extends Component {
  state = {
    username: "jessjelly",
    avatar_url:
      "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
    name: "Jess Jelly",
  };

  render() {
    return (
      <div className="App">
        <Title username={this.state.username} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topic/:topic_slug" />
        </Router>
      </div>
    );
  }
}

export default App;
