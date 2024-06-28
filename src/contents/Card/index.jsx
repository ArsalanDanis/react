import React from "react";
import "./index.css";

const Card = (props) => {
    console.log("PROPS",props)
  return (
    <>
      <div className="card">
        <h1>{props.userName}</h1>
        <p>
          {props.description}
        </p>
      </div>
    </>
  );
};

export default Card;
