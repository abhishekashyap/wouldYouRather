import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="section has-background-light">
        <p className="title is-2 is-center has-text-grey-dark">Login</p>
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="user">
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Brazil">Brazil</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
