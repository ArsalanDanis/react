import React from 'react'

const ProductCard = (props) => {

    console.log("ProductCard------->Props", props)
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
      <img src={props.item.images[0]} alt={props.item.title} height={120} width={200} />
      <h1>{props.item.title}</h1>
      <p>{props.item.description}</p>
      <p>₹-{props.item.price}</p>
    </div>
  );
}

export default ProductCard