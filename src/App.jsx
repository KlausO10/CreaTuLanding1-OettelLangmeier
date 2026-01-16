import { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <NavBar totalCarrito={carrito.length} />
      <ItemListContainer
        mensaje="Bienvenidos a Mateando, tu tienda de mates y accesorios"
        agregarAlCarrito={agregarAlCarrito}
      />
    </>
  );
}

export default App;
