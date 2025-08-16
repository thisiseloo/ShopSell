import React from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
} from "react-icons/pi";

const Support = () => {
  const steps = [
    {
      icon: (
        <PiNumberCircleOneLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />
      ),
      title: "Əlaqə yolları",
      text: "Bizimlə telefon (+994 55 622 71 01), email və ya sosial şəbəkələr vasitəsilə əlaqə saxlaya bilərsiniz.",
    },
    {
      icon: (
        <PiNumberCircleTwoLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />
      ),
      title: "Sorğu göndərmək",
      text: "Sayt üzərindən sorğu forması dolduraraq hər hansı bir problem və ya sual barədə bizə mesaj göndərin.",
    },
    {
      icon: (
        <PiNumberCircleThreeLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />
      ),
      title: "Dəstək prosesi",
      text: "Sorğunuz daxil olduqdan sonra müştəri dəstək komandamız ən qısa zamanda sizinlə əlaqə saxlayacaq.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:py-16 sm:px-6 mb-[90px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-purple-900">
        Müştəri Dəstəyi
      </h2>

      <p className="mb-6 sm:mb-8 text-center text-[#290041]/70 text-base sm:text-lg">
        ShopSell-də hər zaman sizə dəstək olmağa hazırıq. Aşağıdakı addımlar ilə
        bizimlə əlaqə saxlaya bilərsiniz:
      </p>

      <div className="space-y-4 sm:space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              {step.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-[#290041]">
                {step.title}
              </h3>
            </div>
            <p className="text-[#290041]/70 text-sm sm:text-base">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 sm:mt-10 text-center text-[#290041]/70 italic text-sm sm:text-base">
        Daha sürətli cavab üçün zəhmət olmasa sorğunuzu tam və ətraflı göndərin.
      </p>
    </div>
  );
};

export default Support;
