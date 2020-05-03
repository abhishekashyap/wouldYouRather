import React, { Component } from "react";
import NewQuestion from "../components/NewQuestion/NewQuestion";

export default class Add extends Component {
  render() {
    return (
      <div className="section">
        <NewQuestion routerProps={this.props} />
      </div>
    );
  }
}
