import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { mockCart } from "../assets/mockCart";

function Root() {
  const [cart, setCart] = useState(mockCart);

  // cart quantity calculation to pass to Sidebar
  let sumQuantity = cart.reduce(
    (accumulator, element) => accumulator + element.quantity,
    0,
  );

  function handleAddToCart({ product, quantity }) {
    if (cart.some((element) => element.id === product.id)) {
      const nextCart = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: element.quantity + quantity };
        } else {
          return element;
        }
      });
      setCart(nextCart);
    } else {
      const nextCart = [...cart, { ...product, quantity: quantity }];
      setCart(nextCart);
    }
  }

  function handleAddQuantity({ id }) {
    const nextCart = cart.map((element) => {
      if (element.id === id) {
        return { ...element, quantity: element.quantity + 1 };
      } else {
        return element;
      }
    });
    setCart(nextCart);
  }
  function handleSubtractQuantity({ id }) {
    const nextCart = cart.map((element) => {
      if (element.id === id) {
        return { ...element, quantity: element.quantity - 1 };
      } else {
        return element;
      }
    });
    setCart(nextCart);
  }

  return (
    <div className="flex">
      <Sidebar cartCount={sumQuantity} />
      <Outlet
        context={{
          cart,
          handleAddToCart,
          handleAddQuantity,
          handleSubtractQuantity,
        }}
      />
    </div>
  );
}

export default Root;
