import React, { Component } from "react";

export default class ToggleQuestionBar extends Component {
  render() {
    return (
      <div className="tabs is-centered">
        <ul>
          <li className="is-active">
            <a href="#unanswered">Unanswered</a>
          </li>
          <li>
            <a href="#answered">Answered</a>
          </li>
        </ul>
        )
      </div>
    );
  }
}
