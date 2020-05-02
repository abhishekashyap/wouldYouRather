import React, { Component } from "react";

export default class NewQuestion extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="title is-3">Add a new question</div>
              <div className="content">
                <div>
                  <div className="subtitle">Would you rather :</div>
                  <div className="field is-horizontal">
                    <div className="field-body">
                      <div className="field">
                        <div className="control is-expanded">
                          <input
                            className="input is-success"
                            type="text"
                            placeholder="Option 1"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control is-expanded">
                          <input
                            className="input is-success"
                            type="text"
                            placeholder="Option 2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="control">
                <button type="submit" className="button is-primary">
                  Add Question
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
