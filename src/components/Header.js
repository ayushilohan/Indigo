import React from "react";
import image from '../asset/indigo_logo.png'

function Header() {
return (
    <header className="header">
       <div>
       <img src={image} alt="Indigo Logo"  className="imageStyle"/>
       </div>
          <nav className="nav">
          <div className="book-hotel-container">
          <div className="discount-badge">Flat Rs 75 Off</div>
          <button className="book-hotel">Book Hotels</button>
          </div>
             <a href="#">Book</a>
             <a href="#">Check-in</a>
             <a href="#">Manager</a>
             <a href="#">6E Rewards</a>
             <a href="#">Info</a>
             <a href="#">Login</a>
         </nav>
    </header>

  );
}

export default Header;