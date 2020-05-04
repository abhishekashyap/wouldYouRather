import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "../components/Home/Question";
import ToggleQuestionBar from "../components/shared/ToggleQuestionBar";

class Home extends Component {
  state = {
    section: "unanswered",
  };

  changeSection = (value) => {
    this.setState({
      section: value,
    });
  };

  render() {
    return (
      <>
        <ToggleQuestionBar
          section={this.state.section}
          changeSection={this.changeSection}
        />
        {/* If (option 1 || option 2) includes authedUser then question = answered else unanswered */}
        {this.state.section === "answered" ? (
          <div className="section">
            {Object.keys(this.props.questions)
              .map((questionId) => this.props.questions[questionId])
              .filter(
                (question) =>
                  question.optionOne.votes.includes(this.props.authedUser) ||
                  question.optionTwo.votes.includes(this.props.authedUser)
              )
              .map((question, index) => (
                <Question
                  key={index}
                  ques={question}
                  section={this.state.section}
                />
              ))}
          </div>
        ) : (
          <div className="section">
            {Object.keys(this.props.questions)
              .map((questionId) => this.props.questions[questionId])
              .filter(
                (question) =>
                  !(
                    question.optionOne.votes.includes(this.props.authedUser) ||
                    question.optionTwo.votes.includes(this.props.authedUser)
                  )
              )
              .map((question, index) => (
                <Question
                  key={index}
                  ques={question}
                  section={this.state.section}
                />
              ))}
          </div>
        )}
      </>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(Home);
