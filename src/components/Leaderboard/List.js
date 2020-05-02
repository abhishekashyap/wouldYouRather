import React, { Component } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";

class List extends Component {
  componentDidUpdate() {
    console.log("List users", this.props.users);
  }
  render() {
    return (
      <div>
        {Object.keys(this.props.users).map((userId, index) => (
          <ListItem
            key={index}
            user={this.props.users[userId]}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(List);
