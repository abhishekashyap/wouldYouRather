import React, { Component } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";

class List extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.users)
          .map((userId) => this.props.users[userId])
          .sort(
            (a, b) =>
              b.questions.length +
              Object.keys(b.answers).length -
              (a.questions.length + Object.keys(a.answers).length)
          )
          .map((user, index) => (
            <ListItem key={index} user={user} />
          ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(List);
