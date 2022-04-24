import React, { useState } from "react";
import Action from "./Action";
import { searchFunctions, identifyTable } from "../helper";
import "../css/SearchApply.css";

const SearchApply = ({ searchData, compName }) => {
  const [result, setResult] = useState(null);
  const [labelFound, setLabelFound] = useState("");

  const label = () => {
    const getTableType = identifyTable(compName);
    if (getTableType === "Account") return setLabelFound("Account");
    if (getTableType === "Inventory") return setLabelFound("Item");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setResult(searchFunctions(e, compName, searchData));
    label();
  };

  return (
    <div>
      <div>
        <h1>{compName}</h1>
        <form className="ui form" method="GET" onSubmit={onSubmit}>
          <label>Search: </label>
          <input type="text" name="search"></input>
          <button className="ui primary button">Search</button>
        </form>
      </div>
      <div className="margin-top-bot">
        {!result ? null : (
          <div>
            <div className="ui floating message">
              <p>{labelFound} Found !!</p>
            </div>
            <div>
              <Action searchData={result} compName={compName} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchApply;
