import React, {useState, useEffect} from 'react'


export default function Paginator({showPerpage, onPaginationChange, total}) {

    const [counter, setCounter] = useState(1)
    const [NumberOfButton, setNumberOfButton] = useState(Math.ceil(total/showPerpage))

    useEffect(()=>{
        const value = showPerpage * counter;
        // console.log("Strating point", value - showPerpage);
        // console.log("end point",value);

        onPaginationChange(value - showPerpage, value)
    },[counter])


    const buttonClick = (type) => {
        if(type === "prev"){
            if(counter === 1){
                setCounter(1);
            }else{
                setCounter(counter - 1)
            }
        }else if(type === "next"){
            if(NumberOfButton === counter){
                setCounter(counter)
            }else{
                setCounter(counter + 1)
            }
        }
    }
  return (
    <>
    <div className='row mt-5'>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" onClick={()=>{buttonClick("prev")}}>Previous</a></li>            
                {
                    new Array(NumberOfButton).fill("").map((element, index) => (
                        <li className={`page-item ${index+1 === counter ? "active" : null} `}>
                            <a className="page-link" href="#" onClick={()=> setCounter(index+1)}>{ index + 1 }</a>
                        </li>
                    ) )
                }
                <li className="page-item" ><a className="page-link" onClick={()=>{buttonClick("next")}}>Next</a></li>
            </ul>
        </nav>
            {/* <button className='btn btn-primary col-md-2'  > Previous </button>
            <div className='col-md-8'></div>
            <button className='btn btn-primary col-md-2' > Next </button> */}        
    </div>
    </>
  )
}
