import React, { useRef, useState } from 'react'

function Uncontrolled() {

    const luckyName = useRef(null);
     const [show, setShow] = useState(false);

    const submitForm = (e) =>{
        e.preventDefault();
        console.log(luckyName.current.value);
        const Name = luckyName.current.value

        Name === "" ? alert("Please fill the field") : setShow(true)
    }


  return (
    <>
        <form action="" onSubmit={submitForm}>
            <div>
                <label>Lucky Name</label>
                <input type="text" id='luckyName' ref={luckyName}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        <h1>{show ? `The Lucky Name is ${luckyName.current.value}` : ""}</h1>
    </>
  )
}

export default Uncontrolled