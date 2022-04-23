import React from "react";
import Buttons from "./Buttons";
import "../css/Menu.css";

const Menu = ({ accountDetails, loginHandler }) => {
  return (
    <div>
      <div className="ui top attached label greeting-msg">{`Hello, ${accountDetails.username}`}</div>
      <div>
        <Buttons
          account_type={accountDetails.account_type}
          loginHandler={loginHandler}
        />
      </div>
    </div>
  );
};

export default Menu;
