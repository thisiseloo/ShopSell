import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const CardModal = ({ onClose, onConfirm, name }) => {
  const { t } = useTranslation();
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardData.cardNumber || !cardData.cardExpiry || !cardData.cardCvc) {
      alert(t("order_form_card_required"));
      return;
    }
    onConfirm(cardData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[60]">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {t("order_form_payment_card")}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="cardNumber"
            placeholder={t("order_form_card_number")}
            value={cardData.cardNumber}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            maxLength={16}
            required
          />
          <div className="flex gap-3">
            <input
              type="text"
              name="cardExpiry"
              placeholder="MM/YY"
              value={cardData.cardExpiry}
              onChange={handleChange}
              className="w-1/2 border px-4 py-2 rounded"
              required
            />
            <input
              type="text"
              name="cardCvc"
              placeholder="CVC"
              value={cardData.cardCvc}
              onChange={handleChange}
              className="w-1/2 border px-4 py-2 rounded"
              maxLength={3}
              required
            />
          </div>

          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              {t("order_form_cancel")}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#290041] text-white rounded hover:bg-pink-700"
            >
              {t("order_form_submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardModal;
