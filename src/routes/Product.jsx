import { useOutletContext } from "react-router-dom";

function Product() {
  const product = useOutletContext();
  console.log(product);
  return (
    <div
      id="shop-productpage"
      className="grid h-full min-h-screen flex-1 grid-cols-[2fr,1fr] p-3"
    >
      <img className="object.contain p-4" src={product.image} />
      <div>
        <p>{product.title}</p>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>
          {product.rating.rate} rating / {product.rating.count} count
        </p>
      </div>
    </div>
  );
}

export default Product;
