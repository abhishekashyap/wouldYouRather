import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "../components/Home/Question";
import ToggleQuestionBar from "../components/shared/ToggleQuestionBar";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <ToggleQuestionBar />
        <div className="section">
          <Question />
          <Question />
          <Question />
          <Question />
        </div>
      </>
    );
  }
}

function mapStateToProps({ questions, users }) {
  return {
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Home);
