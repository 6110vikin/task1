import profile from "../image/profileicon.png"
import "../cssfiles/navbar.css"


import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()
  
  const [ show , setShow] = useState(false)
  return (
<div>
  <header>
    <nav className="navbar">
      <h1 className="heading">Account Aggregator</h1>
      <img src={profile} alt="Profile" className="profile-image  " />
    </nav>
    </header>

    <div className="sidebar">
    <ul>
      <li  onClick={()=>{  navigate("/dashboard")}}>Dashboard</li> 
      <li   onClick={()=>{ navigate("/banks")}}>Banks</li>
      <li onClick={()=>navigate("/bankaccount")}>Bank Account</li>
      <li onClick={()=>setShow(!show)}>Investments{<i class="bi bi-chevron-down"></i>}</li>
      {show && <li style={{marginLeft:"10px", fontSize:"15px"}}>-Fixed Deposite</li> }
     {show &&  <li style={{marginLeft:"10px", fontSize:"15px"}}>-Recurring Deposite</li>}
   
      <li onClick={()=>navigate("/ppfaccount")}>PPF Account</li>
      <li onClick={()=>navigate("/taxpaid")}>Taxes Paid</li>
      <li onClick={()=>navigate("/uploadstatements")}>Upload Statement</li>
    </ul>
  </div>
  
  </div>
  );
}

export default Navbar;



