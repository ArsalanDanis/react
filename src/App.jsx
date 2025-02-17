import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/InputField";
import Card from "./contents/Card";
import CardData from "./components/Usestate";
import List from "./components/Items";
import Counter from "./components/Counter";
import ChildComponent from "./components/ChildComponent";
import UseEffect from "./components/Useeffect";
import User from "./components/user";
import Header from "./components/Header";
import PrentComponet from "./components/Context";
import { createContext } from "react";
import UseRef from "./components/UseRef";
import ScrollToTopButton from "./components/Scroll";
import ColorChanger from "./components/ChangeBgColor";
import Todos from "./components/UseReducer";
import CounterReducer from "./components/CounterReducer";
import TodoList from "./components/Todo";
// export const UserContext = createContext();
export const UserContext = createContext();

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
  // const [toggle, setToggle] = useState(false);
  // const productList = [];

  // const handleMode = () => {
  //   setToggle(!toggle);
  // };

  // Object Destructuring

  // const obj = { name: "arsalan", email: "arsalan.jamia@gmail.com" };

  // const {name , email} = obj

  // // Array Destructuring

  // const arr = ["arsalan", "ashish", "abhay"];

  // const [x1, x2, x3] = arr;

  // console.log("X-----", x1, x2, x3, arr[0]);

  // const [count, setCount] = useState(0);

  //  const [data, setData] = useState("");

  //  const handleDataChange = (newData) => {
  //    setData(newData);
  //  };

  // const user = "Shivam";

  return (
    <>
      <TodoList />
      {/* <CounterReducer /> */}
      {/* <input type="checkbox"  name="" id="" /><label htmlFor="">Male</label> */}
      {/* <Todos /> */}
      {/* <ColorChanger /> */}
      {/* <ScrollToTopButton /> */}
      {/* <UseRef /> */}
      {/* <h1>UseContext</h1> */}
      {/* <UserContext.Provider>
        <PrentComponet value={user} />
      </UserContext.Provider> */}
      {/* <Header /> */}
      {/* <h1>Hii Arsalan</h1>
       <UseEffect />
      <User />
      <p>Data: {data}</p>
      <ChildComponent onDataUpdate={handleDataChange} /> */}

      {/* <Counter title="Counter Example" count={count} setCount={setCount} />

      <List />
      <CardData /> */}
      {/* <h1>{email}</h1>
      <h2>{ name}</h2>
      <h1>{x2}</h1>
      <h1>{x3}</h1> */}
      {/* {data:  { name: "arsalan", email: "arsalan.jamia@gmail.com" }} */}
      {/* <Card data={obj} />  */}
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
