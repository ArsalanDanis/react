import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const CardData = () => {
  const [products, setProducts] = useState([]);
  const [userName, setUserName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  const handleButtonClick = () => {
    setUserName("PIYUSH");
  };

  const increamentFunction = () => {
    setCount((previousCount) => previousCount + 1);
  }

   const decreamentFunction = () => {
     setCount((previousCount) => previousCount - 1);
  };
  
  console.log("Products--------->", products);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "navy",
          fontSize: "25px",
          padding: "10px",
        }}
      >
        Products List
      </div>
      <button onClick={decreamentFunction}>Decrement(-)</button>
      <h1>Counter : {count}</h1>
      <button onClick={increamentFunction}>Increament(+)</button>
      {/* <button type="button" onClick={handleButtonClick}>
        Show Name
      </button> */}
      <h1>{userName}</h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {products.map((data) => (
          <ProductCard item={data} />
        ))}
      </div>
      {/* <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {products.slice(0,10).map((item) => (
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
              src={item.images[0]}
              alt={item.title}
              height={120}
              width={200}
            />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>₹-{item.price}</p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default CardData;
