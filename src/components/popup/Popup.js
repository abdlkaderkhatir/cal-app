import React, { useState } from 'react'
import './Popup.css'
 const Popup=({setTitle})=> {
    const handelChange=(e)=>{
       setTitle(e.target.value);
       console.log(e.target.value)
    }
  return (
    <div className="popup-box">
    <div className="box">
        <div>Enter event</div>
        
        <input onChange={handelChange}  style={{marginTop:"20px"}}/>
    </div>
  </div>
  )
}
export default Popup;