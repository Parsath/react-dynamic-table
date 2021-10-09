import { useState } from "react";
import useFilter from "./useFilter"

export default function DynamicTable() {
  const {listTitles, tableDataView, setColumnAsc, setColumnDesc} = useFilter();

  console.log(tableDataView);
  
  return (
  <>
      <table className="table-auto">
      {/* <table> */}
        <thead>
          <tr>
            {listTitles}
          </tr>
        </thead>
        <tbody>
          {tableDataView}
        </tbody>
      </table>
    </>
  )
}
