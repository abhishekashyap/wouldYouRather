/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <a>Unanswered</a>
          </li>
          <li
            onClick={() => this.props.changeSection("answered")}
            className={`${
              this.props.section === "answered" ? "is-active" : null
            }`}
          >
            <a>Answered</a>
          </li>
        </ul>
      </div>
    );
  }
}
