import React from "react";

function Counter(props) {
  const { title, count, setCount } = props;

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
