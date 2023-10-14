import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [btnName, setBtnName] = useState('Login')
    return (
      <div className="header">
        <div className="logo-cotainer">
          <img className="logo" src={LOGO_URL}></img>
          </div>
          <div className="nav-items">
            <ul> 
              <li>
                <Link to="/">Home</Link>
            </li>
              <li>
                <Link to="/about">About</Link>
             </li>
              <li>
               <Link to="/contact">Contact</Link> 
             </li>
              <li>Cart</li>
              <button className="login-btn" onClick={() => btnName==="Login"
               ? setBtnName('Logout') : setBtnName('Login')} >{btnName}</button>
            </ul>
          </div>
        </div>
    );
  };

export default Header;

// we can use both named and default export and use however we want to while importing