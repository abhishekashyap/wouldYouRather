import React, { Component } from "react";
import AnswerQuestion from "../components/AnswerQuestion/AnswerQuestion";
import { connect } from "react-redux";

// IF user has answered the question then it is "view result", so conditionally render AnswerQuestion and result based on url and Object.keys

class AnswerPage extends Component {
  render() {
    return (
      <div className="section">
        <AnswerQuestion question={this.props.question} />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  return {
    authedUser,
    question: !questions[props.match.params.id]
      ? []
      : questions[props.match.params.id],
  };
}

export default connect(mapStateToProps)(AnswerPage);
