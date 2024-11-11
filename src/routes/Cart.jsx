import { useOutletContext } from "react-router-dom";
import CartCard from "./CartCard";

function Cart() {
  const {
    cart,
    handleAddQuantity,
    handleSubtractQuantity,
    handleDeleteItem,
    handleCheckout,
  } = useOutletContext();

  const subtotal = cart.reduce(
    (accumulator, element) => accumulator + element.quantity * element.price,
    0,
  );

  const cartCardGrid = cart.map((element) => (
    <CartCard
      id={element.id}
      imgSrc={element.image}
      title={element.title}
      price={element.price}
      quantity={element.quantity}
      slug={element.slug}
      key={element.id}
      handleAddQuantity={handleAddQuantity}
      handleSubtractQuantity={handleSubtractQuantity}
      handleDeleteItem={handleDeleteItem}
    />
  ));

  return (
    <div
      id="cart"
      className="flex  h-full min-h-screen flex-1 flex-col gap-5 p-3"
    >
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        {cartCardGrid}
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Order Summary</h1>
        <h4>Subtotal: ${subtotal.toFixed(2)} </h4>
        <button
          onClick={handleCheckout}
          className="w-32 rounded-lg bg-black text-white"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
export default Cart;
