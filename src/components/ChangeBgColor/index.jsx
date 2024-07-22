import React, { useRef } from "react";

export default function ColorChanger() {
  const elementRef = useRef(null);

  const changeColor = () => {
    elementRef.current.style.backgroundColor = "navy";
    };
    
    const addNumbers = (x1, x2) => {
        return x1 + x2
    }


  return (
    <>
      <div ref={elementRef} style={{ width: "100vw", height: "100vh" }}></div>
          <button onClick={changeColor}>Change Color</button>
          <button onClick={()=>addNumbers(5,15)}>Calculate Sum</button>
    </>
  );
}
