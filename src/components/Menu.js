import React from "react";
import Buttons from "./Buttons";
import "../css/Menu.css";

const Menu = ({ accountDetails, BUTTON_FUNCTIONS_MENU }) => {
  return (
    <div>
      <div className="label-margin">
        <label className="ui top attached label greeting-msg">{`Hello, ${accountDetails.username}`}</label>
      </div>
      <div>
        <Buttons
          account_type={accountDetails.account_type}
          BUTTON_FUNCTIONS_MENU={BUTTON_FUNCTIONS_MENU}
        />
      </div>
    </div>
  );
};

export default Menu;
