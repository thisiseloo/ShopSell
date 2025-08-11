// src/data/allProducts.js
import womenShoes from "./womenShoes";
import womenBags from "./womenBags";
import menShoes from "./menShoes";
import menBags from "./menBags";
import kidsShoes from "./kidsShoes";
import kidsBags from "./kidsBags";

const allProducts = [
  ...womenShoes.map((item) => ({ ...item, type: "shoe" })),
  ...womenBags.map((item) => ({ ...item, type: "bag" })),
  ...menShoes.map((item) => ({ ...item, type: "shoe" })),
  ...menBags.map((item) => ({ ...item, type: "bag" })),
  ...kidsShoes.map((item) => ({ ...item, type: "shoe" })),
  ...kidsBags.map((item) => ({ ...item, type: "bag" })),
];

export default allProducts;
