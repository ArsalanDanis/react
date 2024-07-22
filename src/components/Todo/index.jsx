import React, { useReducer, useState } from "react";

const initialState = {
  todos: [
    { text: "writing", completed: false },
    { text: "playing", completed: false },
    { text: "cricket", completed: false },
    {},
  ],
};

//   state = {todos : []}   action = { type: "toggel", payload: "reading" }
function reducer(state, action) {
  switch (action.type) {
    case "add":
      //                        { text : "writing" , completed : false  }
      return {
        todos: [...state.todos, { text: action.payload, completed: false }],
          };
    //   
    case "toggle":
      const updatedTodos = state.todos.map((todo) => {
        if (todo.text === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      return { todos: updatedTodos };
    default:
      throw new Error();
  }
}

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    dispatch({ type: "add", payload: newTodo });
    setNewTodo("");
  };

    //                     "reading"
    const handleToggleTodo = (text) => {
    //                                   "reading"
    dispatch({ type: "toggle", payload: text });
    };
    

  return (
    <>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.text}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTodo(todo.text)}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
