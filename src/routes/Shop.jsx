import { useLoaderData, Outlet, useParams } from "react-router-dom";
import Card from "./Card";

function Shop() {
  const { fetchedData } = useLoaderData();

  const shopData = fetchedData.map((element) => ({
    ...element,
    slug: element.title.replace(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ""),
  }));

  const { productId } = useParams();
  if (productId) {
    const product = shopData.find((element) => element.slug === productId);
    return <Outlet context={product} />;
  }

  const cardGrid = shopData.map((element) => (
    <Card
      imgSrc={element.image}
      title={element.title}
      price={element.price}
      slug={element.slug}
      key={element.id}
    />
  ));

  return (
    <div
      id="shop-cardgrid"
      className="grid h-full min-h-screen flex-1 grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-8 p-3"
    >
      {cardGrid}
    </div>
  );
}

export default Shop;
