import {
  useLoaderData,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import ShopCard from "./ShopCard";

function Shop() {
  const { fetchedData } = useLoaderData();
  const { productId } = useParams();
  const { handleAddToCart } = useOutletContext();

  // adds slug property to data
  const shopData = fetchedData.map((element) => ({
    ...element,
    slug: element.title.replace(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ""),
  }));

  // renders Product route
  if (productId) {
    const product = shopData.find((element) => element.slug === productId);
    return <Outlet context={{ product, handleAddToCart }} />;
  }

  const shopCardGrid = shopData.map((element) => (
    <ShopCard
      imgSrc={element.image}
      title={element.title}
      price={element.price}
      slug={element.slug}
      key={element.id}
    />
  ));

  return (
    <div
      id="shop"
      className="grid h-full min-h-screen flex-1 grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-8 p-3"
    >
      {shopCardGrid}
    </div>
  );
}

export default Shop;
