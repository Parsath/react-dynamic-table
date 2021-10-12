import useFilterEnhanced from './useFilterEnhanced';
import Thead from '../style/thead.styled';

export default function DynamicTable(props) {
  const { listTitles, TableDataView } = useFilterEnhanced(props);

  return (
    <>
      <table className="table-auto rounded-3xl">
        <Thead {...props}>
          <tr>{listTitles}</tr>
        </Thead>
        <tbody className="p-4">
          <TableDataView />
        </tbody>
      </table>
    </>
  );
}
