import React from "react";
import { formatKeysForThead, getTableData } from "../helper";
import "../css/Table.css";

const Table = ({ tableArray, compName }) => {
  const handleRowClick = (rowValue) => {
    // console.log(rowValue);
    return rowValue;
  };

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

    return (
      <tr key={"TR_" + i} onClick={() => handleRowClick(items)}>
        {tableData}
      </tr>
    );
  });

  return (
    <div>
      <h1>{compName}</h1>
      <div className="table-scroll">
        <table className="ui unstackable table">
          <thead>
            <tr>{generateTableHeading}</tr>
          </thead>
          <tbody>{generateTableBody}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
