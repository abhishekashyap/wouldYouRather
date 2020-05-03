import React, { Component } from "react";
import { connect } from "react-redux";

class AnswerQuestion extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    
  };
  render() {
    return (
      <div className="section">
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
                <div className="tile is-child box has-background-info">
                  <div className="control">
                    <label className="radio">
                      <input type="radio" name="answer" />
                      <strong className="has-text-light is-uppercase">
                        &nbsp;
                        {this.props.question.optionOne
                          ? this.props.question.optionOne.text
                          : null}
                      </strong>
                    </label>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box has-background-info">
                  <div className="control">
                    <label className="radio">
                      <input type="radio" name="answer" />
                      <strong className="has-text-light is-uppercase">
                        &nbsp;
                        {this.props.question.optionTwo
                          ? this.props.question.optionTwo.text
                          : null}
                      </strong>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <div className="control">
                <button
                  type="submit"
                  className="button is-primary"
                  onSubmit={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  return {
    authedUser,
    question: !questions[props.id] ? [] : questions[props.id],
  };
}

export default connect(mapStateToProps)(AnswerQuestion);
