import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { connect } from "react-redux";

class Navbar extends Component {
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
              <NavLink className="navbar-item" to="/">
                Home
              </NavLink>
              <NavLink className="navbar-item" to="/add">
                New Question
              </NavLink>
              <NavLink className="navbar-item" to="/leaderboard">
                Leaderboard
              </NavLink>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <p className="control has-text-grey-dark">
                  <span>{this.props.authedUser}</span>
                </p>
              </div>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a
                      className="button is-danger"
                      href="https://github.com/jgthms/bulma/releases/download/0.8.2/bulma-0.8.2.zip"
                    >
                      <span className="icon">
                        <FiLogOut />
                      </span>
                      <span>Logout</span>
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

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(Navbar);
