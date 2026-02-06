import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item, onAddToCart }) => {
  const handleAdd = (qty) => {
    onAddToCart?.({ ...item, qty });
  };

  return (
    <div className="detail">
      <div className="detail__media">
        <img className="detail__img" src={item.image} alt={item.name} />
      </div>

      <div className="detail__info">
        <h2 className="detail__title">{item.name}</h2>
        <p className="detail__desc">{item.description}</p>
        <p className="detail__meta">
          <span className="badge">Stock: {item.stock}</span>
          <span className="badge badge--primary">${item.price}</span>
        </p>

        <ItemCount initial={1} stock={item.stock} onAdd={handleAdd} />

        <Link className="link" to={item.category ? `/category/${item.category}` : "/"}>
          ← Volver al catálogo
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
