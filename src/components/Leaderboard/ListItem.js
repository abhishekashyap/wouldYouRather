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
                  className="is-rounded"
                  src={this.props.user.avatarURL}
                  alt="avatar"
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <div className="container-fluid">
                  <p className="title is-4">{this.props.user.name}</p>
                  <p className="subtitle is-6">@{this.props.user.id}</p>
                  <div className="container-fluid">
                    <div className="field is-grouped is-grouped-multiline">
                      <div className="control">
                        <div className="tags has-addons">
                          <span className="tag is-dark">Created</span>
                          <span className="tag is-info">
                            {this.props.user.questions.length}
                          </span>
                        </div>
                      </div>
                      <div className="control">
                        <div className="tags has-addons">
                          <span className="tag is-dark">Answered</span>
                          <span className="tag is-success">
                            {Object.keys(this.props.user.answers).length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="media-right">
              <div className="control">
                <span className="tag is-primary is-large">
                  {this.props.user.questions.length +
                    Object.keys(this.props.user.answers).length}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
