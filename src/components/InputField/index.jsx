import React from 'react'

const Input = (props) => {
  return (
    <div>
      <label>{props.lable}:</label>
      <input type={props.type} name={props.name} id={props.id} />
    </div>
  );
}

export default Input