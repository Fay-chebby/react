import React,{useMemo} from "react";
import {useTable} from "react-table/src";
import MOCK_DATA from './MOCK_DATA.json'
import {Columns} from "./Columns";

export const BasicTable=()=>{
    const columns=useMemo(()=>Columns,[])
    const data =  useMemo(()=> MOCK_DATA,[])
     const tableInstance=useTable({
        columns,
        data
    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }=tableInstance


    return(
        <div>
<table {...getTableProps}>
    <thead >
        {headerGroups.map((headerGroup)=> (
            <tr {...headerGroup.getHeaderGroupProps()} >
                {
                    headerGroup.headers.map((column)=> (
                        <th {...column.getHeaderProps()}>  {column.render('Header')}

                        </th>
                    ))
                }


            </tr>
        ))
           }

    </thead>
    <tbody {...getTableBodyProps()}>
    { rows.map((row)=>{
        prepareRow(row)
        return (
            <tr {...row.getRowProps()}>
                {
                    row.cell.map((cell)=> {
                        return <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                    })
                }

            </tr>
        )
    })}

    </tbody>
</table>
        </div>
    )
}