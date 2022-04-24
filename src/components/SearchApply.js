import React from "react";
import Table from "./Table";

const SearchApply = ({ searchData, compName }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const displaySearch = () => {};

  return (
    <div>
      <h1>{compName}</h1>
      <form className="ui form" method="GET" onSubmit={onSubmit}>
        <label>Search Account: </label>
        <input type="text" name="search"></input>
        <button className="ui primary button">Search</button>
      </form>
    </div>
  );
};

export default SearchApply;
