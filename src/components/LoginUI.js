import React, { useState } from "react";
import Menu from "./Menu";
import "../css/LoginUI.css";
import Inventory from "./Inventory";

const LoginUI = ({ accountDetails }) => {
  const [buttonFunc, setButtonFunc] = useState("");

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="four wide column">
            <div className="ui segment">
              <Menu accountDetails={accountDetails} />
            </div>
          </div>
          <div className="twelve wide column">
            <div className="ui segment">
              <Inventory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
