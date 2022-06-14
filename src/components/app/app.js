import React, { Component } from "react";
import "./app.css";

import ErrorIndicator from "../error-indicator";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";

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

            <PeoplePage/>

            <PlanetsPage/>

            <StarshipsPage/>

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
