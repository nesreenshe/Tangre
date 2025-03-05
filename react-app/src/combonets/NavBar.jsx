
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";


const Navbar =() => {
    return(
<nav className="container-fluid  gistration-area">

<div className="row  text-white">
        <div className="navbar navbar-expand-lg fixed-top bg-white Registration-area">
          <a href="#" className="navbar-brand fw-bold ps-5 fs-1">
            <img src={logo} alt=""
          /></a>
          <button
            type="button"
            class="navbar-toggler me-4"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="offcanvas offcanvas-start pt-3 w-50 "
       
            id="navbarNav"
          >
            <ul className="navbar-nav justify-content-end me-5">
              <li className="navbar-item px-3 fw-bold  mt-2">
               <Link to= "/">Home</Link> 
                
              </li>
              <li className="navbar-item px-3 fw-bold   mt-2">
                <Link to= "/portfolio">Portfolio</Link>
                
              </li>
              <li className="navbar-item px-3 fw-bold  mt-2">
                <Link to= "/about">About </Link>
                
              </li>
              <li className="navbar-item px-3  fw-bold  mt-2">
               <Link to= "/blog">Blog</Link>
                
              </li>

              <li className="navbar-item px-3  fw-bold  mt-2">
                  <Link to= "/pages">Pages</Link>
                
              </li>


              <li className="navbar-item px-3  fw-bold   mt-2">
                <Link to= "/contact">Contact </Link>
                
              </li>


            </ul>
          </div>
        </div>
      </div>








   
</nav>
    );
};
export default Navbar;