import React from "react";
import { ACCOUNTS } from "../config";
import "../css/Login.css";

const Login = ({ loginHandler, accountHandler }) => {
  const onLogin = (e) => {
    e.preventDefault();

    // Check if user account exists, return object if found.
    const checkUser = ACCOUNTS.find(
      (account) => account?.username === e.target.user.value
    );

    if (!checkUser) return alert("Account not found!");
    if (checkUser?.password !== e.target.pass.value)
      return alert("Incorrect Password!");

    //Return Full account details as object
    accountHandler(checkUser);
    loginHandler();
    console.log(checkUser);
    return alert("Logging in...");
  };

  return (
    <div className="ui container">
      <form
        className="ui form login ui segment"
        onSubmit={onLogin}
        method="POST"
      >
        <h1>Computer Parts & Supplies</h1>
        <label>Username: </label>
        <input type="text" name="user"></input>
        <label>Password: </label>
        <input type="password" name="pass"></input>
        <button className="ui button">Login</button>
      </form>
    </div>
  );
};

export default Login;
