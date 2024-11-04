async function shopLoader() {
  const response = await fetch("https://fakestoreapi.com/products/", {
    mode: "cors",
  });

  const shopData = await response.json();

  return { shopData };
}

export default shopLoader;
