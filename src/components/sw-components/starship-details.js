import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="costInCredits" label="Cost" />
      <Record field="length" label="Length" />
      <Record field="cargoCapacity" label="Cargo capacity" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
    return {
      getData: swapiService.getStarship,
      getImageUrl: swapiService.getStarshipImage
    }
  }

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
