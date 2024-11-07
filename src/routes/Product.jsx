import { useOutletContext } from "react-router-dom";

function Product() {
  const product = useOutletContext();
  console.log(product);
  return (
    <div
      id="shop-productpage"
      className="grid h-full min-h-screen flex-1 grid-cols-[1fr,1fr] p-3"
    >
      <img className="object.contain p-4" src={product.image} />
      <div className="flex flex-col gap-4 border border-black p-4">
        <p className="text-xl font-bold">{product.title}</p>
        <p className="text-sm">{product.category}</p>
        <p className="text-xs">
          {product.rating.rate} rating / {product.rating.count} count
        </p>
        <p className="font-mono text-lg font-semibold">
          ${product.price.toFixed(2)}
        </p>
        <button className="rounded-lg bg-black text-white">Add to cart</button>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Product;
