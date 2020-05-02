import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    selectedUser: "",
  };

  handleDropdown = (e) => {
    const selectedUser = e.target.value;
    this.setState(() => ({
      selectedUser,
    }));
  };

  handleLogin = () => {
    if (!this.state.selectedUser) {
      alert("Please select the user!");
    } else {
      this.props.dispatch(setAuthedUser(this.state.selectedUser));
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="section has-background-light">
        <p className="title is-2 has-text-grey-dark">Login</p>
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select onChange={this.handleDropdown}>
                <option>Choose user</option>
                {Object.keys(this.props.users).map((userId, index) => (
                  <option key={index} value={this.props.users[userId].id}>
                    {this.props.users[userId].name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="control">
            <button
              type="submit"
              className="button is-primary"
              onClick={this.handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
