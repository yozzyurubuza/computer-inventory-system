import React from "react";
import { BUTTON_MENU } from "../config.js";
import "../css/Buttons.css";

const Buttons = ({ account_type }) => {
  const getButtons = BUTTON_MENU.find(
    (account) => account.account_type === account_type
  ).button_list;

  return (
    <div>
      <div className="ui vertical basic buttons"></div>
      {/* Generate buttons according to account type */}
      {getButtons.map((button, i) => {
        return (
          <button key={"B_" + i} className="ui basic button bgcolor">
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
