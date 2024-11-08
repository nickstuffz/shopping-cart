import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

let mockCart = [
  {
    id: 5,
    price: 695,
    quantity: 5,
  },
  {
    id: 6,
    price: 168,
    quantity: 2,
  },
  {
    id: 7,
    price: 9.99,
    quantity: 99,
  },
];

function Root() {
  const [cart, setCart] = useState(mockCart);

  let sumQuantity = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0,
  );

  return (
    <div className="flex">
      <Sidebar cartCount={sumQuantity} />
      <Outlet context={[cart, setCart]} />
    </div>
  );
}

// maybe pass eventhandler instead of state, actually no cuz cart
// needs the whole cart object

export default Root;

// if i use a reducer what are the actions?

// Product Page
// dispatch add item to cart (any quantity)

// Cart itself
// dispatch increase quantity
// decrease quantity
// delete

// checkout (refresh cart, clear it)
