import useFilterEnhanced from "./useFilterEnhanced";
import useFilter from "./useFilter";
import Thead from "./Thead.styled";
import AutoSizer from "react-virtualized-auto-sizer";

export default function DynamicTable(props) {
  const {listTitles, TableDataView} = useFilterEnhanced(props);

  // console.log(tableDataView);
  
  return (
  <>
      <table className="table-auto rounded-3xl">
      {/* <table> */}
        <Thead {...props}>
          <tr>
            {listTitles}
          </tr>
        </Thead>
        <tbody className="p-4">
          {/* {tableDataView} */}
          <TableDataView/>
        </tbody>
      </table>
    </>
  )
}
