import React, { Component } from "react";

export default class Question extends Component {
  render() {
    return (
      <div class="section">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">asks, would you rather</p>
              </div>
            </div>
            <p class="title">
              “There are two hard things in computer science: cache
              invalidation, naming things, and off-by-one errors.”
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
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
