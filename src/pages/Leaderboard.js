import React, { Component } from "react";
import List from "../components/Leaderboard/List";

export default class Leaderboard extends Component {
  render() {
    return (
      <div>
        <div class="section">
          <p className="title is-2 has-text-grey-dark">Leaderboard</p>
          <p className="subtitle has-text-grey-dark">
            Let's see who's been making the roll
          </p>
        </div>
        <div class="section">
          <List />
        </div>
      </div>
    );
  }
}
