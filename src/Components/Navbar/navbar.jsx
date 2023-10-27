import * as React from "react";
import "../Navbar/navbar.css";

function Navbar () {
  return(
    <div className="navbar">
        <div className="title">
          <h1>Francisco Crespo</h1>
        </div>
        <div className="buttons">
          <h3 id="aboutMe">About me</h3>
          <h3 id="myProjects">My Projects</h3>
        </div>
      

    </div>
  )
}

export default Navbar