import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import React, {useState} from 'react'
import EmpData from './EmpData'
import "./emplist.css"

function EmpList() {

  let jsonData = EmpData;
  console.log(jsonData);

  const[name, Setname]=useState(jsonData);
  

  const [order, setOrder] = useState("ASC");
 
  const handleSort=(colName,sortAge)=>{
    if(order==="ASC" && !sortAge){
      const sortedData=[...name].sort((a,b)=>
        a[colName].toLowerCase() > b[colName].toLowerCase() ? 1 : -1 
      );
      Setname(sortedData);
      setOrder("DEC")
    }
    else if(order==="DEC" && !sortAge){
      const sortedData=[...name].sort((a,b)=>
        a[colName].toLowerCase() < b[colName].toLowerCase() ? 1 : -1 
      );
      Setname(sortedData);
      setOrder("ASC")
    }
   else if(order==="ASC" && sortAge){
      const sortedData=[...name].sort((a,b)=>
      {  return a[colName] - b[colName] }
      );
      Setname(sortedData);
      setOrder("DEC")
    }
    else if(order==="DEC" && sortAge){
      const sortedData=[...name].sort((a,b)=>
        {return b[colName] - a[colName]} 
      );
      Setname(sortedData);
      setOrder("ASC")
    }
  }

  // const assending = () =>{
  //   let ass = [...name].sort((a,b)=>a['name'] > b['name']? 1 : -1);
  //    Setname(ass);
  //   console.log("[AScending]",ass)
  // }

  // const descending = () =>{
  //   let des = [...name].sort((a,b)=>a['name'] < b['name']? 1 : -1);
  //   const descending = Setname(des);
  //   console.log("[descending]",des)
  // }
  
  return (


    <div className='container'>
      <h2 className='mt-3 mb-2 text-center'>EmpList</h2>
      <table>
        <thead>
          <tr>
            <th onClick={ ()=>handleSort('name') }>Name &nbsp;<ArrowUpward/><ArrowDownward/></th>
            <th onClick={()=>handleSort('age','sortAge')}>Age &nbsp;<ArrowUpward/><ArrowDownward/></th>
            <th onClick={()=>handleSort('role')}>Roll No &nbsp;<ArrowUpward/><ArrowDownward/></th>
            <th onClick={()=>handleSort('address')}>Address &nbsp;<ArrowUpward/><ArrowDownward/></th>
          </tr>
        </thead>
          <tbody>
        
            {name.map(emp => (
              <tr key={emp.roll}>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.roll}</td>
                <td>{emp.address}</td>
              </tr>
            ))}

          </tbody>
        </table>
    </div>
  )
}

export default EmpList