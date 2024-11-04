async function shopLoader() {
  const response = await fetch("https://fakestoreapi.com/products/", {
    mode: "cors",
  });

  const fetchedData = await response.json();

  return { fetchedData };
}

export default shopLoader;
