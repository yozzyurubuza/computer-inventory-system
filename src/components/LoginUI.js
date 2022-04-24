import React, { useState } from "react";
import Menu from "./Menu";
import Table from "./Table";
import Create from "./Create";

import { INVENTORY_LIST, ACCOUNTS } from "../config";
import "../css/LoginUI.css";

const LoginUI = ({ accountDetails, loginHandler }) => {
  const [displayComp, setDisplayComp] = useState(false);
  const [tableItems, setTableItems] = useState([{}]);
  const [displayInnerComp, setDisplayInnerComp] = useState(false);

  const displayCompHandler = () => {
    setDisplayComp(!displayComp);
  };

  const setTable = (table) => {
    setTableItems(table);
  };

  const displayComponent = (string) => {
    if (string === "table") return <Table tableArray={tableItems} />;

    if (string === "create") return <Create inventoryList={INVENTORY_LIST}/>;

    return null;
  };

  const BUTTON_FUNCTIONS_MENU = [
    {
      button_name: "Update User Details",
      button_function() {
        console.log("Update User Details?....");
      },
    },
    {
      button_name: "Activate Account",
      button_function() {
        console.log("Activate Account?....");
      },
    },
    {
      button_name: "Activate Inventory Items",
      button_function() {
        console.log("Activate Inventory Items?....");
      },
    },
    {
      button_name: "Create Item",
      button_function() {
        if (!displayComp) displayCompHandler();
        setDisplayInnerComp("create");
      },
    },
    {
      button_name: "Update Item",
      button_function() {
        console.log("Update Item?....");
      },
    },
    {
      button_name: "Edit Item",
      button_function() {
        console.log("Edit Item?....");
      },
    },
    {
      button_name: "Delete Item",
      button_function() {
        console.log("Delete Item?....");
      },
    },
    {
      button_name: "Assign Role",
      button_function() {
        console.log("Assign Role?....");
      },
    },
    {
      button_name: "Upload Image to Item",
      button_function() {
        console.log("Upload Image to Item?....");
      },
    },
    {
      button_name: "View Inventory",
      button_function() {
        if (!displayComp) displayCompHandler();
        setDisplayInnerComp("table");
        setTable(INVENTORY_LIST);
      },
    },
    {
      button_name: "View User List",
      button_function() {
        if (!displayComp) displayCompHandler();
        setDisplayInnerComp("table");
        setTable(ACCOUNTS);
      },
    },
    {
      button_name: "Logout",
      button_function() {
        loginHandler();
      },
    },
  ];

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="four wide column">
            <div className="ui segment menu">
              <Menu
                accountDetails={accountDetails}
                BUTTON_FUNCTIONS_MENU={BUTTON_FUNCTIONS_MENU}
              />
            </div>
          </div>
          <div className="twelve wide column min-margin">
            {displayComp ? (
              <div className="ui segment new-components">
                {displayComponent(displayInnerComp)}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
