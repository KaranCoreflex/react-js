import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import { data } from '../data';
import {
  FormGroup,
  FormLabel,
  FormControl,
  ListItemText,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  InputLabel,
  MenuItem,
  Button,
  TableCell,
  TableRow
} from '@mui/material';

function DataTable() {

    const [sortedData, setSortedData] = useState(data);

    useEffect(() => {
      const sortData= [...sortedData].sort((a,b)=>
           a.EmployeeName > b.EmployeeName ? 1 : -1
    );
    console.log("sortData",sortData)
     setSortedData(sortData);
    }, [])
    
  

// console.log("set",sortedData);
    const columns = [
        {
         name: "EmployeeName",
         label: "Employee Name",
         options: {
          filter: true,
          sort: true, 
         }

        },
        {
         name: "ClockIn",
         label: "ClockIn",
         options: {
          filter: false,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => (
            value.map((time)=>{
                return (
                    <p key={time.TimesheetId}>{time.Value ? time.Value : "NULL"}</p>
                )
            })
          )
         }
        },
        {
         name: "ClockOut",
         label: "ClockOut",
         options: {
          filter: false,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => (
            value.map((time)=>{
                return(
                    <p key={time.TimesheetId}>{time.Value && time ? time.Value : "NULL"}</p>
                )
            })
          ),
         }
        },
        {
         name: "MostRecentAction",
         label: "Status",
         options: {
          filter: true,
          sort: false,
          display: 'true',
          filterType: 'custom',
          customBodyRender: (value, tableMeta, updateValue) => {
              return (
                <p>{value.Status}</p>
                
              )
          },
          filterOptions: {
            
            logic: (status, filters, row) => {
              // console.log("row",row);
              if (filters.length) {
                if(filters.includes("ClockIn")){
                  // console.log("filters",filters)
                  return !row[1].length > 0
                }else if(filters.includes("ClockOut")){
                  return !row[2].length > 0
                }return !filters.includes(status.Status);
              }
            },
            display: (filterList, onChange, index, column) => {
              const optionValues = ['Completed', 'NoStatus', 'ClockIn', 'ClockOut'];
              return (
                <FormControl style={{width:100}}>
                  <InputLabel htmlFor='select-multiple-chip'>
                    Status
                  </InputLabel>
                  <Select
                    multiple
                    value={filterList[index]}
                    renderValue={selected => selected.join(', ')}
                    onChange={event => {
                      filterList[index] = event.target.value;
                      onChange(filterList[index], index, column);
                    }}
                  >
                    {optionValues.map(item => (
                      <MenuItem key={item} value={item}>
                        <Checkbox
                          color='primary'
                          checked={filterList[index].indexOf(item) > -1}
                        />
                        <ListItemText primary={item} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              );
            }
          },
        }
        },
       ];
              
       const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: 'standard',
        expandableRows: true,
        expandableRowsHeader: false,
        expandableRowsOnClick: true,
        isRowExpandable: (dataIndex, expandedRows) => {
          if (dataIndex === 3 || dataIndex === 4) return false;
  
          // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
          if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0)
            return false;
          return true;
        },
        rowsExpanded: [0, 1],
        renderExpandableRow: (rowData, rowMeta) => {
          const colSpan = rowData.length + 1;
          return (
            <TableRow>
              <TableCell colSpan={colSpan}>Custom expandable row option. Data: </TableCell>
            </TableRow>
          );
        },
        onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) =>
          console.log(curExpanded, allExpanded, rowsExpanded),
      };
  return (
    <div>
        <MUIDataTable
        title={"Employee List"}
        data={sortedData}
        columns={columns}
        options={options}
        />
        {/* <Button onClick={()=>setSortedData(sortData)}>Click me</Button> */}
    </div>
  )
}

export default DataTable