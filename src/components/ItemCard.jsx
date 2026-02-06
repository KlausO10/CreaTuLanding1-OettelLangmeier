import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <article className="card">
      <img className="card__img" src={item.image} alt={item.name} />
      <h3 className="card__title">{item.name}</h3>
      <p className="card__price">${item.price}</p>

      <Link className="btn" to={`/item/${item.id}`}>
        Ver detalle
      </Link>
    </article>
  );
};

export default ItemCard;
