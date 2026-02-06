import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NotFound from "./pages/NotFound";

import "./index.css";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <NavBar totalCarrito={carrito.length} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer mensaje="Bienvenidos a Mateando, tu tienda de mates y accesorios" />
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainer mensaje="Bienvenidos a Mateando, tu tienda de mates y accesorios" />
          }
        />
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer onAddToCart={agregarAlCarrito} />}
        />

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
