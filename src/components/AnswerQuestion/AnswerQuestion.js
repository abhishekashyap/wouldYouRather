import React, { Component } from "react";

export default class AnswerQuestion extends Component {
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
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div class="tile is-child box has-background-info">
                  <div class="control">
                    <label class="radio">
                      <input type="radio" name="answer" />
                      <strong className="has-text-light">&nbsp;OPTION 1</strong>
                    </label>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div class="tile is-child box has-background-info">
                  <div class="control">
                    <label class="radio">
                      <input type="radio" name="answer" />
                      <strong className="has-text-light">&nbsp;OPTION 2</strong>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <div className="control">
                <button type="submit" className="button is-primary">
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
