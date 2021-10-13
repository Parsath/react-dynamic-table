import { MockData } from '../../data/mock-data';
import { useState, useEffect } from 'react';
import { SortAscending, SortDescending } from '@styled-icons/heroicons-solid';
import Tr from '../style/tr.styled';
import Thead from '../style/thead.styled';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import VirtualTable from './sheet'

const useFilterEnhanced = ({ theme }) => {
  const [tableData, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [headersData, setHeadersData] = useState([]);

  useEffect(() => {
    setData(MockData);
    setDataCopy(MockData);
    setHeadersData(getTitles(MockData));
    return () => {};
  }, []);

  const getTitles = (MockData) => {
    const dataModel = MockData[0];
    return Object.keys(dataModel).map((item) => {
      return { value: item, type: typeof dataModel[item] };
    });
  };

  const handleSort = (sortBy, sortDirection) => {
    const column = headersData.find((item) => item.value === sortBy);
    if (column.type === 'string') {
      if (sortDirection === 'ASC') {
        setData(
          [...tableData].sort((a, b) =>
            a[sortBy].localeCompare(b[sortBy], { sensitivity: 'base' })
          )
        );
      } else {
        setData(
          [...tableData].sort((a, b) =>
            b[sortBy].localeCompare(a[sortBy], { sensitivity: 'base' })
          )
        );
      }
    } else if (column.type === 'number' || column.type === 'boolean') {
      setData(
        [...tableData].sort((a, b) => {
          sortDirection === 'ASC'
            ? a[column.value] - b[column.value]
            : b[column.value] - a[column.value];
        })
      );
    }
  };

  const searchFor = (title, value) => {
    console.log(value);
    const column = headersData.find((item) => item.value === title);
    console.log(column);
    switch (column.type) {
      case 'boolean':
        setData(
          [...dataCopy].filter((x) =>
            Boolean(x[title]).toString().includes(value)
          )
        );
        break;
      case 'number':
        setData(
          [...dataCopy].filter((x) =>
            Number(x[title]).toString().includes(value)
          )
        );
        break;
      case 'string':
        setData(
          [...dataCopy].filter((x) =>
            x[title].toUpperCase().includes(value.toUpperCase())
          )
        );
        break;
      default:
        alert('invalid data type');
        break;
    }
  };

  const listTitles = headersData.map((item) => (
    <th key={item.value} className="py-2.5 px-3.5">
      <div className="flex justify-evenly">
        <button onClick={() => handleSort(item.value, 'ASC')}>
          <SortAscending size="20" />
        </button>
        <button onClick={() => handleSort(item.value, 'DESC')}>
          <SortDescending size="20" />
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder={item.value}
          className="focus:outline-none placeholder-gray-400 text-black text-center"
          onChange={(e) => searchFor(item.value, e.target.value)}
          // onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </th>
  ));

  // const searchInputs = headersData.map((item) => (
  //   <div className="h-7">
  //     <input
  //       type="text"
  //       placeholder={item.value}
  //       className="focus:outline-none placeholder-gray-400 text-black text-center"
  //       onChange={(e) => searchFor(item.value, e.target.value)}
  //       // onChange={(e) => console.log(e.target.value)}
  //     />
  //   </div>
  // ));

  // const SearchFilter = () => (
  //   <div clasName="flex flex-row justify-between">
  //     {searchInputs}
  //   </div>
  // )
  

  // const Row = ({ index, style, data }) => {
  //   return (
  //     <Tr style={style} key={index} theme={theme}>
  //       {headersData.map((item) => (
  //         <td key={data[index][item.value]}>
  //           {typeof data[index][item.value] === 'boolean'
  //             ? Boolean(data[index][item.value]).toString()
  //             : data[index][item.value]}
  //         </td>
  //       ))}
  //     </Tr>
  //   );
  // };

  const TableDataView = () => (
    <AutoSizer>
      {({ height, width, sortDirection }) => (
        <List
          className="List"
          itemSize={50}
          width={width}
          height={400}
          itemData={tableData}
          itemCount={tableData.length}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );

  const Row = ({ index, data }) => {
    return (
      <Tr key={index} theme={theme}>
        {headersData.map((item) => (
          <td key={data[index][item.value]}>
            {typeof data[index][item.value] === 'boolean'
              ? Boolean(data[index][item.value]).toString()
              : data[index][item.value]}
          </td>
        ))}
      </Tr>
    );
  };

  const GenericTable = () => {
    return (
      <AutoSizer>
        {({ height, width, sortDirection }) => (
          <VirtualTable
            className="List"
            itemSize={36}
            width={width}
            height={height}
            itemData={tableData}
            itemCount={tableData.length}
            header={
              <Thead theme={theme}>
                <tr>
                  {listTitles}
                </tr>
              </Thead>
            }
            footer={
                    <tfoot>
                      <tr>
                      </tr>
                    </tfoot>}
            row={Row}
          />
        )}
      </AutoSizer>
    )
  }

  return { listTitles, TableDataView, GenericTable};
};

export default useFilterEnhanced;
