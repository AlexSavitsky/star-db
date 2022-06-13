import React, { Component } from "react";
import "./app.css";

import ErrorIndicator from "../error-indicator";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemDetails, { Record } from "../item-details/item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="star-db-app">
            <Header />

            <RandomPlanet />

            <Row 
              left={<PersonList />} 
              right={<PersonDetails itemId={11} />} 
              />

            <Row 
              left={<PlanetList />} 
              right={<PlanetDetails itemId={3} />} 
              />

            <Row
              left={<StarshipList />}
              right={<StarshipDetails itemId={5} />}
            />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
