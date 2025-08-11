// src/components/OrderFormModal.jsx
import React, { useState } from "react";

const OrderFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "Nağd",
    deliveryOption: "Mağazadan götürəcəm",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sifariş məlumatları:", formData);
    alert("Sifarişiniz qəbul edildi!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sifariş Formu</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Ad və Soyad"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="tel"
            name="phone"
            placeholder="+994 xx xxx xx xx"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="^\+994\s\d{2}\s\d{3}\s\d{2}\s\d{2}$"
            className="w-full border px-4 py-2 rounded"
            title="Telefon nömrəsi +994 xx xxx xx xx formatında olmalıdır"
          />

          <textarea
            name="address"
            placeholder="Ünvan"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          />

          <div>
            <label className="block font-medium mb-1">Ödəniş üsulu</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Nağd"
                  checked={formData.paymentMethod === "Nağd"}
                  onChange={handleChange}
                />
                Nağd
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Kart ilə"
                  checked={formData.paymentMethod === "Kart ilə"}
                  onChange={handleChange}
                />
                Kart ilə
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Sifarişi harada götürmək istəyirsiniz?
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="Mağazadan götürəcəm"
                  checked={formData.deliveryOption === "Mağazadan götürəcəm"}
                  onChange={handleChange}
                />
                Mağazadan götürəcəm
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="Kuryer ilə çatdırılma"
                  checked={formData.deliveryOption === "Kuryer ilə çatdırılma"}
                  onChange={handleChange}
                />
                Kuryer ilə çatdırılma
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="Poçt ilə bölgələrə çatdırılma"
                  checked={
                    formData.deliveryOption === "Poçt ilə bölgələrə çatdırılma"
                  }
                  onChange={handleChange}
                />
                Poçt ilə bölgələrə çatdırılma
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Ləğv et
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
            >
              Təsdiqlə
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderFormModal;
