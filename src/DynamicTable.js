import useFilter from "./useFilter"
import Thead from "./Thead.styled";

export default function DynamicTable(props) {
  const {listTitles, tableDataView, setColumnAsc, setColumnDesc} = useFilter(props);

  console.log(tableDataView);
  
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
          {tableDataView}
        </tbody>
      </table>
    </>
  )
}
