import React, { useState } from "react";

function List() {

    const [items, setItems] = useState(["Apples", "Oranges", "Bananas"]);
    const products = ["Grapes", "Papaya", "Pineapple", "Mango"];

  const handleAddItem = (id) => {
    setItems([...items, products[id]]);
  };

  return (
    <div>
      <ul>
        {items.map((item,index) => (
          <li key={index}>{item}</li> 
        ))}
          </ul>
          <h1>count: { items.length}</h1>
      <button onClick={()=>handleAddItem(2)}>Add Item</button>
    </div>
  );
}

export default List;