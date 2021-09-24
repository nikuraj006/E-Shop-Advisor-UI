import logo from "../assests/images/logo.png";
import Profile from "./profile";
import {Link} from "react-router-dom";

function Navbar() {

    const handleSelect=(e)=>{
        let value = e.target.innerText;
        document.getElementById("searchVal").innerText =value;
    }
    const handleSearch=()=>{
        let category =  document.getElementById("searchVal").innerText;
        let search = document.getElementById("appSearch").value;
    }
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
             </li>
        <input id="appSearch" class="form-control" type="text" placeholder="Search"/>
        <button id="searchBtn" className="form-control"><i className="fa fa-search" onClick={handleSearch}></i></button>
            </div>
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Buddies
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Sam</a>
                    <a className="dropdown-item" href="#">Anthony</a>
                    <a className="dropdown-item" href="#">Jack</a>
                    <a className="dropdown-item" href="#">Mary</a>
                </div>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Profile
                </a>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">Account</Link>
                    <Link className="dropdown-item" to="/myOrder">My Order</Link>
                    <Link className="dropdown-item" to="/">Log Out</Link>
                </div>
            </li>
        </ul>
        </div>
    </nav>
    )}
  
  export default Navbar;
  