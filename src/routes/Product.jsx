import { useOutletContext } from "react-router-dom";

function Product() {
  const product = useOutletContext();
  console.log(product);
  return <p>Product</p>;
}

export default Product;
