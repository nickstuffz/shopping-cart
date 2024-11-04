import { useOutletContext } from "react-router-dom";

function Product() {
  const product = useOutletContext();
  console.log(product);
  return <div className="h-full flex-1">Product</div>;
}

export default Product;
