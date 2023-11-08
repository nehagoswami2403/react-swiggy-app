import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return (
      <div className="header">
        <div className="logo-cotainer">
          <img className="logo" src={LOGO_URL}></img>
          </div>
          <div className="nav-items">
            <ul> 
            <li>
                Online status :
                {onlineStatus ? "Green" : "Red"}
            </li>
              <li>
                <Link to="/">Hommmmmmmme</Link>
            </li>
              <li>
                <Link to="/about">About</Link>
             </li>
              <li>
               <Link to="/contact">Contact</Link> 
             </li>
             <li>
               <Link to="/grocery">Grocery</Link> 
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