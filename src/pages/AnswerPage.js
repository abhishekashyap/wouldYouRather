import React, { Component } from "react";
import AnswerQuestion from "../components/AnswerQuestion";
import Result from "../components/Result";
import { connect } from "react-redux";

// IF user has answered the question then it is "view result", so conditionally render AnswerQuestion and result based on url and Object.keys

class AnswerPage extends Component {
  render() {
    return (
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
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  return {
    authedUser,
    users,
    question: !questions[props.match.params.id]
      ? []
      : questions[props.match.params.id],
  };
}

export default connect(mapStateToProps)(AnswerPage);
