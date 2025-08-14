import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, User, Heart, ShoppingBag, Search } from "lucide-react";
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../../features/cart/cartSlice";
import { selectFavorites } from "../../features/favorites/favoriteSlice";
import FavoriteDropdown from "../FavoriteDropdown/FavoriteDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const totalQuantity = useSelector(selectTotalQuantity);
  const favorites = useSelector(selectFavorites);

  const visiblePaths = ["/women", "/men", "/kids"];
  const isVisibleSearch = visiblePaths.includes(location.pathname);

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#290041] shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Sol menyular */}
        <div className="hidden md:flex space-x-6 text-[21px] font-semibold">
          {["/women", "/men", "/kids"].map((path) => {
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

        {/* Logo */}
        <div className="shopsell-img-wrapper mx-auto sm:mx-0 w-24 sm:w-25 h-[70px] overflow-hidden">
          <img
            src="/images/Shopsell.png"
            alt="ShopSell Logo"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Sağ ikonlar */}
        <div className="flex items-center space-x-6">
          {/* Axtarış */}
          {isVisibleSearch && (
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="text-white hover:text-pink-400 transition"
            >
              <Search className="w-6 h-6" />
            </button>
          )}

          {/* Hesab */}
          <Link
            to="/login"
            className="text-white hover:text-blue-400 transition"
          >
            <User className="w-6 h-6" />
          </Link>

          {/* Favoritlər */}
          <div className="relative flex items-center">
            <button
              onClick={() => setShowFavorites((prev) => !prev)}
              className="text-white hover:text-red-400 transition"
            >
              <Heart className="w-6 h-6" />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {favorites.length}
                </span>
              )}
            </button>
            {showFavorites && (
              <FavoriteDropdown onClose={() => setShowFavorites(false)} />
            )}
          </div>

          {/* Səbət */}
          <button
            onClick={() => {
              if (location.pathname === "/cart") {
                navigate("/"); // Əgər artıq cart səhifəsindəsə, home-a keç
              } else {
                navigate("/cart"); // Əks halda cart-a keç
              }
            }}
            className="relative text-white hover:text-green-400 transition"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </button>

          {/* Hamburger menyu (mobil) */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobil menyu */}
      {isOpen && (
        <div
          className="md:hidden px-4 pb-4 space-y-2 shadow-inner text-[17px] text-opacity-100"
          style={{ opacity: 1 }}
        >
          <Link
            to="/women"
            onClick={() => setIsOpen(false)}
            className="block text-white text-opacity-100 hover:text-pink-500"
            style={{ color: "#fff", opacity: 1 }}
          >
            Qadınlar
          </Link>
          <Link
            to="/men"
            onClick={() => setIsOpen(false)}
            className="block text-white text-opacity-100 hover:text-pink-500"
            style={{ color: "#fff", opacity: 1 }}
          >
            Kişilər
          </Link>
          <Link
            to="/kids"
            onClick={() => setIsOpen(false)}
            className="block text-white text-opacity-100 hover:text-pink-500"
            style={{ color: "#fff", opacity: 1 }}
          >
            Uşaqlar
          </Link>
        </div>
      )}

      {/* Axtarış sahəsi */}
      {showSearch && isVisibleSearch && (
        <div className="bg-gray-100 border-t px-4 py-3">
          <div className="max-w-4xl mx-auto flex">
            <input
              type="text"
              placeholder="Axtar..."
              className="w-full border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 text-base"
            />
            <button className="bg-[#290041] text-white px-6 rounded-r hover:bg-[#290041]/80 transition text-base">
              Axtar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

