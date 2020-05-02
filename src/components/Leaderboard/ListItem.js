import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="avatar"
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <div className="container">
                  <p>John Smith</p>
                  <div className="container">
                    <div className="field is-grouped is-grouped-multiline">
                      <div className="control">
                        <div className="tags has-addons">
                          <span className="tag is-dark">Created</span>
                          <span className="tag is-info">4</span>
                        </div>
                      </div>

                      <div className="control">
                        <div className="tags has-addons">
                          <span className="tag is-dark">Answered</span>
                          <span className="tag is-success">5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="media-right">
              <div className="control">
                <span className="tag is-danger is-large">9</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
