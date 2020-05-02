import React, { Component } from "react";

export default class Question extends Component {
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
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">asks, would you rather</p>
              </div>
            </div>
            <p className="title">
              “There are two hard things in computer science: cache
              invalidation, naming things, and off-by-one errors.”
            </p>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                <a href="#answer">Answer question!</a>
              </span>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}
