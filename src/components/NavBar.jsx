import { NavLink } from "react-router-dom";

import CartWidget from "./CartWidget";
import { categories } from "../data/products";

const NavBar = ({ totalCarrito }) => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Mateando
      </NavLink>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}
          >
            Catálogo
          </NavLink>
        </li>

        {categories.map((cat) => (
          <li key={cat.id}>
            <NavLink
              to={`/category/${cat.id}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {cat.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <CartWidget total={totalCarrito} />
    </nav>
  );
};

export default NavBar;
