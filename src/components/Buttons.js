import React from "react";
import { getButtonList } from "../helper.js";
import "../css/Buttons.css";

const Buttons = ({ account_type, BUTTON_FUNCTIONS_MENU }) => {
  //Find what buttons to generate depending on the account type (user / admin)
  const getButtons = getButtonList(account_type);

  //Generate buttons
  const generateButtons = getButtons.map((getButton, i) => {
    //Find and assign the function of the button

    const findFunction = BUTTON_FUNCTIONS_MENU.find(
      (button) => button.button_name === getButton
    ).button_function;

    return (
      <button
        key={"B_" + i}
        className="ui fluid basic button bgcolor"
        onClick={findFunction}
      >
        {getButton}
      </button>
    );
  });

  return <div>{generateButtons}</div>;
};

export default Buttons;
