import React, { Component } from "react";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, personName }) => {
      return (
        <li
          className="list-group-item list-group-item-action"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {personName}
        </li>
      );
    });
  }

  render() {
    const { peopleList, loading } = this.state;
    if (!peopleList) {
      return (
        <div className="item-list">
          <Spinner />
        </div>
      );
    }

    const items = this.renderItems(peopleList);

    return (
      <div className="item-list">
        <ul className="list-group">{items}</ul>
      </div>
    );
  }
}
