import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const OrderFormModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    postalCode: "",
    address: "",
    paymentMethod: "Nağd",
    deliveryOption: "Mağazadan götürəcəm",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.paymentMethod === t("order_form_payment_card")) {
      if (!formData.cardNumber || !formData.cardExpiry || !formData.cardCvc) {
        alert(t("order_form_card_required"));
        return;
      }
    }

    console.log("Sifariş məlumatları:", formData);
    alert(t("order_form_success"));
    onClose();
  };

  // Kart nömrəsini formatlama (XXXX XXXX XXXX XXXX)
  const formatCardNumber = (num) => {
    return num.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{t("order_form_title")}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Ad Soyad */}
          <input
            type="text"
            name="name"
            placeholder={t("order_form_name")}
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />

          {/* Telefon */}
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

          {/* Poçt indeksi */}
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

          {/* Ünvan */}
          <textarea
            name="address"
            placeholder={t("order_form_address")}
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />

          {/* Ödəniş üsulu */}
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
                  checked={formData.paymentMethod === t("order_form_payment_cash")}
                  onChange={handleChange}
                />
                {t("order_form_payment_cash")}
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={t("order_form_payment_card")}
                  checked={formData.paymentMethod === t("order_form_payment_card")}
                  onChange={handleChange}
                />
                {t("order_form_payment_card")}
              </label>
            </div>
          </div>

          {/* Kart dizaynı */}
          {formData.paymentMethod === t("order_form_payment_card") && (
            <div className="space-y-3">
              {/* Kart preview */}
              <div
                className={`relative w-full h-48 rounded-xl text-white shadow-xl transition-transform duration-500 ${
                  isCardFlipped ? "transform rotate-y-180" : ""
                }`}
                style={{
                  perspective: "1000px",
                }}
              >
                {/* Ön tərəf */}
                <div
                  className={`absolute w-full h-full rounded-xl p-5 bg-gradient-to-r from-purple-700 to-pink-500 backface-hidden ${
                    isCardFlipped ? "hidden" : "block"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold">VISA</span>
                    <span className="text-sm">{t("order_form_card_chip")}</span>
                  </div>
                  <div className="mt-6 text-xl tracking-widest">
                    {formData.cardNumber
                      ? formatCardNumber(formData.cardNumber)
                      : "•••• •••• •••• ••••"}
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <div className="text-xs">{t("order_form_card_expiry")}</div>
                      <div>
                        {formData.cardExpiry ? formData.cardExpiry : "MM/YY"}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs">{t("order_form_name")}</div>
                      <div>{formData.name || "NAME SURNAME"}</div>
                    </div>
                  </div>
                </div>

                {/* Arxa tərəf */}
                <div
                  className={`absolute w-full h-full rounded-xl p-5 bg-gray-800 text-white transform rotate-y-180 backface-hidden ${
                    !isCardFlipped ? "hidden" : "block"
                  }`}
                >
                  <div className="bg-black h-10 w-full mt-5"></div>
                  <div className="mt-10 flex justify-end pr-5">
                    <div className="bg-white text-black px-3 py-1 rounded">
                      {formData.cardCvc || "•••"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Kart inputları */}
              <input
                type="text"
                name="cardNumber"
                placeholder={t("order_form_card_number")}
                value={formData.cardNumber}
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
                  value={formData.cardExpiry}
                  onChange={handleChange}
                  className="w-1/2 border px-4 py-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="cardCvc"
                  placeholder="CVC"
                  value={formData.cardCvc}
                  onChange={(e) => {
                    handleChange(e);
                    setIsCardFlipped(true);
                  }}
                  onBlur={() => setIsCardFlipped(false)}
                  className="w-1/2 border px-4 py-2 rounded"
                  maxLength={3}
                  required
                />
              </div>
            </div>
          )}

          {/* Çatdırılma */}
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
                    checked={formData.deliveryOption === t(`order_form_delivery_${opt}`)}
                    onChange={handleChange}
                  />
                  {t(`order_form_delivery_${opt}`)}
                </label>
              ))}
            </div>
          </div>

          {/* Düymələr */}
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

export default OrderFormModal;
