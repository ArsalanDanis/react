import React, { useState } from 'react'

const ProductCard = (props) => {
  const [items, setItems] = useState([]);

  const addProducts = (item) => {
    setItems([...items, item ])
  }

    console.log("Items", items)
  return (
    <div
      style={{
        border: "2px solid",
        padding: "15px",
        width: "300px",
        backgroundColor: "greenyellow",
        borderRadius: "25px",
      }}
    >
      <img
        src={props.item.images[0]}
        alt={props.item.title}
        height={120}
        width={200}
      />
      <h1>{props.item.title}</h1>
      <p>{props.item.description}</p>
      <p>₹-{props.item.price}</p>
      <button onClick={() => addProducts(props.item.title)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard