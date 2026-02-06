import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../components/ItemDetail";
import { getProductById } from "../services/products";

const ItemDetailContainer = ({ onAddToCart }) => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    getProductById(itemId)
      .then((data) => {
        if (cancelled) return;
        setItem(data);
      })
      .catch(() => {
        if (cancelled) return;
        setError("No se pudo cargar el producto.");
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [itemId]);

  if (loading) {
    return (
      <section className="container">
        <p className="status">Cargando detalle...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container">
        <p className="status status--error">{error}</p>
      </section>
    );
  }

  if (!item) {
    return (
      <section className="container">
        <p className="status status--error">Producto no encontrado.</p>
      </section>
    );
  }

  return (
    <section className="container">
      <ItemDetail item={item} onAddToCart={onAddToCart} />
    </section>
  );
};

export default ItemDetailContainer;
