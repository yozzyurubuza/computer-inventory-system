import React, { useState } from "react";
import Login from "./components/Login";
import LoginUI from "./components/LoginUI";

const App = () => {
  const [renderLogin, setRenderLogin] = useState(true);
  const [accountDetails, setAccountDetails] = useState({});

  const loginHandler = () => {
    setRenderLogin(!renderLogin);
    console.log(renderLogin);
  };

  const accountHandler = (accountDetails) => {
    setAccountDetails(accountDetails);
  };

  return (
    <div>
      <div>
        {renderLogin ? (
          <Login accountHandler={accountHandler} loginHandler={loginHandler} />
        ) : null}
      </div>
      <div>
        {!renderLogin ? (
          <LoginUI
            accountDetails={accountDetails}
            loginHandler={loginHandler}
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
