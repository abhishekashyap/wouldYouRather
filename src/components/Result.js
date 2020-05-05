import React, { Component } from "react";
import { FiCheck } from "react-icons/fi";

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
                    src={this.props.users[this.props.question.author].avatarURL}
                    alt="Placeholder"
                    className="is-rounded"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.props.question.author}</p>
                <p className="subtitle is-6">asks, would you rather</p>
              </div>
            </div>
            {this.props.question && this.props.authedUser && (
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <div
                    className={`tile is-child box ${
                      this.props.question.optionOne.votes.includes(
                        this.props.authedUser
                      )
                        ? "has-background-link"
                        : "has-background-info"
                    }`}
                  >
                    <div className="control">
                      <strong className="has-text-light is-uppercase">
                        &nbsp;
                        {this.props.question.optionOne.text}
                        {this.props.question.optionOne.votes.includes(
                          this.props.authedUser
                        ) ? (
                          <FiCheck className="is-pulled-right is-size-3" />
                        ) : (
                          ""
                        )}
                      </strong>
                    </div>
                    <div className="progress-container">
                      &nbsp;
                      <progress
                        className="progress is-success"
                        value={this.props.question.optionOne.votes.length}
                        max={
                          this.props.question.optionOne.votes.length +
                          this.props.question.optionTwo.votes.length
                        }
                      ></progress>
                      <div className="has-text-white-ter">
                        {(this.props.question.optionOne.votes.length /
                          (this.props.question.optionOne.votes.length +
                            this.props.question.optionTwo.votes.length)) *
                          100}
                        % Votes
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div
                    className={`tile is-child box ${
                      this.props.question.optionTwo.votes.includes(
                        this.props.authedUser
                      )
                        ? "has-background-link"
                        : "has-background-info"
                    }`}
                  >
                    <div className="control">
                      <strong className="has-text-light is-uppercase">
                        &nbsp;
                        {this.props.question.optionTwo.text}
                        {this.props.question.optionTwo.votes.includes(
                          this.props.authedUser
                        ) ? (
                          <FiCheck className="is-pulled-right is-size-3" />
                        ) : (
                          ""
                        )}
                      </strong>
                    </div>
                    <div className="progress-container">
                      &nbsp;
                      <progress
                        className="progress is-success"
                        value={this.props.question.optionTwo.votes.length}
                        max={
                          this.props.question.optionOne.votes.length +
                          this.props.question.optionTwo.votes.length
                        }
                      ></progress>
                      <div className="has-text-white-ter">
                        {(this.props.question.optionTwo.votes.length /
                          (this.props.question.optionOne.votes.length +
                            this.props.question.optionTwo.votes.length)) *
                          100}
                        % Votes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerQuestion;
