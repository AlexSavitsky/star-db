import React from "react";
import ItemList from "../item-list";
import {withData, withSwapiService} from '../hoc-helpers';

const withChildFunction  = (Wrapped, fn) => {
return (props) => {
    return(
        <Wrapped {...props}>
            {fn}
        </Wrapped>
    )
}
}

const listWithChildren = withChildFunction(ItemList, ({name}) => <span>{name}</span>);

const mapPersonMethodsToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = withSwapiService( withData(listWithChildren), mapPersonMethodsToProps);

const PlanetList = withSwapiService(withData(listWithChildren), mapPlanetMethodsToProps);

const StarshipList = withSwapiService(withData(listWithChildren), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};