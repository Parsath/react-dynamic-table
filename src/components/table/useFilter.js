import { MockData } from "../../data/mock-data";
import { useState,  useEffect } from "react";
import { SortAscending, SortDescending } from "@styled-icons/heroicons-solid";
import TrStyled from "../style/thead.styled";

const getTitles = () => {
    let firstObject = MockData[0];
    let tableTitles = [];
    if (MockData) {
      for (let key in firstObject) {
        let typeOfObject = typeof firstObject[key];
        let title = {
          name: key,
          type: typeOfObject,
        };
        tableTitles.push(title);
      }
    }
    return tableTitles;
} 

const firstLetterCaps = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const useFilter = (props) => {
    const [data, setData] = useState([]);
    const [dataCopy, setDataCopy] = useState([]);
    const [headersData, setHeadersData] = useState([]);

    useEffect(() => {
        setData(MockData);
        setDataCopy(MockData);
        setHeadersData(getTitles());
        return () => {
        }
    }, [])

    const setColumnAsc = (name) => {
        headersData.forEach((title) => {
            if(title.name === name){
                let dummyData = [...data];
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
        console.log(data);
    }

    const setColumnDesc = (name) => {
        headersData.forEach((title) => {
            if(title.name === name){
                let dummyData = [...data];
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
        console.log(data);
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
    
    const tableDataView = data.map((obj) => (
      <TrStyled key={obj.id} {...props}>
        {headersData.map((title) => (
          <td key={obj[title.name]}>
            {typeof obj[title.name] === 'boolean'
              ? Boolean(obj[title.name]).toString()
              : obj[title.name]}
          </td>
        ))}
      </TrStyled>
    ));

    return {listTitles, tableDataView};
};

export default useFilter;
