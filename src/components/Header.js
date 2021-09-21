import React from "react";
import {Link} from 'react-router-dom'  
import { BiHomeCircle } from "react-icons/bi";

function Header() {
  return (
    <div className="row ">
      <div className="col-md-12">
        <nav className=" header_link navbar navbar-dark bg-primary">
           <Link to="/"><BiHomeCircle /> Home </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
