import Thead from '../style/thead.styled';
import React from 'react';


const TableHeader = (props) => {

    return (
        <Thead theme={props.theme}>
            <tr>
                {props.listTitles}
            </tr>
        </Thead>
    )
}

export default TableHeader;
