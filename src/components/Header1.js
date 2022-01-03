import React, {useState} from "react";
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

export default function Header1(){
let [show1, setShow1] = useState(false);

function checkUrl(){
  if(window.location.href.indexOf('menu') > 0){
    console.log("URL contains menu "+show1);
    setShow1(true);
  } else {
    console.log("URL doesn't contain: "+show1);
    setShow1(false);
  }
}

return(
  <div>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="nav-link" to="/"><img src={logo} alt="logo" /></Link>
        <span className="d-flex">
          <Link className="nav-link" to="/menu" onClick={checkUrl}>{ show1 ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)}</Link>
        </span>
      </div>
    </nav>
  </div>
);
}