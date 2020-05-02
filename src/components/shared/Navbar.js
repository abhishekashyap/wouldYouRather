import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div class="tabs is-centered">
        <ul>
          <li class="is-active">
            <a>Unanswered</a>
          </li>
          <li>
            <a>Answered</a>
          </li>
          <li>
            <a>leaderboard</a>
          </li>
        </ul>
      </div>
    );
  }
}
