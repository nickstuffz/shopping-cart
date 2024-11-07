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
    quantity: 1,
  },
];

function Root() {
  const [cart, setCart] = useState(null);

  // calculate cart total quantity

  let result = mockCart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0,
  );

  console.log(result);
  return (
    <div className="flex">
      <Sidebar cart={cart} />
      <Outlet context={[cart, setCart]} />
    </div>
  );
}

export default Root;
