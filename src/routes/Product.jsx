import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const { product, handleAddToCart } = useOutletContext();

  function handlePlusClick() {
    if (quantity === 99) {
      return;
    }
    setQuantity(quantity + 1);
  }

  function handleMinusClick() {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  }

  function handleReset() {
    setQuantity(1);
  }

  return (
    <div
      id="shop-productpage"
      className="grid h-full min-h-screen flex-1 grid-cols-[1fr,1fr] p-3"
    >
      <img className="object.contain p-4" src={product.image} />
      <div className="flex flex-col gap-4 border border-black p-4">
        <p className="text-xl font-bold">{product.title}</p>
        <p className="text-sm">{product.category}</p>
        <p className="text-xs">
          {product.rating.rate} rating / {product.rating.count} count
        </p>
        <p className="font-mono text-lg font-semibold">
          ${product.price.toFixed(2)}
        </p>
        <div className="flex gap-3">
          <div className="flex w-28 select-none justify-evenly border border-black">
            <button
              onClick={handleMinusClick}
              className="flex-1 bg-slate-300 text-center"
            >
              -
            </button>
            <div className="w-9 text-center">{quantity}</div>
            <button
              onClick={handlePlusClick}
              className="flex-1 bg-slate-300 text-center"
            >
              +
            </button>
          </div>
          {quantity > 5 ? (
            <button className="text-xs" onClick={handleReset}>
              reset
            </button>
          ) : null}
        </div>
        <button
          onClick={() => {
            handleAddToCart({ id: product.id, quantity: quantity });
            handleReset();
          }}
          className="w-32 rounded-lg bg-black text-white"
        >
          Add to cart
        </button>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Product;
