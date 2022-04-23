import React from "react";
import { BUTTON_MENU, BUTTON_FUNCTIONS } from "../config.js";
import "../css/Buttons.css";

const Buttons = ({ account_type }) => {
  //Find what buttons to generate depending on the account type (user / admin)
  const getButtons = BUTTON_MENU.find(
    (account) => account.account_type === account_type
  ).button_list;

  console.log(getButtons);

  //Generate buttons
  const generateButtons = getButtons.map((getButton, i) => {
    //Find and assign the function of the button
    const findFunction = BUTTON_FUNCTIONS.find(
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

  return (
    <div>
      <div className="ui vertical basic buttons"></div>
      {generateButtons}
    </div>
  );
};

export default Buttons;
