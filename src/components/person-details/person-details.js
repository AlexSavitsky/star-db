import React, { Component } from "react";
import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
  };

  componentDidMount() {
    this.updatePerson();
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService.getPersone(personId).then((person) => {
      this.setState({ person, loading: false });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({loading: true});
      this.updatePerson();
    }
  }

  render() {
    const {person, loading} = this.state;
    
    if (!this.state.person) {
      return <span className="person-select">Select persone from a list</span>;
    }

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonView person={person} /> : null;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, personName, gender, birthYear, eyeColor } = person;

  return (<React.Fragment>
    <img
      className="person-image"
      src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
    />

    <div>
      <ul className="list-group">
        <h3>{personName}</h3>
        <li className="list-group-item">
          <span className="term">Gender - </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Birth - </span>
          <span>{birthYear}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Eye - </span>
          <span>{eyeColor}</span>
        </li>
      </ul>
    </div>
  </React.Fragment>);
};
