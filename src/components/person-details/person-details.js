import React, { Component } from "react";
import "./person-details.css";

export default class PersonDetails extends Component {
  render() {
    return (
      <div className="person-details card">
        
          <img
            className="person-image"
            src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
          />
    

        <div>
          <ul className="list-group">
            <h3> Name</h3>
            <li className="list-group-item">
              <span className="term">Gender - </span>
              <span>Male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth - </span>
              <span>17.06.2000</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye - </span>
              <span>None</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
