import React, { Component } from "react";
import "./app.css";

import ErrorIndicator from "../error-indicator";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import StarshipsDetails from "../sw-components/starship-details";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { element } from "prop-types";

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
          <Router>
            <div className="star-db-app">
              <Header />

              <RandomPlanet updateInterval={10000}/>

              <Routes>
                <Route path="/" element={<h2>Welcome to StarDB</h2>}/>
                <Route path="/people" element={<PeoplePage/>} />
                <Route path="/planets" element={<PlanetsPage />} />
                <Route path="/starships" element={<StarshipsPage />} />
              </Routes>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
