import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import {
  toggleFavorite,
  selectFavorites,
} from "../../features/favorites/favoriteSlice";
import { useNavigate } from "react-router-dom";

const Star = ({ filled, onClick }) => (
  <svg
    onClick={onClick}
    className={`w-4 h-4 cursor-pointer ${
      filled ? "text-yellow-300" : "text-gray-300 dark:text-gray-500"
    }`}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path
      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 
    1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 
    1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 
    2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 
    2.226-1.617l-.863-5.03L20.537 9.2a1.523 
    1.523 0 0 0 .387-1.575Z"
    />
  </svg>
);

const ProductCard = ({ product, cartCount, onAddToCart }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorited = favorites.some((f) => f.uniqueId === product.uniqueId);
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);

  useEffect(() => {
    const savedRating = localStorage.getItem(
      `product-rating-${product.uniqueId}`
    );
    if (savedRating) {
      setRating(Number(savedRating));
    }
  }, [product.uniqueId]);

  const handleRating = (e, star) => {
    e.stopPropagation();
    setRating(star);
    localStorage.setItem(`product-rating-${product.uniqueId}`, star.toString());
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.uniqueId}`)}
      className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full max-w-[300px]"
    >
      {/* Şəkil */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 sm:h-48 md:h-56 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center text-white font-semibold text-sm sm:text-lg transition-opacity">
          Daha ətraflı məlumat
        </div>

        {/* Ürək ikonu */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleFavorite(product));
          }}
          className={`absolute top-2 right-2 text-lg sm:text-2xl ${
            isFavorited ? "text-red-500" : "text-gray-400"
          } hover:text-red-600 transition-colors`}
        >
          <span style={{ fontSize: "22px", fontFamily: "Segoe UI Emoji" }}>
            {isFavorited ? "❤" : "🤍"}
          </span>
        </button>
      </div>

      {/* Məhsul məlumatları */}
      <div className="p-3 sm:p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-base sm:text-lg truncate">
          {product.name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm">{product.brand}</p>

        {/* Ulduzlama */}
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              filled={star <= rating}
              onClick={(e) => handleRating(e, star)}
            />
          ))}
        </div>

        <p className="font-bold text-lg sm:text-xl text-purple-800">
          {product.price} AZN
        </p>

        {/* Səbət düyməsi */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addItem(product));
            onAddToCart?.();
          }}
          className="relative bg-[#290041] text-white border border-purple-700 rounded font-semibold hover:bg-gray-200 hover:text-gray-700 hover:border-[#290041] transition text-center w-full h-[36px] sm:h-[40px] text-sm sm:text-[18px]"
        >
          Səbətə əlavə et
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
