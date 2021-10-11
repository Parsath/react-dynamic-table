// import { table } from "./mock-data";
// import { table } from "./generated";
import { useState,  useEffect } from "react";
import styled from 'styled-components';
import { SortAscending, SortDescending } from "@styled-icons/heroicons-solid";
import Tr from "./Tr.styled";
import { FixedSizeList as List } from 'react-window';

export const getStaticProps = async () =>{
    
    const res = await fetch(`api/table`)
    const data = await res.json()

    alert("here getstatic props"+data);

    return {
      props: { data }, // will be passed to the page component as props
    }
}

const getTitles = (table) => {
    let firstObject = table[0];
    let tableTitles = [];
    if(table)
    {
        for(let key in firstObject){
            let typeOfObject = typeof firstObject[key];
            let title = {
                name: key,
                type: typeOfObject,
            }
            tableTitles.push(title);
        }
    }
    return tableTitles;
} 

const firstLetterCaps = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const useFilterEnhanced = ({theme, data}) => {
    const [tableData, setData] = useState([]);
    const [dataCopy, setDataCopy] = useState([]);
    const [headersData, setHeadersData] = useState([]);
    // const { data, error } = useSWR(`api/table`, fetcher)

    useEffect(() => {
        if(!data){
            alert("not found");
            setData([]);
            setDataCopy([]);
            setHeadersData([]);
        }
        else {
            alert(data);
            setData(data);
            setDataCopy(data);
            setHeadersData(getTitles(data));
        }
        console.log(data);
        return () => {
        }
    }, [])


    // const RowParameters = (props, obj) => {
        
    //     const Row = ({ index, style }) => (
    //         <TableRowWithData index={index} obj={obj} theme={props.theme} style={style}/>
    //     );

    //     return Row;

    // }

    const setColumnAsc = (name) => {
        headersData.forEach((title) => {
            if(title.name === name){
                let dummyData = [...tableData];
                switch(title.type){
                    case "boolean":
                    case "number":
                        setData(
                            dummyData.sort((a,b) => a[name] - b[name])
                        )
                        break;
                    case "string":
                        setData(
                            dummyData.sort((a,b) => {    
                                var nameA = a[name].toUpperCase(); // ignore upper and lowercase
                                var nameB = b[name].toUpperCase(); // ignore upper and lowercase
                                if (nameA < nameB) {
                                return -1;
                                }
                                if (nameA > nameB) {
                                return 1;
                                }
                            
                                // names must be equal
                                return 0;
                            })
                        )
                        break;
                    default: 
                        alert("invalid data type");
                        break;
                }
            }
        })
        console.log(tableData);
    }

    const setColumnDesc = (name) => {
        headersData.forEach((title) => {
            if(title.name === name){
                let dummyData = [...tableData];
                switch(title.type){
                    case "boolean":
                    case "number":
                        setData(
                            dummyData.sort((a,b) => b[name] - a[name])
                        )
                        break;
                    case "string":
                        setData(
                            dummyData.sort((a,b) => {    
                                var nameA = a[name].toUpperCase(); // ignore upper and lowercase
                                var nameB = b[name].toUpperCase(); // ignore upper and lowercase
                                if (nameA > nameB) {
                                return -1;
                                }
                                if (nameA < nameB) {
                                return 1;
                                }
                            
                                // names must be equal
                                return 0;
                            })
                        )
                        break;
                    default: 
                        alert("invalid data type");
                        break;
                }
            }
        })
        console.log(tableData);
    }

    const searchFor = (title, value) => {
        headersData.forEach((elem) => {
            if(elem.name === title){
                let dummyData = [...dataCopy];
                switch(elem.type){
                    case "boolean":
                        setData(
                            dummyData.filter((a) => Boolean(a[title]).toString().includes(value) )
                        )
                        break;
                    case "number":
                        setData(
                            dummyData.filter((a) => Number(a[title]).toString().includes(value) )
                        )
                        break;
                    case "string":
                        setData(
                            dummyData.filter((a) => a[title].toUpperCase().includes(value.toUpperCase()) )
                        )
                        break;
                    default: 
                        alert("invalid data type");
                        break;
                }
            }
        })
    }

    const listTitles = headersData.map((title) => 
        <th key={title.name} className="py-2.5 px-3.5">
            <div className="flex justify-evenly">
                <button onClick={()=>{setColumnAsc(title.name)}}><SortAscending size="20"/></button>
                <button onClick={()=>{setColumnDesc(title.name)}}><SortDescending size="20"/></button>
            </div>
            <input type="text" placeholder={firstLetterCaps(title.name)} className="focus:outline-none placeholder-gray-800 text-black text-center" onChange={(e)=>
                searchFor(title.name,e.target.value)
            }/>
        </th>
    );

    // PROBLEM: Forcing the user to have an "id" attribute
    // const TableRowWithData  = ({index,obj,theme,style}) => {
    //     return (
    //         <Tr style={style} key={index} theme={theme}>
    //             {headersData.map((title) => 
    //                 <td key={obj[title.name]}>{typeof obj[title.name] === "boolean" ? Boolean(obj[title.name]).toString() : obj[title.name]}</td>
    //             )}
    //         </Tr>
    //     )
    // }
    
    const Row = ({ index, style, data}) => {
        // console.log("This is data : \n" +data);
        // console.log("This is data INDEX: \n"+data[index])
        return(
            <Tr style={style} key={index} theme={theme}>
                {headersData.map((title) => 
                    <td key={data[index][title.name]}>{typeof data[index][title.name] === "boolean" ? Boolean(data[index][title.name]).toString() : data[index][title.name]}</td>
                    // <td key={obj[title.name]}>{typeof obj[title.name] === "boolean" ? Boolean(obj[title.name]).toString() : obj[title.name]}</td>
                )}
            </Tr>
        ) 
    };
    
    const TableDataView = () => {    
        return (
            <List
                innerElementType="tr"
                outerElementType="tr"
                itemData={tableData}
                itemCount={tableData.length}
                itemSize={50}
                width={"400%"}
                height={300}
            >
                {Row}
            </List>
        )    
    };

    
    // const tableDataView = tableData.map((obj) => 
        // <Tr key={obj.id} {...props}>
        //     {headersData.map((title) => 
        //         <th key={obj[title.name]}>{typeof obj[title.name] === "boolean" ? Boolean(obj[title.name]).toString() : obj[title.name]}</th>
        //     )}
        // </Tr>
    // );

    return {listTitles, TableDataView};
};

export default useFilterEnhanced;