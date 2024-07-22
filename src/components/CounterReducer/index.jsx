import React, { useReducer, useState } from "react";

const initialState = {
    count: 0,
    user: "abhinav"
};

// state = {count : 0}  action = { type: "decrement"}
function reducer(state, action) {
  switch (action.type) {
      case "increment":
        //               0
          return { count: state.count + 1 };
      //
      case "decrement":
          //              0
          return { count: state.count - 1 };
      //
      case "reset":
          //    
          return { count: 0 };
      //
    default:
      throw new Error();
  }
}

function CounterReducer() {
    //                                    state = { count : 0 }
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log("STATE---------->", state)
    
    const [user, setUser] = useState("Abhinav");
   


  return (
      <div>
          {/*               0      */}
          <h1>Count: {state.count}</h1>
          <h2>{user}</h2>
          <hr />
           <button onClick={()=>setUser("Viajy")}>Change User</button>
          <hr />
      <button style={{margin:"15px"}} onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button style={{margin:"15px"}} onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button style={{margin:"15px"}} onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterReducer;
