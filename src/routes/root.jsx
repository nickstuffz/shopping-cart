import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Root() {
  const [cart, setCart] = useState([]);

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

  function handleDeleteItem({ id }) {
    const nextCart = cart.filter((element) => element.id !== id);
    setCart(nextCart);
  }

  function handleCheckout() {
    if (cart.length === 0) {
      alert("empty cart");
      return;
    } else {
      alert("Your order has been submitted!");
      setCart([]);
    }
  }
  return (
    <div className="flex">
      <Sidebar cart={cart} />
      <Outlet
        context={{
          cart,
          handleAddToCart,
          handleAddQuantity,
          handleSubtractQuantity,
          handleDeleteItem,
          handleCheckout,
        }}
      />
    </div>
  );
}

export default Root;
