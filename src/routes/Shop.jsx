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
    <div
      id="shop-grid"
      className="m-3 grid h-full min-h-max flex-1 grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-10"
    >
      {cardGrid}
    </div>
  );
}

export default Shop;
