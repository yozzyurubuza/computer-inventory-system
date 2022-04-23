import React from "react";
import { getButtonFunction, getButtonList } from "../helper.js";
import "../css/Buttons.css";

const Buttons = ({ account_type, loginHandler }) => {
  //Find what buttons to generate depending on the account type (user / admin)
  const getButtons = getButtonList(account_type);

  console.log(getButtons);
  //Generate buttons
  const generateButtons = getButtons.map((getButton, i) => {
    //Find and assign the function of the button

    const buttonFunction =
      getButton === "Logout" ? loginHandler : getButtonFunction(getButton);

    return (
      <button
        key={"B_" + i}
        className="ui fluid basic button bgcolor"
        onClick={buttonFunction}
      >
        {getButton}
      </button>
    );
  });

  return (
    <div>
      <div className="ui vertical basic buttons"></div>
      {generateButtons}
    </div>
  );
};

export default Buttons;
