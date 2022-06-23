import Pagination from '@mui/material/Pagination';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCountry, selectCountry } from '../../features/countrySlice';
import { countryList } from '../../types/countryList';
import "../Home/home.css"
import SingleCountry from '../SingleCountry/SingleCountry';
import { Fade } from "react-awesome-reveal";
import { Search } from '@mui/icons-material';

function Home() {

    // const country = useAppSelector(selectCountry)
    const [order, setOrder] = useState("ASC")
    
    // const [countryLists, setCountryList] = useState<countryList[]>([])
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch()
    const countries = useAppSelector((state)=> state.country.country)
    console.log(countries)
    const [sortData, setSortData] = useState(countries);
    //deleted data
    const [resetCountry, setResetCountry] = useState<countryList[]>([])
    // console.log("hello",countries)

    let dataStart, dataEnd;
    const paginateData=(page:number)=>{
        console.log("paginate data")
        dataStart=20 * (page-1);
        dataEnd=dataStart + 20
        dataEnd= dataEnd > countries.length ? countries.length : dataEnd 
        countries && setSortData(countries.slice(dataStart,dataEnd));
    }

    useEffect(()=>{
        dispatch(getCountry());
        // paginateData(1)
    },[])

    useEffect(()=>{
        setSortData(sortData)
        paginateData(page)
    },[countries]) 

    // console.log(sortData)
    const pageCount = Math.ceil(countries?.length/9);
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {  
        setPage(page);
        paginateData(page)
    };

    

    // sort data
    const HandelCountrySort = (type:string) =>{
        if(order == "ASC" && type=="country"){
            const sortedData=[...countries].sort((a,b)=>{
                return a.name.common > b.name.common ? 1 : -1
            });
            setSortData(sortedData);
            setOrder("DEC")
        }else if(order == "DEC" && type=="country"){
            const sortedData=[...countries].sort((a,b)=>{
                return a.name.common < b.name.common ? 1 : -1
            });
            setSortData(sortedData);
            setOrder("ASC")
        }else if(order == "ASC" && type=="population"){
            const sortedData=[...countries].sort((a,b)=>{
                return a.population > b.population ? 1 : -1
            });
            setSortData(sortedData);
            setOrder("DEC")
        }else if(order == "DEC" && type=="population"){
            const sortedData=[...countries].sort((a,b)=>{
                return a.population < b.population ? 1 : -1
            });
            setSortData(sortedData);
            setOrder("ASC")
        }
    }

    // delte country
    const handelDeleteCountry = (item:any) =>{  
        setSortData(sortData.filter((match)=>match !== item))
        console.log("deleted",sortData)
    }

    //searching country

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
       
     const {value}=e.target
     const lowerCaseValue = value.toLowerCase();
     if(lowerCaseValue !== ""){
         const serachCountry = countries.filter(country=>country.name.common.toLowerCase().includes(lowerCaseValue) || country.name.official.toLowerCase().includes(lowerCaseValue))
         setSortData(serachCountry);
     }else{
        setSortData(sortData)
        paginateData(page)
     }
    }

  return (
   
    <div>
    <div className='mt-3 mb-3'>
        <div className='mb-3'>
            <div className='row'>
                <div className='col-md-4 col-xs-4 text-center'>
                    <button className='btn btn-primary mb-3' onClick={()=>HandelCountrySort('country')}>Sort By Country</button>
                </div>
                <div className='col-md-4 col-xs-4 text-center mb-3'>
                    <div className="input-group">
                            <input type="search"
                                placeholder='search'
                              id="form1" 
                              className="form-control " 
                            //   value={search} 
                              onChange={handleSearch}
                            />
                        <button type="button" className="btn btn-primary">
                           <Search/>
                        </button>
                    </div>
                </div>
                <div className='col-md-4 col-xs-4 text-center'>
                    <button className='btn btn-primary mb-3' onClick={()=>HandelCountrySort('population')}>Sort By Population</button>
                </div>
            </div>
        </div>
        <div className='row justify-content-center text-center'>
            {sortData?.map((item)=>{
                return(
                    <div key={item.name.common} className="col-md-2 ml-3 mr-3 mb-4 zoom-effect" style={{width: "14rem"}}>
                        <Fade direction='up' className='row'>
                            <div key={item.name.common} className="bg-color card">
                                <Link to={`/name/${item.name.common}`} > 
                                    <img className="card-img-top" src={item.flags.png} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name.common}</h5>
                                        <p className="card-text"><b>Population:</b>{item.population}</p>
                                        <p className="card-text"><b>Region:</b>{item.region}</p>
                                        <p className="card-text"><b>Capital:</b>{item.capital}</p>
                                        
                                    </div>
                                </Link>
                                <button className='btn btn-delete' onClick={()=>handelDeleteCountry(item)} >Delete</button>
                            </div>  
                        </Fade>   
                    </div>
                )
            })}
            <div className='justify-content-center'>
                <Pagination count={pageCount} page={page} onChange={handleChange} />
            </div>
       </div>

    </div>
    </div>
  )
}

export default Home

function e(e: any): void {
    throw new Error('Function not implemented.');
}
