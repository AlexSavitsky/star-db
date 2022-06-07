import React, { Component } from "react";

import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import RandomPlanet from "../random-planet";

import "./app.css";

export default class App extends Component {

  state={
    selectedPerson: null
  } 

  onPersonSelected = (id) => {
    this.setState({ 
      selectedPerson: id,
    });
  }

  render() {
    return (
      <div className="star-db-app">
          <Header/>
          <RandomPlanet/>
          <ItemList onItemSelected={this.onPersonSelected}/>
          <PersonDetails personId={this.state.selectedPerson}/>
      </div>
    );
  }
}
