import React from 'react';
import ReactDom from 'react-dom/client';

const HeaderComp = () => {
    return (
      <div className="header">
        <div className="logo-cotainer">
          <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
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
  
  const AppLayout = () => {
    return (
        <div className="app">
        <HeaderComp/>
        <Body />
        </div>
    );
  };
  
  const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div> 
        <div className="rest-cont">
        <RestaurentComp />

        </div>    
      </div>
    )
  }
  
  const RestaurentComp = () => { 
    return(
    <div className="rest-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className='rest-logo' alt='rest-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426'></img>
      <h1>Meghna Foods</h1>
      <h4>Chicken, KFC</h4>
      <h4>3.8 Rating</h4>
      <h4>Delivery time: 32 minutes</h4>

    </div>
  )
  }
  
  const root = ReactDom.createRoot(document.getElementById("root"));

  root.render(
      <AppLayout />
  );

// root.render(parent)