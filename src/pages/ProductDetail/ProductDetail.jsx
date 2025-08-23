import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increaseQty,
  decreaseQty,
} from "../../features/cart/cartSlice";
import { useTranslation } from "react-i18next";

import womenShoes from "../../data/womenShoes";
import womenBags from "../../data/womenBags";
import menShoes from "../../data/menShoes";
import menBags from "../../data/menBags";
import kidsShoes from "../../data/kidsShoes";
import kidsBags from "../../data/kidsBags";

const sizes = [36, 37, 38, 39, 40, 41, 42];

const ProductDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const currentUser = useSelector((state) => state.user.currentUser);

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
        {t("productNotFound")}
      </div>
    );
  }

  const cartItem = cartItems.find(
    (item) =>
      item.uniqueId === product.uniqueId &&
      (item.size || "") === (selectedSize || "")
  );

  const handleAddToCart = () => {
    if (!currentUser) {
      navigate("/auth");
      return;
    }

    if (product.type === "shoe" && !selectedSize) {
      alert(t("selectSize"));
      return;
    }

    dispatch(addItem({ ...product, size: selectedSize }));
  };

  const handleIncreaseQty = () => {
    if (!currentUser) {
      navigate("/auth");
      return;
    }
    dispatch(increaseQty({ uniqueId: product.uniqueId, size: selectedSize }));
  };

  const handleDecreaseQty = () => {
    if (!currentUser) {
      navigate("/auth");
      return;
    }
    dispatch(decreaseQty({ uniqueId: product.uniqueId, size: selectedSize }));
  };

  const materialDisplay =
    product.material.charAt(0).toUpperCase() + product.material.slice(1);

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
            <strong>{t("brand")}:</strong> {product.brand}
          </div>

          {product.type === "shoe" && selectedSize && (
            <div>
              <strong>{t("size")}:</strong> {selectedSize}
            </div>
          )}

          {product.type === "shoe" && (
            <div>
              <strong>{t("selectSize")}:</strong>
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
            <strong>{t("color")}:</strong>{" "}
            {product.color.charAt(0).toUpperCase() + product.color.slice(1)}
          </div>

          <div>
            <strong>{t("material")}:</strong> {materialDisplay}
          </div>

          {product.type === "shoe" && product.heel && (
            <div>
              <strong>{t("heel")}:</strong> {product.heel}
            </div>
          )}

          <div>
            <strong>{t("category")}:</strong>{" "}
            {product.category ||
              (product.type === "shoe"
                ? "Gündəlik ayaqqabılar"
                : "Çiyin çantası")}
          </div>

          {product.type === "bag" && product.context && (
            <div>
              <strong>{t("context")}:</strong> {product.context}
            </div>
          )}

          <div className="text-purple-700 text-2xl font-bold mt-4">
            {product.price} ₼
          </div>

          <div>
            {cartItem ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDecreaseQty}
                  className="bg-gray-200 px-4 py-2 rounded text-lg font-bold"
                >
                  -
                </button>
                <span className="text-lg font-semibold">
                  {cartItem.quantity}
                </span>
                <button
                  onClick={handleIncreaseQty}
                  className="bg-gray-200 px-4 py-2 rounded text-lg font-bold"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="bg-[#290041] text-white border border-purple-700 rounded-[50px] font-semibold 
             hover:!bg-gray-200 hover:!text-[#1a0029] hover:!border-[#290041] 
             transition"
                style={{ width: "250px", height: "50px" }}
              >
                {t("addToCart")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
