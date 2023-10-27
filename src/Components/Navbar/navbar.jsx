import * as React from "react";
import Buttons from "../Buttons/buttons";

import "../Navbar/navbar.css";



function Navbar () {
  return(
    <div className="navbar">
        <div className="title">
          <h1>Francisco Crespo</h1>
        </div>
        <div className="buttons">
          <Buttons/>
        </div>
      

    </div>
  )
}

export default Navbar