import { LOGO_URL } from "../utils/constants";

export const Header = () => {
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
            </ul>
          </div>
        </div>
    );
  };

export default Header;

// we can use both named and default export and use however we want to while importing