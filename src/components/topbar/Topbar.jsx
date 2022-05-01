import React from 'react'
import "./Topbar.css"
// import {NotificationsNone,Language,Settings} from '@material-ui/icons';

const change =()=> {
  const navbar =document.getElementById("navbar");

  // console.log(window.scrollY);
  // if (window.scrollY >= 70) {

  //   navbar.classList.add("active");
  // } else {
  //   navbar.classList.remove("active");
  //    }
}
export default function Topbar() {
 
  window.addEventListener('scroll', change);
  
  
  return (
    <div className="topbar" id="navbar">
      <div className="topbarwrapper">
        <div className="topbarleft">
          <span className="logo">
            DashBoard
          </span>
        </div>
        <div className="topbarright">
          <div >
          <img src="https://randomuser.me/api/portraits/men/97.jpg" alt=""  className="circleavatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}
