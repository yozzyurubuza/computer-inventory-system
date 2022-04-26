import React from "react";

const Create = ({ inventoryList, compName }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (e.target.item_name.value === "" || e.target.quantity.value === "")
      return alert("Please fill out the empty data");

    const createData = {
      item_id: inventoryList.at(-1).item_id + 1,
      item_image: e.target.item_image.value,
      item_name: e.target.item_name.value,
      active: e.target.activate.value,
      quantity: e.target.quantity.value,
    };

    //Insert created data to database
    inventoryList.push(createData);
    console.log(createData);
  };

  return (
    <div>
      <h1>{compName}</h1>
      <div>
        <form className="ui form" onSubmit={onSubmit} method="POST">
          <label>Item Name: </label>
          <input type="text" name="item_name" placeholder="Name..."></input>
          <label>Item Image: </label>
          <input
            type="text"
            name="item_image"
            placeholder="URL Link..."
          ></input>
          <label>Active? </label>
          <select id="activate" name="activate">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <label>Quantity: </label>
          <input type="number" name="quantity" min="0"></input>
          <button className="ui button positive">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
