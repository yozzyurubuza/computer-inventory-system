import React, { useEffect, useState } from "react";
import "../css/Login.css";

const Login = () => {
  const [count, setCount] = useState(0);

  const onLogin = (e) => {
    e.preventDefault();
    console.log("Logging in....");
  };

  return (
    <div className="ui container">
      <form className="ui form login ui segment" onSubmit={onLogin}>
        <h1>Computer Parts & Supplies</h1>
        <label>Username: </label>
        <input type="text"></input>
        <label>Password: </label>
        <input type="text"></input>
        <button className="ui button">Login</button>
      </form>
    </div>
  );
};

export default Login;
