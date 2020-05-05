import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    return (
      <div className="section has-background-white-bis">
        <p className="title is-size-1 has-text-danger has-text-centered	">404</p>
        <p className="subtitle has-text-grey-dark has-text-centered	">
          Requested page not found!
        </p>
        <div className="has-text-centered">
          <Link to="/">Goto Home</Link>
        </div>
      </div>
    );
  }
}
