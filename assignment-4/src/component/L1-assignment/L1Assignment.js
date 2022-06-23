import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import React, { useRef } from 'react'
import "./l1assignment.css"

export const L1Assignment = () => {

        let index=0;
        const imgRef = useRef();

        const handelPrev = () =>{
            index>0 ? index-- : index=2;
            if(index>=0 && index <3){
                let size=index*-100
                imgRef.current.style.transform=`translateX(${size}vw)`;
            } 
        }

        const handelNext = () =>{
          index<2 ? index++ : index=0;
          if(index>=0 && index <3){
              let size=index*-100
              imgRef.current.style.transform=`translateX(${size}vw)`;
              
          }
        }

  return (
      <div className="slider_container">
        <div className="slideshow-container">
        <div id="mySlides" ref={imgRef}>
            <img id="images" src="/images/first.jpg" style={{width:"100%"}} />
            <img id="images" src="/images/second.jpg" style={{width:"100%"}} />
            <img id="images" src="/images/third.jpg" style={{width:"100%"}} />
            <img id="images" src="/images/fourth.jpg" style={{width:"100%"}} />
        </div>
    </div>
    <br/>
    <a className="prev" id="prev_btn" onClick={handelPrev}><ArrowLeft /></a>
    <a className="next" id="next_btn" onClick={handelNext}><ArrowRight/></a>
    </div>
  )
}
