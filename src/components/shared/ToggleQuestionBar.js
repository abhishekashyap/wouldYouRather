import React, { Component } from "react";

export default class ToggleQuestionBar extends Component {
  render() {
    return (
      <div className="tabs is-centered">
        <ul>
          <li className="is-active">
            <a href="#a">Unanswered</a>
          </li>
          <li>
            <a href="#a">Answered</a>
          </li>
        </ul>
      </div>
    );
  }
}
