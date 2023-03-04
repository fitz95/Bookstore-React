import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="title">BOOKSTORE CMS</h2>
      <ul>
        <li className="menuitems">
          <Link to="/" style={{ textDecoration: 'none' }}>BOOKS</Link>
        </li>
        <li className="menuitems">
          <Link to="/Categories" style={{ textDecoration: 'none' }}>CATEGORIES</Link>
        </li>
      </ul>
      <FaRegUserCircle className="icon-style" />
    </nav>
  );
}
export default Navbar;
