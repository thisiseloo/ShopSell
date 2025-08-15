import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../../features/cart/cartSlice";
import OrderFormModal from "../../components/OrderFormModal/OrderFormModal";
import { GoTrash } from "react-icons/go";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="p-6 sm:p-10 text-center text-[#1a0029]/60 text-base sm:text-lg">
        Səbətiniz boşdur.
      </div>
    );
  }

  return (
    <div
      className="max-w-5xl mx-auto p-4 sm:p-6 md:p-10 mb-[200px] pt-[70px] mt-10 bg-gray-50 rounded-lg shadow-lg
                 pb-24 sm:pb-[100px]"
    >
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#1a0029]">
        Səbət
      </h1>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={`${item.uniqueId}-${item.size || ""}`}
            className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full sm:w-24 sm:h-24 h-40 object-cover rounded cursor-pointer hover:scale-105 transition"
              onClick={() => navigate(`/product/${item.uniqueId}`)}
            />

            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-semibold text-base sm:text-lg  text-[#1a0029]/90">
                {item.name}
              </h2>
              {item.size && (
                <p className="text-xs sm:text-sm text- text-[#1a0029]/70">
                  Razmer: {item.size}
                </p>
              )}
              <p className="text-pink-600 font-bold text-sm sm:text-base">
                {item.price} <span className="text-xs sm:text-sm">₼</span>
              </p>
            </div>

            {/* Say idarəsi */}
            <div className="flex justify-center sm:justify-start items-center h-[30px] sm:h-[35px] border border-gray-400 rounded-full overflow-hidden">
              <button
                onClick={() => dispatch(decreaseQty(item))}
                className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-100 transition"
              >
                -
              </button>
              <span className="w-6 h-6 flex items-center justify-center text-purple-900 bg-purple-200 rounded-full select-none">
                {item.quantity}
              </span>
              <button
                onClick={() => dispatch(increaseQty(item))}
                className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>

            {/* Sil düyməsi */}
            <button
              onClick={() => dispatch(removeItem(item))}
              className="p-1 sm:p-2 text-[#1a0029]/80 rounded hover:text-red-600 transition"
              aria-label="Məhsulu sil"
            >
              <GoTrash size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Ümumi məbləğ */}
      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <span className="text-base sm:text-lg font-semibold text-[#1a0029]">
          Ümumi məbləğ: <span className="text-pink-600">{totalPrice} ₼</span>
        </span>

        <button
          onClick={() => dispatch(clearCart())}
          className="h-[40px] w-full sm:w-[200px] bg-purple-300 text-sm sm:text-[14px] text-[#290041] rounded-lg font-semibold hover:bg-gray-200 transition border border-[#290041]"
        >
          Səbəti təmizlə
        </button>
      </div>

      {/* Düymələr konteyneri */}
      <div className="mt-4 flex flex-col items-center sm:items-end gap-3 w-full sm:w-auto mx-auto sm:mx-0">
        <button
          onClick={() => setIsOrderModalOpen(true)}
          className="h-[40px] w-full sm:w-[200px] bg-pink-300 text-sm sm:text-[14px] text-[#290041] rounded-lg font-semibold hover:bg-gray-200 transition border border-[#290041]"
        >
          Sifarişi tamamla
        </button>
      </div>

      {isOrderModalOpen && (
        <OrderFormModal onClose={() => setIsOrderModalOpen(false)} />
      )}
    </div>
  );
};

export default CartPage;


