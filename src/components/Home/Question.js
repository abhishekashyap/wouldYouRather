import React, { Component } from "react";
import { Link } from "react-router-dom";

class Question extends Component {
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
                <p className="title is-4">@{this.props.ques.author}</p>
                <p className="subtitle is-6">asks, would you rather</p>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child box has-background-success">
                  <div className="control">
                    <p className="has-text-weight-semibold has-text-white has-text-centered is-uppercase	is-uppercase">
                      {this.props.ques.optionOne.text}
                    </p>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box has-background-info">
                  <div className="control">
                    <p className="has-text-weight-semibold has-text-white has-text-centered	is-uppercase">
                      {this.props.ques.optionTwo.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                <Link to={`/question/${this.props.ques.id}`}>
                  {this.props.section === "unanswered"
                    ? "Answer question!"
                    : "View results"}
                </Link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Question;
