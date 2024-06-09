async function logJSONData() {
    const response = await fetch("https://dummyjson.com/products");
    const jsonData = await response.json();
    console.log(jsonData);
  }