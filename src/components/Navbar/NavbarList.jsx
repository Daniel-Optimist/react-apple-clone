// The NavbarList component is a reusable list item for a navigation bar. It dynamically takes in a LinkName and LinkUrl to create navigable links within a React app, leveraging React Router for client-side routing. It is used in the Header

//import Link ; Note <Link> replaces <a> and to= replaces href=
import {Link} from "react-router-dom"


// NavbarList is a functional component that takes in LinkName and LinkUrl as props.
function NavbarList({ LinkName, LinkUrl }) {
  return (
    <li className="nav-item">
      {/* set the CSS classes for the link and specify the URL path(LinkURL) the link navigates to.. */}
      <Link className="nav-link js-scroll-trigger" to={LinkUrl}>
        {/* The link text displayed, coming from the LinkName prop */}
        {LinkName}
      </Link>
    </li>
  );
}

export default NavbarList; // Navbar list is imported to be used in Header 
