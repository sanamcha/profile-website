// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
// import "../style/Navbar.css";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     "home",
//     "about",
//     "skills",
//     "experience",
//     "projects",
//     "education",
//     "contact",
//   ];

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="navbar">
//       <div className="navbar__container">

//         {/* Logo */}
//         <div className="navbar__logo">
//           <span>SANAM MAHARJAN</span>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="navbar__menu">
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               to={item}
//               smooth={true}
//               duration={500}
//               offset={-70}
//               spy={true}
//               activeClass="active"
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//             </Link>
//           ))}

//           <a
//             href="/resume.pdf"
//             className="resume-btn"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Resume
//           </a>
//         </nav>

//         {/* Mobile Icon */}
//         <div
//           className="mobile-icon"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         {/* Mobile Menu */}
//         <div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               to={item}
//               smooth={true}
//               duration={500}
//               offset={-70}
//               spy={true}
//               onClick={closeMenu}
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//             </Link>
//           ))}

//           <a
//             href="/resume.pdf"
//             className="resume-btn"
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={closeMenu}
//           >
//             Resume
//           </a>
//         </div>

//       </div>
//     </header>
//   );
// }

// export default Navbar;




import { Link, NavLink } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-logo">
        <NavLink to="/">SANAM MAHARJAN</NavLink>
      </div>

      <ul className="navbar-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;