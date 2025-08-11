import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorites,
  toggleFavorite,
} from "../../features/favorites/favoriteSlice";
import { useNavigate } from "react-router-dom";

const FavoriteDropdown = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <div className="absolute right-0 top-10 bg-white shadow-md p-4 rounded w-80 z-50">
        <p className="text-center text-gray-500">Favorit məhsul yoxdur.</p>
      </div>
    );
  }

  return (
    <div className="absolute right-0 top-10 bg-white shadow-md p-4 rounded w-96 z-50 max-h-[400px] overflow-y-auto">
      {favorites.map((item) => (
        <div
          key={item.uniqueId} // <-- burada id deyil, uniqueId istifadə et
          className="flex items-center justify-between gap-4 border-b py-2"
        >
          {/* Şəkil və ada klik edəndə ProductDetail səhifəsinə yönləndirir */}
          <div
            className="flex items-center gap-4 cursor-pointer flex-1"
            onClick={() => navigate(`/product/${item.uniqueId}`)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <span className="text-sm font-semibold">{item.name}</span>
          </div>

          <span className="text-pink-600 font-bold">{item.price} ₼</span>

          <button
            onClick={() => dispatch(toggleFavorite(item))}
            title="Favoritdən çıxar"
          >
            <span className="text-red-500 text-xl">❤</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoriteDropdown;
