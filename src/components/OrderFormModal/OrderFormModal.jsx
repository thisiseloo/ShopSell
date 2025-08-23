import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CardModal from "../CardModal/CardModal";

const OrderFormModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    postalCode: "",
    address: "",
    paymentMethod: t("order_form_payment_cash"),
    deliveryOption: t("order_form_delivery_store"),
  });

  const [showCardModal, setShowCardModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.paymentMethod === t("order_form_payment_card")) {
      setShowCardModal(true);
      return;
    }

    console.log("Sifariş məlumatları:", formData);
    alert(t("order_form_success"));
    onClose();
  };

  const handleCardConfirm = (cardData) => {
    console.log("Kart məlumatları:", cardData);
    console.log("Tam sifariş:", { ...formData, ...cardData });
    alert(t("order_form_success"));
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{t("order_form_title")}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder={t("order_form_name")}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />

            <input
              type="tel"
              name="phone"
              placeholder={t("order_form_phone")}
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="^(\+994\d{9}|0\d{9})$"
              className="w-full border px-4 py-2 rounded"
              title={t("order_form_phone_title")}
            />

            <input
              type="text"
              name="postalCode"
              placeholder={t("order_form_postal")}
              value={formData.postalCode}
              onChange={handleChange}
              required
              pattern="^\d{4}$"
              className="w-full border px-4 py-2 rounded"
              title={t("order_form_postal_title")}
            />

            <textarea
              name="address"
              placeholder={t("order_form_address")}
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded"
            />

            <div>
              <label className="block font-medium mb-1">
                {t("order_form_payment")}
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={t("order_form_payment_cash")}
                    checked={
                      formData.paymentMethod === t("order_form_payment_cash")
                    }
                    onChange={handleChange}
                  />
                  {t("order_form_payment_cash")}
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={t("order_form_payment_card")}
                    checked={
                      formData.paymentMethod === t("order_form_payment_card")
                    }
                    onChange={handleChange}
                  />
                  {t("order_form_payment_card")}
                </label>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">
                {t("order_form_delivery")}
              </label>
              <div className="space-y-2">
                {["store", "courier", "post"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="deliveryOption"
                      value={t(`order_form_delivery_${opt}`)}
                      checked={
                        formData.deliveryOption ===
                        t(`order_form_delivery_${opt}`)
                      }
                      onChange={handleChange}
                    />
                    {t(`order_form_delivery_${opt}`)}
                  </label>
                ))}
              </div>
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

      {showCardModal && (
        <CardModal
          onClose={() => setShowCardModal(false)}
          onConfirm={handleCardConfirm}
          name={formData.name}
        />
      )}
    </>
  );
};

export default OrderFormModal;
