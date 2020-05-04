import React, { Component } from "react";
import { connect } from "react-redux";

class AnswerQuestion extends Component {
  render() {
    return (
      <div className="section has-text-centered	">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.props.question.author}</p>
                <p className="subtitle is-6">asks, would you rather</p>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child box has-background-info	">
                  <div className="control">
                    <strong className="has-text-light is-uppercase">
                      &nbsp;
                      {this.props.question.optionOne
                        ? this.props.question.optionOne.text
                        : null}
                    </strong>
                  </div>
                  <div className="progress-container">
                    &nbsp;
                    {this.props.question.optionOne ? (
                      <>
                        <progress
                          className="progress is-success"
                          value={this.props.question.optionOne.votes.length}
                          max={
                            this.props.question.optionOne.votes.length +
                            this.props.question.optionTwo.votes.length
                          }
                        >
                          {this.props.question.optionOne.votes.length} /{" "}
                          {this.props.question.optionOne.votes.length +
                            this.props.question.optionTwo.votes.length}{" "}
                          Votes
                        </progress>
                        <div className="has-text-white-ter">
                          {this.props.question.optionOne.votes.length} /{" "}
                          {this.props.question.optionOne.votes.length +
                            this.props.question.optionTwo.votes.length}{" "}
                          Votes
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box has-background-info	">
                  <div className="control">
                    <strong className="has-text-light is-uppercase">
                      &nbsp;
                      {this.props.question.optionTwo
                        ? this.props.question.optionTwo.text
                        : null}
                    </strong>
                  </div>
                  <div className="progress-container">
                    &nbsp;
                    {this.props.question.optionOne ? (
                      <>
                        <progress
                          className="progress is-success"
                          value={this.props.question.optionTwo.votes.length}
                          max={
                            this.props.question.optionOne.votes.length +
                            this.props.question.optionTwo.votes.length
                          }
                        ></progress>
                        <div className="has-text-white-ter">
                          {this.props.question.optionTwo.votes.length} /{" "}
                          {this.props.question.optionOne.votes.length +
                            this.props.question.optionTwo.votes.length}{" "}
                          Votes
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    // optionOneVotes: !questions[props.match.params.id]
    //   ? []
    //   : questions[props.match.params.id].optionOne,
    // optionTwoVotes: !questions[props.match.params.id]
    //   ? []
    //   : questions[props.match.params.id].optionTwo,
  };
}

export default connect(mapStateToProps)(AnswerQuestion);
