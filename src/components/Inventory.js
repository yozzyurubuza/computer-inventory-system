import React from "react";
import { formatKeysForThead, getTableData } from "../helper";
import "../css/Inventory.css";

const Inventory = ({ tableArray }) => {
  const generateTableHeading = formatKeysForThead(tableArray[0]).map(
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

  const generateTableBody = tableArray.map((items, i) => {
    const tableData = getTableData(items).map((data, i, array) => (
      <td
        key={"TD_" + i}
        className={i === array.length - 1 ? "right aligned" : ""}
      >
        {data.toString()}
      </td>
    ));

    return <tr key={"TR_" + i}>{tableData}</tr>;
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
