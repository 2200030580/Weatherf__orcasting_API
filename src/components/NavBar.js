import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./navbar.css"; // Import your navbar styles here
import SignUp from "./signup/signup";
import SignIn from "./login-signup/login-signup";
const Navbar = () => {  
  return (  
    <nav className="navbar" >
  <div className="container1">
    <a href="/" className="navbar-brand">WeatherHub</a>
    <ul className="navbar-nav" >
      <li className="nav-item">
        <a href="/home" className="nav-link">Home</a>
      </li>
      <li className="nav-item ">
        <a href="#" className="nav-link">Suggestions</a>
        </li>
        <li className="nav-item ">
        <a href="/SignUp" className="nav-link">SignUp</a>
        </li>
        <li className="nav-item ">
        <a href="/SignIn" className="nav-link">SignIn</a>
        </li>
        
      
    </ul>
  </div>
</nav>
 
  );  
};  

export default Navbar;