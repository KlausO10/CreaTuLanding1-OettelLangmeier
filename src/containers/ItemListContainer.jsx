import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../components/ItemList";
import { getProducts } from "../services/products";
import { categories } from "../data/products";

const ItemListContainer = ({ mensaje }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryLabel = useMemo(() => {
    if (!categoryId) return null;
    return categories.find((c) => c.id === categoryId)?.label ?? categoryId;
  }, [categoryId]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    getProducts(categoryId)
      .then((data) => {
        if (cancelled) return;
        setItems(data);
      })
      .catch(() => {
        if (cancelled) return;
        setError("No se pudieron cargar los productos.");
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [categoryId]);

  return (
    <section className="container">
      <h1>{mensaje}</h1>

      {categoryLabel && (
        <p className="subtitle">
          Categoría: <strong>{categoryLabel}</strong>
        </p>
      )}

      {loading && <p className="status">Cargando productos...</p>}
      {error && <p className="status status--error">{error}</p>}

      {!loading && !error && <ItemList items={items} />}
    </section>
  );
};

export default ItemListContainer;
