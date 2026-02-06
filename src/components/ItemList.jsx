import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  if (!items?.length) {
    return <p className="status">No hay productos para mostrar.</p>;
  }

  return (
    <div className="productos">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
