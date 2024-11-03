import { useLoaderData } from "react-router-dom";
import Card from "./Card";

function Shop() {
  const { shopData } = useLoaderData();

  const cardGrid = shopData.map((element) => (
    <Card
      imgSrc={element.image}
      title={element.title}
      price={element.price}
      key={element.id}
    />
  ));

  return (
    <div id="shop-grid" className="h-full min-h-max flex-1">
      {cardGrid}
    </div>
  );
}

export default Shop;
