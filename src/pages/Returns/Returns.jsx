import React from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
  PiNumberCircleFourLight,
} from "react-icons/pi";

const Returns = () => {
  const steps = [
    {
      icon: <PiNumberCircleOneLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Məhsulu hazırlayın",
      text: "Məhsulu istifadə etməmiş və orijinal qablaşdırmada saxlayın. Sifariş qəbzini məhsul qutusunun içərisinə qoyun.",
    },
    {
      icon: <PiNumberCircleTwoLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Bizimlə əlaqə saxlayın",
      text: "Qaytarma üçün +994 55 622 71 01 nömrəsi ilə əlaqə saxlayın və ya sosial şəbəkələrimiz vasitəsilə mesaj göndərin.",
    },
    {
      icon: <PiNumberCircleThreeLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Məhsulu göndərin",
      text: "Məhsulu göstərilən ünvana göndərin və ya kuryer vasitəsilə təhvil verin.",
    },
    {
      icon: <PiNumberCircleFourLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Ödənişin geri qaytarılması",
      text: "Qaytarılan məhsul təsdiqləndikdən sonra ödənişiniz 3-5 iş günü ərzində kart hesabınıza oturacaq.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:py-16 sm:px-6 mb-[90px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-purple-900">
        Məhsul Qaytarma Prosesi
      </h2>

      <p className="mb-6 sm:mb-8 text-center text-[#290041]/70 text-base sm:text-lg">
        ShopSell-də sifarişlərin qaytarılması prosesi sadə və rahatdır. Məhsulu
        qaytarmaq üçün aşağıdakı addımlara əməl etməyinizi xahiş edirik.
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

export default Returns;
