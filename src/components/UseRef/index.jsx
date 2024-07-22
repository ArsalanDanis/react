import React from 'react'
import { useRef } from 'react';

const UseRef = () => {
    const inputBox = useRef();

    const handleClick = () => {
        inputBox.current.focus();
    }

    

  return (
    <div>
      <h1>UseRef</h1>
      <input type="text" name="name" id="inpt" ref={inputBox} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default UseRef