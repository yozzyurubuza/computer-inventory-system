import React from "react";
import Menu from "./Menu";
import "../css/LoginUI.css";

const LoginUI = ({ accountDetails }) => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="four wide column">
            <div className="ui segment">
              <Menu accountDetails={accountDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
