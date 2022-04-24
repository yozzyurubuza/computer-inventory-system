import React from "react";
import { INVENTORY_LIST } from "../config";
import { formatKeysForThead } from "../helper";
import "../css/Inventory.css";

const Inventory = () => {
  const generateTableHeading = formatKeysForThead(INVENTORY_LIST[0]).map(
    (header, i, array) => {
      return (
        <th
          key={"TH_" + i}
          className={i === array.length - 1 ? "right aligned" : ""}
        >
          {header}
        </th>
      );
    }
  );

  const generateTableBody = INVENTORY_LIST.map((item, i) => {
    return (
      <tr key={"TD_" + i}>
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
          <tr>{generateTableHeading}</tr>
        </thead>
        <tbody>{generateTableBody}</tbody>
      </table>
    </div>
  );
};

export default Inventory;
