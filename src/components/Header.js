import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
    const [btnName, setBtnName] = useState('Login')
    return (
      <div className="header">
        <div className="logo-cotainer">
          <img className="logo" src={LOGO_URL}></img>
          </div>
          <div className="nav-items">
            <ul> 
              <li>Home</li>
              <li>About Us</li>
              <li>Order</li>
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