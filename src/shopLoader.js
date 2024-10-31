// write getShopData fetch
async function getShopData() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/jewelery",
    { mode: "cors" },
  );
  const jeweleryData = response.json();
  return jeweleryData;
}

async function shopLoader() {
  const shopData = await getShopData();

  return { shopData };
}

export default shopLoader;
