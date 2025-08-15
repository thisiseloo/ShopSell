import React from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
} from "react-icons/pi";

const Shipping = () => {
  const steps = [
    {
      icon: <PiNumberCircleOneLight className="text-purple-900 w-8 h-8" />,
      title: "Sifarişi tamamlayın",
      text: "Seçilmiş məhsulları səbətinizə əlavə edin və ödənişi tamamlayın.",
    },
    {
      icon: <PiNumberCircleTwoLight className="text-purple-900 w-8 h-8" />,
      title: "Sifariş təsdiqi",
      text: "Ödəniş tamamlandıqdan sonra sizə email və ya SMS vasitəsilə təsdiq göndərilir.",
    },
    {
      icon: <PiNumberCircleThreeLight className="text-purple-900 w-8 h-8" />,
      title: "Çatdırılma",
      text: "Məhsul 1-3 iş günü ərzində Bakıya, digər bölgələrə isə 3-7 iş günü ərzində çatdırılır.",
    },
  ];

  return (
    <div className="max-w-4xl mb-[90px] mx-auto py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-purple-900">
        Sifariş və Çatdırılma Prosesi
      </h2>

      <p className="mb-8 text-center text-[#290041]/70 text-lg">
        ShopSell-də sifarişlərin çatdırılması prosesi sadə və rahatdır. Aşağıdakı addımları izləyin:
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

export default Shipping;
