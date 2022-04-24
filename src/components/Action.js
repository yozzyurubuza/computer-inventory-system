import React from "react";
import { DISPLAY_ACTION } from "../config";
import { getActionFunc, getDisplayAction } from "../helper";

const Action = ({ searchData, compName, searchRes }) => {
  const displayAction = getDisplayAction(DISPLAY_ACTION, compName);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(compName);
  };

  return (
    <div>
      <label>Action: </label>
      <form className="ui form" method="POST" onSubmit={onSubmit}>
        {displayAction}
        <button className="ui red button">Apply</button>
      </form>
    </div>
  );
};

export default Action;
