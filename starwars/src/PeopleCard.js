import React from "react";

const PeopleCard = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.heigth}</h3>
      <h3>{props.eyeColor}</h3>
      <h3>{props.skinColor}</h3>
      <h3>{props.mass}</h3>
    </div>
  );
};

export default PeopleCard;
