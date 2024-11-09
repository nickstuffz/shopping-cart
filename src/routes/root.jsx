import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Root() {
  const [cart, setCart] = useState([]);

  let sumQuantity = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0,
  );

  async function getItemById({ id }) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      mode: "cors",
    });

    const fetchedData = await response.json();
    return fetchedData;
  }

  async function handleAddToCart({ id, quantity }) {
    if (cart.some((item) => item.id === id)) {
      const nextCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });
      setCart(nextCart);
    } else {
      const addedItem = await getItemById({ id });
      const nextCart = [...cart, { ...addedItem, quantity: quantity }];
      console.log(nextCart);
      setCart(nextCart);
    }
  }
  console.log(cart);
  return (
    <div className="flex">
      <Sidebar cartCount={sumQuantity} />
      <Outlet context={{ handleAddToCart }} />
    </div>
  );
}

export default Root;
