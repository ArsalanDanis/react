import React from "react";
import GrandChild from "../GrandChild";

function ChildComponent() {
  // console.log("ChildProps",props)
  return (
    <div>
      {/* <h1>Child Component</h1> */}
      <GrandChild />
      {/* <h2>{ props.childUser}</h2> */}
    </div>
  );
}

export default ChildComponent;