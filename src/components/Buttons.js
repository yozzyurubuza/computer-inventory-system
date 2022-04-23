import React from "react";
import { getButtonList } from "../helper.js";
import "../css/Buttons.css";

const Buttons = ({ account_type, loginHandler, BUTTON_FUNCTIONS_MENU }) => {
  //Find what buttons to generate depending on the account type (user / admin)
  const getButtons = getButtonList(account_type);

  console.log(getButtons);
  //Generate buttons
  const generateButtons = getButtons.map((getButton, i) => {
    //Find and assign the function of the button

    const findFunction = BUTTON_FUNCTIONS_MENU.find(
      (button) => button.button_name === getButton
    ).button_function;

    const buttonFunction = getButton === "Logout" ? loginHandler : findFunction;

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
