import womenShoes from "./womenShoes";
import womenBags from "./womenBags";
import menShoes from "./menShoes";
import menBags from "./menBags";
import kidsShoes from "./kidsShoes";
import kidsBags from "./kidsBags";

const allProducts = [
  ...womenShoes.map((item) => ({
    ...item,
    type: "shoe",
    uniqueId: `wshoe-${item.id}`,
  })),
  ...womenBags.map((item) => ({
    ...item,
    type: "bag",
    uniqueId: `wbag-${item.id}`,
  })),
  ...menShoes.map((item) => ({
    ...item,
    type: "shoe",
    uniqueId: ` mshoe-${item.id}`,
  })),
  ...menBags.map((item) => ({
    ...item,
    type: "bag",
    uniqueId: `mbag-${item.id}`,
  })),
  ...kidsShoes.map((item) => ({
    ...item,
    type: "shoe",
    uniqueId: `kshoe-${item.id}`,
  })),
  ...kidsBags.map((item) => ({
    ...item,
    type: "bag",
    uniqueId: `kbag-${item.id}`,
  })),
];

export default allProducts;
