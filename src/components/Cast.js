import React from "react";
import "../styles/Cast.scss";

function Cast(props) {
  return (
    <div key={props.Cast.ID} className="card-container">
      <div className="card-name">{props.Cast.Name}</div>
      <div className="card-per">{props.Cast.ID}</div>
    </div>
  );
}

export default Cast;
