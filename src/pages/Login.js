import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className='section has-background-light	'>
        <p class="title is-2 is-center">Login</p>
        <div class="field has-addons">
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select name="user">
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Brazil">Brazil</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button type="submit" class="button is-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
