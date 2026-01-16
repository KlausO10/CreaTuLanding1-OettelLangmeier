const ItemListContainer = ({ mensaje, agregarAlCarrito }) => {
  const productos = [
    { id: 1, nombre: "Mate Imperial", precio: 12000 },
    { id: 2, nombre: "Bombilla de Acero", precio: 4500 },
    { id: 3, nombre: "Termo 1L", precio: 25000 }
  ];

  return (
    <section className="container">
      <h1>{mensaje}</h1>

      <div className="productos">
        {productos.map((prod) => (
          <div key={prod.id} className="card">
            <h3>{prod.nombre}</h3>
            <p>${prod.precio}</p>
            <button onClick={() => agregarAlCarrito(prod)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;
