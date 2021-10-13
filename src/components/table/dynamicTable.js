import useFilterEnhanced from './useFilterEnhanced';
import Thead from '../style/thead.styled';

export default function DynamicTable(props) {
  const { listTitles, TableDataView } = useFilterEnhanced(props);

  return (
      <div className="antialiased font-sans h-full bg-gray-200 overflow-hidden">
        <div className="bg-gray-100 py-6">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b h-screen border-gray-200 sm:rounded-lg">
                    <table  className="table-auto min-w-full divide-y divide-gray-200">
                      <Thead {...props}>
                        <tr>{listTitles}</tr>
                      </Thead>
                      <tbody>
                        <TableDataView />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
