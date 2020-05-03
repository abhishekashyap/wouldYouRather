import React, { Component } from "react";
import { handleAddQuestion } from "../../actions/questions";
import { connect } from "react-redux";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  handleOptionOne = (e) => {
    const optionOneText = e.target.value;
    this.setState({
      optionOneText,
    });
  };

  handleOptionTwo = (e) => {
    const optionTwoText = e.target.value;
    this.setState({
      optionTwoText,
    });
  };

  handleAddQuestion = (e) => {
    e.preventDefault();
    if (!(this.state.optionOneText && this.state.optionTwoText)) {
      // For empty options
      alert("Please enter valid values");
    } else {
      console.log(this.state.optionOneText);
      console.log(this.state.optionTwoText);
      this.props.dispatch(
        handleAddQuestion(
          this.state.optionOneText,
          this.state.optionTwoText,
          () => {
            this.setState({
              optionOneText: "",
              optionTwoText: "",
            });
          }
        )
      );
      // Redirect the user
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

export default connect()(NewQuestion);
