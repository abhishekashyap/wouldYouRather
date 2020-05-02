import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://github.com/abhishekashyap">
              <img src="Logo.png" alt="abhishekashyap" width="28" height="28" />
            </a>
            <div
              className="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="https://bulma.io/">
                Home
              </a>
              <a className="navbar-item" href="https://bulma.io/">
                New Question
              </a>
              <a className="navbar-item" href="https://bulma.io/">
                Leaderboard
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/releases/download/0.8.2/bulma-0.8.2.zip"
                    >
                      <span className="icon">
                        <i className="fas fa-download"></i>
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
