import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = { voteDifference: 0 };

  handleVote = (voteChange) => {
    const { section, id } = this.props;
    this.setState((currentState) => {
      return { voteDifference: currentState.voteDifference + voteChange };
    });
    api.updateVotes(section, id, voteChange);
  };

  render() {
    const { voteDifference } = this.state;
    return (
      <section className="voter">
        <button
          onClick={() => this.handleVote(-1)}
          className="voteButton"
          disabled={voteDifference !== 0}
        >
          -
        </button>
        <p>{this.props.votes + this.state.voteDifference} votes</p>
        <button
          onClick={() => this.handleVote(1)}
          className="voteButton"
          disabled={voteDifference !== 0}
        >
          +
        </button>
      </section>
    );
  }
}

export default Voter;
