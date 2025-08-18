import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseQty,
  decreaseQty,
} from "../../features/cart/cartSlice";

import womenShoes from "../../data/womenShoes";
import womenBags from "../../data/womenBags";
import menShoes from "../../data/menShoes";
import menBags from "../../data/menBags";
import kidsShoes from "../../data/kidsShoes";
import kidsBags from "../../data/kidsBags";

const brandsList = [
  "Adidas",
  "Guess",
  "U.S Polo Assn",
  "Puma",
  "Prada",
  "Balenciaga",
  "Hermes",
  "Gucci",
  "Christion Louboutin",
  "Chanel",
  "Dior",
  "Fendi",
  "Lacoste",
  "Nike",
  "Tommy Hilfiger",
  "Kinetix",
  "Calvin Klein",
  "Skechers",
  "Aldo",
  "Greyder",
  "Penti",
];
const sizes = [36, 37, 38, 39, 40, 41, 42];
const colorsList = [
  "mavi",
  "qırmızı",
  "yaşıl",
  "sarı",
  "narıncı",
  "bənövşəyi",
  "çəhrayı",
  "ağ",
  "qara",
  "boz",
  "qəhvəyi",
];
const materialsShoe = [
  "Dəri",
  "nubuk",
  "zamşa",
  "kətan",
  "rezin",
  "eva",
  "mesh",
  "pvc",
  "pu dəri",
];
const materialsBag = [
  "Pambıq",
  "Dəri",
  "Süni dəri",
  "Tekstil",
  "Hörmə",
  "Kətan",
  "Polyester",
];
const heelList = ["Topuqsuz", "Qısa topuqlu(1-4sm)"];
const categoryShoe = [
  "İdman ayaqqabıları",
  "Gündəlik ayaqqabılar",
  "Klassik ayaqqabılar",
  "Çəkmələr",
];
const categoryBag = ["Çiyin çantası", "Əl çantası", "Bel çantası"];
const contextList = ["İdman", "Gündəlik", "Ziyafət"];

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

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
      uniqueId: `mshoe-${item.id}`,
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

  const product = allProducts.find((p) => p.uniqueId === id);

  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600 text-lg font-semibold">
        Məhsul tapılmadı!
      </div>
    );
  }

  const cartItem = cartItems.find(
    (item) =>
      item.uniqueId === product.uniqueId &&
      (item.size || "") === (selectedSize || "")
  );

  const handleAddToCart = () => {
    if (product.type === "shoe" && !selectedSize) {
      alert("Zəhmət olmasa ölçü seçin!");
      return;
    }
    dispatch(addItem({ ...product, size: selectedSize }));
  };

  const materialDisplay =
    product.type === "shoe"
      ? product.material.charAt(0).toUpperCase() + product.material.slice(1)
      : product.material.charAt(0).toUpperCase() + product.material.slice(1);

  return (
    <div className="max-w-7xl mx-auto mb-[100px] px-4 sm:px-6 lg:px-8 pb-[120px] md:pb-6 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-4 md:p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 sm:h-80 md:h-[460px] object-cover rounded-lg"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div>
            <strong>Markası:</strong> {product.brand}
          </div>

          {product.type === "shoe" && selectedSize && (
            <div>
              <strong>Ölçüsü:</strong> {selectedSize}
            </div>
          )}

          {product.type === "shoe" && (
            <div>
              <strong>Ölçü seçin:</strong>
              <div className="flex gap-2 mt-1 mb-3 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size
                        ? "bg-pink-400 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <strong>Rəngi:</strong>{" "}
            {product.color.charAt(0).toUpperCase() + product.color.slice(1)}
          </div>

          <div>
            <strong>Materialı:</strong> {materialDisplay}
          </div>

          {product.type === "shoe" && product.heel && (
            <div>
              <strong>Topuq ölçüsü:</strong> {product.heel}
            </div>
          )}

          <div>
            <strong>Kateqoriyası:</strong>{" "}
            {product.category
              ? product.category
              : product.type === "shoe"
              ? categoryShoe[0]
              : categoryBag[0]}
          </div>

          {product.type === "bag" && product.context && (
            <div>
              <strong>Ortamı:</strong> {product.context}
            </div>
          )}

          <div className="text-purple-700 text-2xl font-bold mt-4">
            {product.price} ₼
          </div>

          <div>
            {cartItem ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    dispatch(
                      decreaseQty({
                        uniqueId: product.uniqueId,
                        size: selectedSize,
                      })
                    )
                  }
                  className="bg-gray-200 px-4 py-2 rounded text-lg font-bold"
                >
                  -
                </button>
                <span className="text-lg font-semibold">
                  {cartItem.quantity}
                </span>
                <button
                  onClick={() =>
                    dispatch(
                      increaseQty({
                        uniqueId: product.uniqueId,
                        size: selectedSize,
                      })
                    )
                  }
                  className="bg-gray-200 px-4 py-2 rounded text-lg font-bold"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="bg-[#290041] text-white border border-purple-700 rounded font-semibold 
             hover:!bg-gray-200 hover:!text-[#1a0029] hover:!border-[#290041] 
             transition"
                style={{ width: "250px", height: "50px" }}
              >
                Səbətə əlavə et
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
