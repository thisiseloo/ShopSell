// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   removeItem,
//   increaseQty,
//   decreaseQty,
// } from "../../features/cart/cartSlice";
// import OrderFormModal from "../../components/OrderFormModal/OrderFormModal";
// import { GoTrash } from "react-icons/go";

// const CartPage = () => {
//   const cart = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

//   if (cart.length === 0) {
//     return (
//       <div className="p-10 text-center text-gray-600">Səbətiniz boşdur.</div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Səbət</h1>
//       <div className="flex flex-col gap-4">
//         {cart.map((item) => (
//           <div
//             key={`${item.uniqueId}-${item.size || ""}`}
//             className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-24 h-24 object-cover rounded cursor-pointer"
//               onClick={() => navigate(`/product/${item.uniqueId}`)}
//             />

//             <div className="flex-1">
//               <h2 className="font-semibold">{item.name}</h2>
//               {item.size && (
//                 <p className="text-sm text-gray-500">Razmer: {item.size}</p>
//               )}
//               <p className="text-pink-600 font-bold">{item.price} AZN</p>
//             </div>

//             {/* Say idarəsi */}
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => dispatch(decreaseQty(item))}
//                 className="px-2 py-1 bg-gray-200 rounded"
//               >
//                 -
//               </button>
//               <span>{item.quantity}</span>
//               <button
//                 onClick={() => dispatch(increaseQty(item))}
//                 className="px-2 py-1 bg-gray-200 rounded"
//               >
//                 +
//               </button>
//             </div>

//             {/* Sil düyməsi - FiTrash2 ikonu ilə */}
//             <button
//               onClick={() => dispatch(removeItem(item))}
//               className="p-2 text-gray-700 rounded hover:text-red-600 transition"
//               aria-label="Məhsulu sil"
//             >
//               <GoTrash size={20} />
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Sifarişi tamamla düyməsi */}
//       <div className="mt-6 text-right">
//         <button
//           onClick={() => setIsOrderModalOpen(true)}
//           className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//         >
//           Sifarişi tamamla
//         </button>
//       </div>

//       {/* Modal */}
//       {isOrderModalOpen && (
//         <OrderFormModal onClose={() => setIsOrderModalOpen(false)} />
//       )}
//     </div>
//   );
// };

// export default CartPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart, // ✅ bütün səbəti silmək üçün
} from "../../features/cart/cartSlice";
import OrderFormModal from "../../components/OrderFormModal/OrderFormModal";
import { GoTrash } from "react-icons/go";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // ✅ Ümumi məbləğ hesablanır
  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center text-gray-600 text-lg">
        Səbətiniz boşdur.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-[40px] mb-[50px] mt-[50px] bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Səbət</h1>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={`${item.uniqueId}-${item.size || ""}`}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded cursor-pointer hover:scale-105 transition"
              onClick={() => navigate(`/product/${item.uniqueId}`)}
            />

            <div className="flex-1">
              <h2 className="font-semibold text-lg text-gray-800">
                {item.name}
              </h2>
              {item.size && (
                <p className="text-sm text-gray-500">Razmer: {item.size}</p>
              )}
              <p className="text-pink-600 font-bold">
                {item.price} <span className="text-sm">AZN</span>
              </p>
            </div>

            {/* ✅ Say idarəsi */}
            <div className="flex items-center h-[35px] border border-gray-400 rounded-[40px] overflow-hidden">
              <button
                onClick={() => dispatch(decreaseQty(item))}
                className="px-3 py-2 hover:bg-gray-100 transition"
              >
                -
              </button>
              <span className="w-6 h-6 flex items-center justify-center text-purple-900 bg-purple-200 rounded-full text-center select-none">
                {item.quantity}
              </span>
              <button
                onClick={() => dispatch(increaseQty(item))}
                className="px-3 py-2 hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>

            {/* ✅ Sil düyməsi */}
            <button
              onClick={() => dispatch(removeItem(item))}
              className="p-2 text-gray-500 rounded hover:text-red-600 transition"
              aria-label="Məhsulu sil"
            >
              <GoTrash size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Ümumi məbləğ */}
      <div className="mt-6 flex justify-between items-center">
        <span className="text-lg font-semibold text-gray-800">
          Ümumi məbləğ: <span className="text-pink-600">{totalPrice} AZN</span>
        </span>
        {/* ✅ Səbəti təmizlə düyməsi */}
        <button
          onClick={() => dispatch(clearCart())}
          className="h-[40px] w-[200px] bg-purple-300 text-[14px] text-[#290041] rounded-lg font-semibold hover:bg-gray-200 transition !border !border-[#290041]"
        >
          Səbəti təmizlə
        </button>
      </div>

      {/* ✅ Sifarişi tamamla düyməsi */}
      <div className="mt-4 text-right">
        <button
          onClick={() => setIsOrderModalOpen(true)}
          className="h-[40px] w-[200px] bg-pink-300 text-[14px] text-[#290041] rounded-lg font-semibold hover:bg-gray-200 transition !border !border-[#290041]"
        >
          Sifarişi tamamla
        </button>
      </div>

      {/* ✅ Modal */}
      {isOrderModalOpen && (
        <OrderFormModal onClose={() => setIsOrderModalOpen(false)} />
      )}
    </div>
  );
};

export default CartPage;
