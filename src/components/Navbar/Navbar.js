import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.PNG";

import heading from "../../assets/heading.PNG";



const Navbar = () => {
  
  return (
    <>
      <nav   className=" navbar navbar-expand-lg navbar-dark bg-dark" >
  <NavLink className="navbar-brand" to="#">
    <img src={logo} alt='logo' ></img>
    <img src={heading} alt='heading'></img>    
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/aboutus">About us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Sign up</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/howwork">How it works</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}
 
export default Navbar




// import React, { useState } from "react";
// import "./Navbar.css";
// import { BsCheckLg } from "react-icons/bs";
// import { AiOutlineBars } from "react-icons/ai";
// import { RiCloseLine } from "react-icons/ri";
// import myimage from "../../assets/logo.png";
// import img2 from "../../../src/assets/myimage.png";
// import Button from "../UI/button/Button";
// import"../UI/button/Button.css"

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
    
// <nav className="navbar-container navbar" >
//       <div className="logo">

//       <div className="header-right-logo">
         
//           <img src={myimage} alt="img" ></img>
//         </div>
        
//         <p className="logo-text">
//           InTri<BsCheckLg color="#ff48" size={30}></BsCheckLg>ia
//         </p>
//       </div>
//       <menu>
//         <ul
//           className="nav-links"
//           id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
//         >
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/login" >Login </a>
//           </li> 
//           <li>
//             <a href="/signup">Sign Up</a>
//           </li>
//           <li>
//             <a href="/aboutus">About Us </a>
//           </li>
//           <li className="nav-howitworks"> 
//             <a style={{Button}} href="/howitworks">How it Works</a>
//             {/* <Button text={"How it works"} btnClass={"btn-dark"}  />  */}
//           </li>
//         </ul>
//       </menu>
//       <div className="menu-icons" onClick={toggleMenu}>
//         {showMenu ? (
//           <RiCloseLine color="#fff" size={30} />
//         ) : (
//           <AiOutlineBars color="#fff" size={27}></AiOutlineBars>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
