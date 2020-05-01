import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class NavBar extends Component {
  state = { topics: [] };

  componentDidMount = () => {
    api.fetchTopics().then((topics) => {
      this.setState({ topics });
    });
  };

  render() {
    const { topics } = this.state;
    return (
      <nav>
        <Link to="/">
          <h2>home</h2>
        </Link>
        {topics.map(({ slug }) => {
          return (
            <Link to={`/topic/${slug}`} key={slug}>
              <h2>{slug}</h2>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;
