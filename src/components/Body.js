import React from "react";

function Body() {
return (
    <div className="body">
         <div className="flight-search">
             <input type="text" placeholder="From" className="input" />
             <span className="switch">&#8644;</span>
             <input type="text" placeholder="To" className="input" />
             <input type="date" className="input" />
            <button className="search-button">Search Flight</button>
         </div>
     </div>
);

}

export default Body;