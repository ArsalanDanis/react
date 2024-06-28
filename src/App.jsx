import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/InputField";
import Card from "./contents/Card";

function App() {
  // const cardsData = [
  //   {
  //     id: 1,
  //     userName: "Anil",
  //     description: "lorem abvch njhk khkn knjo khikhi bhihih",
  //   },
  //   {
  //     id: 2,
  //     userName: "Ashish",
  //     description: "lorem abvch njhk khkn knjo khikhi bhihih",
  //   },
  //   {
  //     id: 3,
  //     userName: "Vinay",
  //     description: "lorem abvch njhk khkn knjo khikhi bhihih",
  //   },
  //   {
  //     id: 4,
  //     userName: "ashutosh",
  //     description: "lorem abvch njhk khkn knjo khikhi bhihih",
  //   },
  //   {
  //     id: 5,
  //     userName: "vijay",
  //     description: "lorem abvch njhk khkn knjo khikhi bhihih",
  //   },
  //   {
  //     id: 6,
  //     userName: "Ajeet",
  //     description: "lorem abvch njhk khkn knjo khikhi bhihih",
  //   },
  // ];
  //                                                   color
  // const colors = [
  //   "Red",
  //   "Green",
  //   "Yellow",
  //   "Pink",
  //   "Orange",
  //   "Red",
  //   "Green",
  //   "Yellow",
  //   "Pink",
  //   "Orange",
  // ];

  // const handleSubmit = () => {
  //   console.log("Clicked Submit");
  // };
  // const handleLogin = () => {
  //   console.log("Clicked Login");
  // };

  // const handleSignUp = () => {
  //   console.log("Clicked Sign up");
  // };

  // const inputData = [
  //   { id: 1, lable: "Name", type: "text", name: "user Name", id: "name" },
  //   {
  //     id: 2,
  //     lable: "Password",
  //     type: "password",
  //     name: "password",
  //     id: "password",
  //   },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 1, lable: "Name", type: "text", name: "user Name", id: "name" },
  //   {
  //     id: 2,
  //     lable: "Password",
  //     type: "password",
  //     name: "password",
  //     id: "password",
  //   },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 1, lable: "Name", type: "text", name: "user Name", id: "name" },
  //   {
  //     id: 2,
  //     lable: "Password",
  //     type: "password",
  //     name: "password",
  //     id: "password",
  //   },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  //   { id: 3, lable: "Email", type: "email", name: "email", id: "email" },
  // ];
  // const [showBox, setShowBox] = useState(false);

  // const handleOpen = () => {
  //   setShowBox(!showBox);
  //   //            false-->true-->false-->true
  // };

  // const handleClose = () => {
  //   setShowBox(false);
  // };
  const [toggle, setToggle] = useState(false);

  const handleMode = () => {
    setToggle(!toggle)
  }

  const obj = { name: "arsalan", email: "arsalan.jamia@gmail.com" };

  


  return (
    <>
      <Card data={obj} />
      {/* <button
        onClick={handleMode}
        className={`${toggle ? "darkButton" : "lightButton"}`}
        style={{ cursor: "pointer", padding: "20px" }}
      >
        {toggle ? "Dark Mode" : "Light Mode"}
      </button>

      {toggle ? (
        <div className="light">Light</div>
      ) : (
        <div className="dark">Dark</div>
      )} */}

      {/* <button onClick={handleOpen} style={{ cursor: "pointer" }}>
        Box
      </button>
      <br />
      <br />
      <br /> */}
      {/* <button onClick={handleClose} style={{ cursor: "pointer" }}>
        Close Box
      </button> */}

      {/* {showBox && (
        <div className="box">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            ex maxime sint? Voluptates esse quis dolorem consequatur. Eveniet,
            earum cum totam ea deleniti consectetur aperiam non natus. Aperiam,
            nemo harum.
          </p>
        </div>
      )} */}

      <form action="post">
        {/* {inputData.map((data) => (
          <Input lable={data.lable} type={data.type} name={data.name} id={data.id} key={data.id} />
        ))} */}
        {/* <Input lable="Name" type="text" name="user Name" id="name" /> */}
        {/* <Input lable="Password" type="password" name="password" id="password" />
        <Input lable="Email" type="email" name="email" id="email" /> */}
        {/* <label>Name:</label>
        <input type="text" name="name" id="name" />
        <label>Password:</label>
        <input type="password" name="password" id="password" />
         <label>Password:</label>
        <input type="password" name="password" id="password" />
         <label>Password:</label>
        <input type="password" name="password" id="password" />
         <label>Password:</label>
        <input type="password" name="password" id="password" />
        <label>email:</label>
        <input type="email" name="email" id="email" /> */}
      </form>
      {/* <Form
        name="Ajay"
        email="ajay1245@gmail.com"
        namePlaceholder="Enter your Name"
        emailPlaceholder="Enter your email"
      /> */}

      {/* {cardsData.map((data) => (
        <Card
          key={data.id}
          userName={data.userName}
          description={data.description}
        />
      ))} */}

      <ul>
        {/* {colors.map((color) => (
          <li>{color}</li>
        ))} */}
        {/* <li>Yellow</li>
        <li>Pink</li>
        <li>Orange</li> */}
      </ul>
      {/* <Button text="Submit" onClick={handleSubmit} />
      <br /><br />
      <Button text="Login" onClick={handleLogin} />
      <br /><br />
      <Button text="Sign Up" onClick={handleSignUp} />  */}
    </>
  );
}

export default App;
