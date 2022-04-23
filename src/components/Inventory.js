import React from "react";
import { INVENTORY_LIST } from "../config";
import "../css/Inventory.css";

const Inventory = () => {
  const generateInventory = INVENTORY_LIST.map((item, i) => {
    return (
      <tr key={"I_" + i}>
        <td>{item.item_id}</td>
        <td>{item.item_image}</td>
        <td>{item.item_name}</td>
        <td className="right aligned">{item.quantity}</td>
      </tr>
    );
  });

  return (
    <div className="table-scroll">
      <table className="ui unstackable table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Image</th>
            <th>Item Name</th>
            <th className="right aligned">Quantity</th>
          </tr>
        </thead>
        <tbody>{generateInventory}</tbody>
      </table>
    </div>
  );
};

export default Inventory;
