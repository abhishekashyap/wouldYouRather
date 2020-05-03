import React, { Component } from "react";
import AnswerQuestion from "../components/AnswerQuestion/AnswerQuestion";

class AnswerPage extends Component {
  render() {
    return (
      <div className="section">
        <AnswerQuestion id={this.props.match.params.id} />
      </div>
    );
  }
}


export default AnswerPage
