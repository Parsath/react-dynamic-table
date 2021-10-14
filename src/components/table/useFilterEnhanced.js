import { MockData } from '../../data/mock-data';
import { useState, useEffect } from 'react';
import { SortAscending, SortDescending } from '@styled-icons/heroicons-solid';
import SearchInput from '../style/searchInput.styled';

const useFilterEnhanced = (props) => {
  const [tableData, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [headersData, setHeadersData] = useState([]);

  useEffect(() => {
    setData(MockData);
    setDataCopy(MockData);
    setHeadersData(getTitles(MockData));
    return () => {
      console.log("just unmounted")
    };
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

  const searchFor =(title, value) =>{
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
  }

  const getUppercased = (name) => name.toUpperCase();

  const listTitles =  headersData.map((item) => {
    return (
      <th key={item.value} scope="col" className="px-6 py-5 text-left text-xs font-medium tracking-wider">
        <div className="flex justify-between items-center">
          <SearchInput
            theme={props.theme}
            type="text"
            placeholder={getUppercased(item.value)}
            onChange={(e) => searchFor(item.value, e.target.value)}
            // onChange={(e) => console.log(e.target.value)}
          />
          <div className="px-3">
            <button onClick={() => handleSort(item.value, 'ASC')}>
              <SortAscending size="20" />
            </button>
            <button onClick={() => handleSort(item.value, 'DESC')}>
              <SortDescending size="20" />
            </button>
          </div>
        </div>
      </th>
  )});

  return { listTitles,  headersData, tableData};
};

export default useFilterEnhanced;


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

  // const TableDataView = () => (
  //   <AutoSizer>
  //     {({ height, width, sortDirection }) => (
  //       <List
  //         className="List"
  //         itemSize={50}
  //         width={width}
  //         height={400}
  //         itemData={tableData}
  //         itemCount={tableData.length}
  //       >
  //         {Row}
  //       </List>
  //     )}
  //   </AutoSizer>
  // );
