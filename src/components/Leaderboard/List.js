import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  render() {
    return (
      <div>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }
}
