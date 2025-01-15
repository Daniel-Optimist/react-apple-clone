// use rfce to get the react boilerplate; comment out import React from 'react' as we are not using right now
// import React from 'react'
// import appleLogo from "../../assets/images/icons/logo-sm.png";
// import searchLogo from "../../assets/images/icons/search-icon-sm.png";
// import cartLogo from "../../assets/images/icons/cart-sm.png";

// function Header() {
//   return (
//     <div className="nav-wrapper fixed-top">
//       <div className="container">

//         <nav className="navbar navbar-toggleable-sm navbar-expand-md">
//           <button
//             className="navbar-toggler navbar-toggler-right"
//             type="button"
//             data-toggle="collapse"
//             data-target=".navbar-collapse"
//           >
//             ☰
//           </button>
//           <a className="navbar-brand mx-auto" href="/">
//             <img src={appleLogo} alt="apple"/>
//           </a>

//           <div className="navbar-collapse collapse">
//             <ul className="navbar-nav nav-justified w-100 nav-fill">


//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="/mac/">Mac</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="/"> iphone</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="/">ipad</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="/">watch</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="/">tv</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="/">Music</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="/">Support</a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="/search"><img src={searchLogo} /></a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link js-scroll-trigger" href="/cart"> <img src={cartLogo} /></a>
//               </li>
//             </ul>
//           </div>
//         </nav>


//       </div>
//     </div>
//   );
// }
// export default Header;



import React from "react";
// import Link from "react-router-dom" and replace all anchor links with "Link" and href with to
import { Link } from "react-router-dom";
import NavbarList from "../Navbar/NavbarList";
import {Navbar, Container, Nav} from "react-bootstrap"
import appleLogo from "../../assets/images/icons/logo-sm.png";
import searchLogo from "../../assets/images/icons/search-icon-sm.png";
import cartLogo from "../../assets/images/icons/cart-sm.png";

// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div className="nav-wrapper fixed-top ">
      <Container>
        <Nav>
          <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Link className="navbar-brand mx-auto" to="/">
              <img src={appleLogo} alt="apple" />
            </Link>

            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <NavbarList LinkUrl="/mac/" LinkName="Mac" />
                <NavbarList LinkUrl="/iphone/" LinkName="iphone" />
                <NavbarList LinkUrl="/ipad/" LinkName="ipad" />
                <NavbarList LinkUrl="/watch/" LinkName="Watch" />
                <NavbarList LinkUrl="/tv/" LinkName="tv" />
                <NavbarList LinkUrl="/music/" LinkName="Music" />
                <NavbarList LinkUrl="/support/" LinkName="Support" />
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search">
                    <img src={searchLogo} alt="search" />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart">
                    <img src={cartLogo} alt="cart" />
                  </Link>
                </li>

                
               
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </Nav>
      </Container>
    </div>
  );
}

export default Header;