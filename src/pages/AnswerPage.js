import React, { Component } from "react";
import AnswerQuestion from "../components/AnswerQuestion";
import Result from "../components/Result";
import { connect } from "react-redux";
import Error from "./Error";

// IF user has answered the question then it is "view result", so conditionally render AnswerQuestion and result based on url and Object.keys

class AnswerPage extends Component {
  render() {
    return this.props.question ? (
      <div className="section">
        {this.props.question.optionOne.votes.includes(this.props.authedUser) ||
        this.props.question.optionTwo.votes.includes(this.props.authedUser) ? (
          <Result
            question={this.props.question}
            users={this.props.users}
            routerProps={this.props}
            authedUser={this.props.authedUser}
          />
        ) : (
          <AnswerQuestion
            question={this.props.question}
            users={this.props.users}
            routerProps={this.props}
          />
        )}
      </div>
    ) : (
      <Error />
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  return {
    authedUser,
    users,
    question: !questions[props.match.params.id]
      ? null
      : questions[props.match.params.id],
  };
}

export default connect(mapStateToProps)(AnswerPage);
