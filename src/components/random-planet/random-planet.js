import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {}
  };

  constructor() {
    super();
    this.updatePlanet();
  }

onPlanetLoaded = (planet) => {
  this.setState({planet});
};

  updatePlanet() {
    const id = Math.floor(Math.random() * 16) + 2;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded); 
  }

  render() {
    const {planet: {id, planetName, population, rotationPeriod, diameter} } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />

        <div>
          <ul className="list-group">
            <h3>{planetName}</h3>
            <li className="list-group-item">
              <span className="term">Population - </span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation period - </span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter - </span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
