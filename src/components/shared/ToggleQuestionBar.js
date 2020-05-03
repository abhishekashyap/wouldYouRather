import React, { Component } from "react";

export default class ToggleQuestionBar extends Component {
  render() {
    return (
      <div className="tabs is-centered">
        <ul>
          <li
            onClick={() => this.props.changeSection("unanswered")}
            className={`${
              this.props.section === "unanswered" ? "is-active" : null
            }`}
          >
            <a href="#unanswered">Unanswered</a>
          </li>
          <li
            onClick={() => this.props.changeSection("answered")}
            className={`${
              this.props.section === "answered" ? "is-active" : null
            }`}
          >
            <a href="#answered">Answered</a>
          </li>
        </ul>
      </div>
    );
  }
}
