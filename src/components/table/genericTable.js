import useFilterEnhanced from './useFilterEnhanced';
import AutoSizer from 'react-virtualized-auto-sizer';
import VirtualTable from './virtualTable';
import TableHeader from './tableHeader';
import Tr from '../style/tr.styled';

const GenericTable = (props) => {
    const { headersData, tableData, listTitles } = useFilterEnhanced(props);

    const Row = ({ index, data }) => {
        return (
            <Tr key={index} theme={props.theme}>
                {headersData.map((item) => (
                    <td key={data[index][item.value]} className="px-6 py-4 whitespace-nowrap">
                    {typeof data[index][item.value] === 'boolean'
                        ? Boolean(data[index][item.value]).toString()
                        : data[index][item.value]}
                    </td>
                ))}
            </Tr>
        );
    };

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
                <TableHeader theme={props.theme} listTitles={listTitles}/>
            }
            row={Row}
            />
        )}
        </AutoSizer>
    )      
}

export default GenericTable;