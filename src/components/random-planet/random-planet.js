import React, { Component } from "react";
import "./random-planet.css";

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
        />

        <div>
          <ul className="list-group">
            <h3> Planet Name</h3>
            <li className="list-group-item">
                <span className="term">Population  -  </span>
                <span>2222</span>
            </li>
            <li className="list-group-item">
            <span className="term">Rotation period  -  </span>
            <span>965year</span>
            </li>
            <li className="list-group-item">
            <span className="term">Diameter  -  </span>
            <span>6578.1</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
