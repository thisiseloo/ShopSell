import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, User, Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../../features/cart/cartSlice";
import { selectFavorites } from "../../features/favorites/favoriteSlice";
import FavoriteDropdown from "../FavoriteDropdown/FavoriteDropdown";
import { SlBasket } from "react-icons/sl";

export default function Navbar({ searchQuery, setSearchQuery }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const totalQuantity = useSelector(selectTotalQuantity);
  const favorites = useSelector(selectFavorites);

  const visiblePaths = ["/women", "/men", "/kids"];
  const isVisibleSearch = visiblePaths.includes(location.pathname);

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#290041] shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[70px]">
        <div className="hidden md:flex space-x-6 font-semibold text-[16px] sm:text-[18px] md:text-[21px]">
          {visiblePaths.map((path) => {
            const label =
              path === "/women"
                ? "Qadınlar"
                : path === "/men"
                ? "Kişilər"
                : "Uşaqlar";
            return (
              <Link
                key={path}
                to={path}
                className="relative group text-white hover:text-pink-500 transition"
              >
                {label}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>

        <div
          className="shopsell-img-wrapper mx-auto md:mx-0 w-24 sm:w-28 h-full overflow-hidden cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/images/shopsell_logo.png"
            alt="ShopSell Logo"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
          {isVisibleSearch && (
            <div className="hidden md:flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Axtar..."
                className="w-64 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 text-[14px] sm:text-[16px] md:text-base"
              />
            </div>
          )}

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/auth"   
              className="text-white hover:text-blue-400 transition"
            >
              <User className="w-5 sm:w-6 h-5 sm:h-6" />
            </Link>

            <div className="relative flex items-center">
              <button
                onClick={() => setShowFavorites((prev) => !prev)}
                className="text-white hover:text-red-400 transition"
              >
                <Heart className="w-5 sm:w-6 h-5 sm:h-6" />
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {favorites.length}
                  </span>
                )}
              </button>
              {showFavorites && (
                <FavoriteDropdown onClose={() => setShowFavorites(false)} />
              )}
            </div>

            <button
              onClick={() => {
                if (location.pathname === "/cart") navigate("/");
                else navigate("/cart");
              }}
              className="relative text-white hover:text-green-400 transition"
            >
              <SlBasket className="w-5 sm:w-6 h-5 sm:h-6" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] sm:text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <X className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            ) : (
              <Menu className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 shadow-inner bg-[#290041] text-[14px] sm:text-[16px] space-y-3">
          <div className="flex justify-around mt-3 space-x-3">
            {[
              {
                to: "/women",
                label: "Qadınlar",
                img: "https://i.pinimg.com/736x/e3/44/c2/e344c2f96cd1e4c3269a17e456d02111.jpg",
              },
              {
                to: "/men",
                label: "Kişilər",
                img: "https://i.pinimg.com/1200x/18/94/2b/18942bf765f0a7f10fe43987594b3982.jpg",
              },
              {
                to: "/kids",
                label: "Uşaqlar",
                img: "https://i.pinimg.com/736x/9c/ba/6a/9cba6a57e0945ecafd5ad64bf7939cf4.jpg",
              },
            ].map((cat) => (
              <Link
                key={cat.to}
                to={cat.to}
                onClick={() => setIsOpen(false)}
                className="relative flex flex-col justify-end w-32 h-40 bg-cover bg-center rounded-lg hover:scale-105 transition-transform overflow-hidden"
                style={{ backgroundImage: `url('${cat.img}')` }}
              >
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="block text-lg font-bold">{cat.label}</span>
                  <span className="block text-sm">üçün</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center space-x-2 mt-4">
            {isVisibleSearch && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Axtar..."
                className="w-2/3 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 text-[14px] sm:text-[16px]"
              />
            )}

            <div className="flex items-center space-x-3">
              <Link
                to="/auth" 
                className="text-white hover:text-blue-400 transition"
              >
                <User className="w-5 sm:w-6 h-5 sm:h-6" />
              </Link>

              <div className="relative">
                <button
                  onClick={() => setShowFavorites((prev) => !prev)}
                  className="text-white hover:text-red-400 transition"
                >
                  <Heart className="w-5 sm:w-6 h-5 sm:h-6" />
                  {favorites.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs w-4 h-4 flex items-center justify-center rounded-full">
                      {favorites.length}
                    </span>
                  )}
                </button>
                {showFavorites && (
                  <FavoriteDropdown onClose={() => setShowFavorites(false)} />
                )}
              </div>

              <button
                onClick={() => {
                  if (location.pathname === "/cart") navigate("/");
                  else navigate("/cart");
                }}
                className="relative text-white hover:text-green-400 transition"
              >
                <SlBasket className="w-5 sm:w-6 h-5 sm:h-6" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] sm:text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
