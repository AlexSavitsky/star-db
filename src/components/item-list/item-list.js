import React, { Component } from "react";
import "./item-list.css";

export default class ItemList extends Component {
  render() {
    return (
      <div className="item-list">
        <ul className="list-group">
          <li className="list-group-item list-group-item-action">Name 1</li>
          <li className="list-group-item list-group-item-action">Name 2</li>
          <li className="list-group-item list-group-item-action">Name 3</li>
          <li className="list-group-item list-group-item-action">Name 4</li>
        </ul>
      </div>
    );
  }
}
