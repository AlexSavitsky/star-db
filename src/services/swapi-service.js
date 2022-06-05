export default class SwapiService {
  _apiBase = "https://swapi.dev/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fatch ${url}` + `, received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const peoples = await this.getResource(`/people/`);
    return await peoples.results.map(this._transformPerson);
  }

  async getPersone(id) {
    const persone = await this.getResource(`/people/${id}/`);
    return this._transformPerson(persone);
  }

  async getAllPlanets() {
    const planets = await this.getResource(`/planets/`);
    return planets.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const starships = await this.getResource(`/starships/`);
    return starships.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  _extractId(item){
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      planetName: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }
  _transformPerson(person) {
    return {
      id: this._extractId(person),
      personName: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  }
  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      starshipName: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passangers: starship.passangers,
      cargoCapacity: starship.cargoCapacity
    };
  }
}
