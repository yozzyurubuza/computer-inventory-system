import React, { useState } from "react";
import Menu from "./Menu";
import Table from "./Table";
import Create from "./Create";
import SearchApply from "./SearchApply";

import { INVENTORY_LIST, ACCOUNTS } from "../config";
import "../css/LoginUI.css";

const LoginUI = ({ accountDetails, loginHandler }) => {
  const [displayComp, setDisplayComp] = useState(false);
  const [displayInnerComp, setDisplayInnerComp] = useState(false);
  const [props, setProps] = useState(null);
  const [compName, setCompName] = useState("");

  const displayCompHandler = () => {
    setDisplayComp(!displayComp);
  };

  //Function to know what component to display in the right side
  const displayComponent = (string, props, compName) => {
    if (string === "table") return <Table tableArray={props} />;

    if (string === "create")
      return <Create inventoryList={props} compName={compName} />;

    if (string === "search-apply")
      return <SearchApply searchData={props} compName={compName} />;

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
        if (!displayComp) displayCompHandler();
        setCompName("Activate Account");
        setDisplayInnerComp("search-apply");
        setProps(ACCOUNTS);
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
        setCompName("Create Item");
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
        setCompName("Create Item");
        setProps(INVENTORY_LIST);
      },
    },
    {
      button_name: "View User List",
      button_function() {
        if (!displayComp) displayCompHandler();
        setDisplayInnerComp("table");
        setCompName("Create Item");
        setProps(ACCOUNTS);
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
                {displayComponent(displayInnerComp, props, compName)}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
