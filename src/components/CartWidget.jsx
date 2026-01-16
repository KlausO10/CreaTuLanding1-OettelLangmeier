const CartWidget = ({ total }) => {
  return (
    <div style={{ fontSize: "18px" }}>
      🛒 <span>{total}</span>
    </div>
  );
};

export default CartWidget;
