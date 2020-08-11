import React from "react";
import "./card.styles.css";
const Card = (props) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <div className="card-container">
        <h2>ID:{props.ID}</h2>
        <h4>FIRSTNAME:{props.FIRSTNAME}</h4>
        <h4>LASTNAME:{props.LASTNAME}</h4>
        <h4>AGE:{props.AGE}</h4>
        <h4>DATEOFJOINING:{props.DATEOFJOINING}</h4>
        <h4>SALARY:{props.SALARY}</h4>
        <h4>DEPARTMENT:{props.DEPARTMENT}</h4>
        <h4>PROJECT:{props.PROJECT}</h4>
      </div>
    </div>
  );
};

export default Card;
