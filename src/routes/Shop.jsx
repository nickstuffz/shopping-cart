import { useLoaderData } from "react-router-dom";

function Shop() {
  const { shopData } = useLoaderData();
  console.log(shopData);
  return (
    <div id="shop" className="h-full flex-1">
      <Card />
    </div>
  );
}

function Card() {
  return <div id="card" className="h-72 w-48 border border-black"></div>;
}

export default Shop;
