import React from "react";
import Buttons from "./Buttons";
import "../css/Menu.css";

const Menu = ({ accountDetails }) => {
  return (
    <div>
      <div className="ui top attached label greeting-msg">{`Hello, ${accountDetails.username}`}</div>
      <div>
        <Buttons />
      </div>
    </div>
  );
};

export default Menu;
