import { useState } from "react";

const ItemCount = ({ initial = 1, stock = 0, onAdd }) => {
  const [count, setCount] = useState(initial);

  const dec = () => setCount((c) => Math.max(1, c - 1));
  const inc = () => setCount((c) => Math.min(stock || 1, c + 1));

  const canAdd = stock > 0;

  return (
    <div className="count">
      <button className="btn btn--ghost" onClick={dec} disabled={!canAdd}>
        -
      </button>

      <span className="count__value">{count}</span>

      <button className="btn btn--ghost" onClick={inc} disabled={!canAdd || count >= stock}>
        +
      </button>

      <button
        className="btn"
        onClick={() => onAdd?.(count)}
        disabled={!canAdd}
      >
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;