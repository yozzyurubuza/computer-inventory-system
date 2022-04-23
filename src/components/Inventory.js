import React from "react";
import { INVENTORY_LIST } from "../config";

const Inventory = () => {
  const generateInventory = INVENTORY_LIST.map((item) => {
    return (
      <tr>
        <td>{item.item_id}</td>
        <td>{item.item_image}</td>
        <td>{item.item_name}</td>
        <td class="right aligned">{item.quantity}</td>
      </tr>
    );
  });

  return (
    <div>
      <table class="ui unstackable table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Image</th>
            <th>Item Name</th>
            <th class="right aligned">Quantity</th>
          </tr>
        </thead>
        <tbody>{generateInventory}</tbody>
      </table>
    </div>
  );
};

export default Inventory;
