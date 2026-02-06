import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="container">
      <h1>404</h1>
      <p className="status">La página que buscás no existe.</p>
      <Link className="btn" to="/">
        Volver al catálogo
      </Link>
    </section>
  );
};

export default NotFound;
