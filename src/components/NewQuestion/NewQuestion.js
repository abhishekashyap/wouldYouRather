import React, { Component } from "react";

export default class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleOptionOne = (e) => {
    const optionOne = e.target.value;
    this.setState({
      optionOne,
    });
  };

  handleOptionTwo = (e) => {
    const optionTwo = e.target.value;
    this.setState({
      optionTwo,
    });
  };

  handleAddQuestion = (e) => {
    e.preventDefault();
    if (!(this.state.optionOne && this.state.optionTwo)) {
      // For empty options
      alert("Please enter valid values");
    } else {
      console.log(this.state.optionOne);
      console.log(this.state.optionTwo);
    }
  };

  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="title is-3">Add a new question&nbsp;</div>
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
                            onChange={this.handleOptionOne}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control is-expanded">
                          <input
                            className="input is-success"
                            type="text"
                            placeholder="Option 2"
                            onChange={this.handleOptionTwo}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <div className="card-footer-item">
                  <div className="control">
                    <button
                      className="button is-primary"
                      onClick={this.handleAddQuestion}
                    >
                      Add Question
                    </button>
                  </div>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
