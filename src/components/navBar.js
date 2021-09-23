import logo from "../assests/images/logo.png";
import Profile from "./profile";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm">
        <a className="navbar-brand" href="/home">
            <img src= {logo}/>
            <span className="appTitle">E-Shop Advisor</span>
        </a>
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
                    <Link className="dropdown-item" to="/">Log Out</Link>
                </div>
            </li>
        </ul>
    </nav>
    )}
  
  export default Navbar;
  