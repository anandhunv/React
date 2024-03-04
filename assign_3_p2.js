//Create a Header Component from scratch using Functional Components with JSX
/* Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice*/

import React from "react";
import  ReactDOM  from "react-dom/client";

const HeaderComponent=()=>(
    <div className="header  ">
          <div className="logo">
          <img src="images/user-1.svg" alt="Logo" />

      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user">
        <img src="images/play_button.png" alt="User Icon" />
      </div>
    </div>
    
)

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeaderComponent />)