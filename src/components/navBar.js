import logo from "../assests/images/logo.png";
import Profile from "./profile";
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';

function Navbar() {
    let [searchDetail, saveSearchDetail] = useState([]);
    const handleSelect=(e)=>{
        let value = e.target.innerText;
        document.getElementById("searchVal").innerText =value;
    }
    const handleSearch=()=>{
        let category =  document.getElementById("searchVal").innerText;
        let search = document.getElementById("appSearch").value;
        
    }

    useEffect(() => {
        // fetch('url' + type + '/', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }).then(response => response.json())
        //     .then(data => {
        //         // saveSearchDetail(data)
        //     })

    }, [])
    return (
        <nav className="navbar navbar-expand-sm">
        <a className="navbar-brand" href="/home">
            <img alt="logo" src= {logo}/>
            <span className="appTitle">E-Shop Advisor</span>
        </a>
        <div style={{display:'flex'}}>
        <div className="appSearch">
        <li className="dropdown form-control noBorder" style={{width:'auto'}}>
                <a href="#lala" className="dropdown-toggle" data-toggle="dropdown" id="searchVal" >
                   All 
                </a>
                   <b class="caret"></b>
                <ul className="dropdown-menu searchUl" role="listbox" onClick={handleSelect}>
                    <li>Food</li>
                    <li>Fashion</li>
                    <li>Flower</li>
                    <li>Gadget</li>
                    <li>Accessories</li>
                </ul>
                {/* <ul className="dropdown-menu searchUl" role="listbox" onClick={handleSelect}>
                    {
                        searchDetail.map(item=>{
                            return(
                                <li value={item.value}>
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul> */}
             </li>
        <input id="appSearch" class="form-control" type="text" placeholder="Search"/>
        <Link to="/search"><button id="searchBtn" className="form-control"><i className="fa fa-search" onClick={handleSearch}></i></button></Link>
            </div>
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Profile
                </a>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">Account</Link>
                    <Link className="dropdown-item" to="/myOrder">My Orders</Link>
                    <Link className="dropdown-item" to="/">Log Out</Link>
                </div>
            </li>
        </ul>
        </div>
    </nav>
    )}
  
  export default Navbar;
  