import React from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
} from "react-icons/pi";

const Shipping = () => {
  const steps = [
    {
      icon: <PiNumberCircleOneLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Sifarişi tamamlayın",
      text: "Seçilmiş məhsulları səbətinizə əlavə edin və ödənişi tamamlayın.",
    },
    {
      icon: <PiNumberCircleTwoLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Sifariş təsdiqi",
      text: "Ödəniş tamamlandıqdan sonra sizə email və ya SMS vasitəsilə təsdiq göndərilir.",
    },
    {
      icon: <PiNumberCircleThreeLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Çatdırılma",
      text: "Məhsul 1-3 iş günü ərzində Bakıya, digər bölgələrə isə 3-7 iş günü ərzində çatdırılır.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:py-16 sm:px-6 mb-[90px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-purple-900">
        Sifariş və Çatdırılma Prosesi
      </h2>

      <p className="mb-6 sm:mb-8 text-center text-[#290041]/70 text-base sm:text-lg">
        ShopSell-də sifarişlərin çatdırılması prosesi sadə və rahatdır. Aşağıdakı addımları izləyin:
      </p>

      <div className="space-y-4 sm:space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              {step.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-[#290041]">{step.title}</h3>
            </div>
            <p className="text-[#290041]/70 text-sm sm:text-base">{step.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 sm:mt-10 text-center text-[#290041]/70 italic text-sm sm:text-base">
        Əlavə suallarınız üçün müştəri dəstəyi ilə əlaqə saxlayın.
      </p>
    </div>
  );
};

export default Shipping;
