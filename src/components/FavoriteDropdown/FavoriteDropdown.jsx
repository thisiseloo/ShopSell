import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorites,
  toggleFavorite,
} from "../../features/favorites/favoriteSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FavoriteDropdown = ({ onClose }) => {
  const { t } = useTranslation();
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      <div
        ref={dropdownRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-white shadow-lg p-4 rounded-lg w-[90%] max-w-md max-h-[80vh] overflow-y-auto z-50"
      >
        {favorites.length === 0 ? (
          <p className="text-center text-[#1a0029]/90">{t("no_favorites")}</p>
        ) : (
          favorites.map((item) => (
            <div
              key={item.uniqueId}
              className="flex items-center justify-between gap-4 border-b py-2 last:border-b-0"
            >
              <div
                className="flex items-center gap-4 cursor-pointer flex-1"
                onClick={() => navigate(`/product/${item.uniqueId}`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
                />
                <span className="text-sm text-[#1a0029] sm:text-base font-semibold">
                  {item.name}
                </span>
              </div>

              <span className="text-pink-600 font-bold text-sm sm:text-base">
                {item.price} ₼
              </span>

              <button
                onClick={() => dispatch(toggleFavorite(item))}
                title={t("remove_favorite")}
              >
                <span className="text-red-500 text-lg sm:text-xl">❤</span>
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FavoriteDropdown;
