import { useOutletContext } from "react-router-dom";
import CartCard from "./CartCard";

function Cart() {
  const { cart, handleAddQuantity, handleSubtractQuantity } =
    useOutletContext();

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
    />
  ));

  return (
    <div
      id="cart"
      className="grid h-full min-h-screen flex-1 grid-cols-[1fr,1fr] p-3"
    >
      <div className="flex flex-col">
        <h1>Your Cart</h1>
        {cartCardGrid}
      </div>
      <div className="flex flex-col">
        <h1>Order Summary</h1>
      </div>
    </div>
  );
}
export default Cart;
