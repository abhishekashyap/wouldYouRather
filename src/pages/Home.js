import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "../components/Home/Question";
import ToggleQuestionBar from "../components/shared/ToggleQuestionBar";

class Home extends Component {
  componentDidUpdate() {
    console.log(
      "HOME COMPO",
      Object.keys(this.props.questions)
        .map((questionId) => this.props.questions[questionId])
        .filter((question) => question.optionOne.votes.includes("sarahedo"))
    );
  }
  state = {
    section: "unanswered",
  };
  render() {
    return (
      <>
        <ToggleQuestionBar section={this.state.section} />
        {/* If (option 1 || option 2) includes authedUser then question = answered else unanswered */}
        <div className="section">
          unanswered
          {Object.keys(this.props.questions).map((questionId, index) => (
            <Question key={index} ques={this.props.questions[questionId]} />
          ))}
        </div>
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
