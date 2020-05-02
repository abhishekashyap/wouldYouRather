import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar is-transparent">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://github.com/abhishekashyap">
              <img src="Logo.png" alt="abhishekashyap" width="28" height="28" />
            </a>
            <div
              class="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="https://bulma.io/">
                Home
              </a>
              <a class="navbar-item" href="https://bulma.io/">
                New Question
              </a>
              <a class="navbar-item" href="https://bulma.io/">
                Leaderboard
              </a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">
                    <a
                      class="button is-primary"
                      href="https://github.com/jgthms/bulma/releases/download/0.8.2/bulma-0.8.2.zip"
                    >
                      <span class="icon">
                        <i class="fas fa-download"></i>
                      </span>
                      <span>Login</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
