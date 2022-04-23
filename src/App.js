import React, { useState } from "react";
import Login from "./components/Login";
import LoginUI from "./components/LoginUI";

const App = () => {
  const [renderLogin, setRenderLogin] = useState(true);
  const [accountDetails, setAccountDetails] = useState({});

  const loginHandler = (accountDetails) => {
    setRenderLogin(false);
    setAccountDetails(accountDetails);
  };

  return (
    <div>
      <div>{renderLogin ? <Login loginHandler={loginHandler} /> : null}</div>
      <div>
        {!renderLogin ? <LoginUI accountDetails={accountDetails} /> : null}
      </div>
    </div>
  );
};

export default App;
