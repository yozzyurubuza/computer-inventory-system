import React from "react";
import { DISPLAY_ACTION } from "../config";

const Action = ({ searchData, compName }) => {
  const getDisplayAction = DISPLAY_ACTION.find(
    (action) => action.action_name === compName
  ).display();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <label>Action: </label>
      <form className="ui form" method="POST" onSubmit={onSubmit}>
        {getDisplayAction}
        <button className="ui red button">Apply</button>
      </form>
    </div>
  );
};

export default Action;
