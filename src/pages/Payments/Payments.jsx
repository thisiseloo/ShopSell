import React from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
} from "react-icons/pi";

const Payments = () => {
  const steps = [
    {
      icon: <PiNumberCircleOneLight className="text-purple-900 w-8 h-8" />,
      title: "Sifariş Seçimi",
      text: "İstədiyiniz məhsulları seçin və səbətə əlavə edin.",
    },
    {
      icon: <PiNumberCircleTwoLight className="text-purple-900 w-8 h-8" />,
      title: "Ödəniş Metodunu Seçin",
      text: "Visa, MasterCard, nağd ödəmə və ya digər mövcud ödəniş üsullarından birini seçin.",
    },
    {
      icon: <PiNumberCircleThreeLight className="text-purple-900 w-8 h-8" />,
      title: "Ödənişi Tamamlayın",
      text: "Seçilmiş metodla ödənişi tamamlayın. Ödəniş təsdiqi email və ya SMS vasitəsilə sizə göndəriləcək.",
    },
  ];

  return (
    <div className="max-w-4xl mb-[90px] mx-auto py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-purple-900">
        Ödəniş Prosesi
      </h2>

      <p className="mb-8 text-center text-[#290041]/70 text-lg">
        ShopSell-də ödəniş prosesi sadə və təhlükəsizdir. Aşağıdakı addımları izləyin:
      </p>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              {step.icon}
              <h3 className="text-xl font-semibold text-[#290041]">{step.title}</h3>
            </div>
            <p className="text-[#290041]/70">{step.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-[#290041]/70 italic">
        Əlavə suallarınız üçün müştəri dəstəyi ilə əlaqə saxlayın.
      </p>
    </div>
  );
};

export default Payments;
