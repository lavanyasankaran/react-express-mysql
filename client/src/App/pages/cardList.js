import React from "react";
import Card from "./card";
import "./cardlist.styles.css";

const CardList = ({ list }) => {
  return (
    <div className="card-list">
      {list.map((ro) => (
        <Card
          ID={ro.id}
          FIRSTNAME={ro.firstname}
          LASTNAME={ro.lastname}
          AGE={ro.age}
          DATEOFJOINING={ro.dateofjoining}
          SALARY={ro.salary}
          DEPARTMENT={ro.depatment}
          PROJECT={ro.projects}
        />
      ))}
    </div>
  );
};

export default CardList;
