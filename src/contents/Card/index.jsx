import React from "react";
import "./index.css";

const Card = (props) => {
  // const props = { data: { name: "arsalan", email: "arsalan.jamia@gmail.com" } };

  const { data } = props;
    console.log("PROPS",data)
  return (
    <>
      <div className="card">
        <h1>{data.name}</h1>
        <p>
          {data.email}
        </p>
      </div>
    </>
  );
};

export default Card;
