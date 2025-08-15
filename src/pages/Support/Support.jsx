import React from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
} from "react-icons/pi";

const Support = () => {
  const steps = [
    {
      icon: <PiNumberCircleOneLight className="text-purple-900 w-8 h-8" />,
      title: "Əlaqə yolları",
      text: "Bizimlə telefon (+994 55 622 71 01), email və ya sosial şəbəkələr vasitəsilə əlaqə saxlaya bilərsiniz.",
    },
    {
      icon: <PiNumberCircleTwoLight className="text-purple-900 w-8 h-8" />,
      title: "Sorğu göndərmək",
      text: "Sayt üzərindən sorğu forması dolduraraq hər hansı bir problem və ya sual barədə bizə mesaj göndərin.",
    },
    {
      icon: <PiNumberCircleThreeLight className="text-purple-900 w-8 h-8" />,
      title: "Dəstək prosesi",
      text: "Sorğunuz daxil olduqdan sonra müştəri dəstək komandamız ən qısa zamanda sizinlə əlaqə saxlayacaq.",
    },
  ];

  return (
    <div className="max-w-4xl mb-[90px] mx-auto py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-purple-900">
        Müştəri Dəstəyi
      </h2>

      <p className="mb-8 text-center text-[#290041]/70 text-lg">
        ShopSell-də hər zaman sizə dəstək olmağa hazırıq. Aşağıdakı addımlar ilə bizimlə əlaqə saxlaya bilərsiniz:
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
        Daha sürətli cavab üçün zəhmət olmasa sorğunuzu tam və ətraflı göndərin.
      </p>
    </div>
  );
};

export default Support;
