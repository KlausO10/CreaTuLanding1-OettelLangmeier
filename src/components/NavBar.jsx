import CartWidget from "./CartWidget";

const NavBar = ({ totalCarrito }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">Mateando</h2>

      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <CartWidget total={totalCarrito} />
    </nav>
  );
};

export default NavBar;
