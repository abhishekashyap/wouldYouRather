/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { connect } from "react-redux";
import { setAuthedUser } from "../../actions/authedUser";

class Navbar extends Component {
  state = {
    active: false,
  };

  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(""));
  };

  toggle = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return this.props.authedUser ? (
      <div>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a
              className="navbar-item"
              href="https://github.com/abhishekashyap/wouldYouRather"
            >
              <img
                src="Brand.png"
                alt="abhishekashyap"
                width="112"
                height="28"
              />
            </a>
            <div
              className={`navbar-burger burger ${
                this.state.active ? "is-active" : ""
              }`}
              data-target="navMenu"
              onClick={this.toggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            className={`navbar-menu ${this.state.active ? "is-active" : ""}`}
          >
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
                  <span>@{this.props.authedUser}</span>
                </p>
              </div>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button is-danger" onClick={this.handleLogout}>
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
    ) : null;
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(Navbar);
