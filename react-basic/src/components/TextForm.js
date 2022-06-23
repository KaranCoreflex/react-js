import React, { useState } from 'react'

export default function TextForm(props){

    const [text, setText] = useState(''); 
    
    const handleUpClick = () =>{
        console.log("btn clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        console.log("btn clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        console.log("btn change");
        setText(event.target.value);
    }
    
    const handleClearClick = () => {
        setText('')
    }

    return(
        <>
            <div className='container' style={{color: props.mode==='dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea id="myBOx" className="form-control" value={text} rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode==='dark' ? 'white' : 'black'}}></textarea>
                    <button className="btn btn-primary mt-3 " onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mt-3 ms-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mt-3 ms-2" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
                <h3>Your text Summary</h3>
                <p>{text.split(" ").length} Words and {text.length} Charater</p>
                <p>{0.0008 * text.split(" ").length} take time to read</p>
            </div>
            <h2 style={{color: props.mode==='dark' ? 'white' : 'black'}}>Preview</h2>
            <p style={{color: props.mode==='dark' ? 'white' : 'black'}}> {text}</p>
        </>
    )
}