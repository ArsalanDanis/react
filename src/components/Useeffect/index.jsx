import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [data, setData] = useState(0);
    const [user,setUser] = useState("Arsalan")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));

    // console.log("UseEffect");
  }, [user]);

  const handleClick = () => {
    setData((prevData) => prevData + 1);
    };
    
    const handleUser = () => {
        setUser("Danish")
    }

  return (
    <div>
          <h1>useEffect</h1>
          <h3>User :{ user }</h3>
      <h2>Data: {data}</h2>
          <button onClick={handleClick} >Click Me</button>
          <hr />
          <br />
          <button onClick={handleUser}>User</button>
    </div>
  );
};

export default UseEffect;
