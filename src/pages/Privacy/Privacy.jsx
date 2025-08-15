import React from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
} from "react-icons/pi";

const Privacy = () => {
  const points = [
    {
      icon: <PiNumberCircleOneLight className="text-purple-900 w-8 h-8" />,
      title: "Toplanan məlumatlar",
      text: "Sizdən sifariş və ödəniş üçün ad, email, telefon nömrəsi və çatdırılma ünvanı kimi məlumatlar toplanır.",
    },
    {
      icon: <PiNumberCircleTwoLight className="text-purple-900 w-8 h-8" />,
      title: "Məlumatların qorunması",
      text: "Bütün şəxsi məlumatlar şifrələnmiş şəkildə saxlanılır və üçüncü şəxslərlə paylaşılmır.",
    },
    {
      icon: <PiNumberCircleThreeLight className="text-purple-900 w-8 h-8" />,
      title: "Məlumatların istifadəsi",
      text: "Toplanmış məlumatlar yalnız sifarişin icrası, müştəri dəstəyi və sayt təkmilləşdirməsi məqsədilə istifadə olunur.",
    },
  ];

  return (
    <div className="max-w-4xl mb-[90px] mx-auto py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-purple-900">
        Məxfilik Siyasəti
      </h2>

      <p className="mb-8 text-center text-[#290041]/70 text-lg">
        ShopSell-də sizin şəxsi məlumatlarınız bizim üçün önəmlidir. Aşağıda məlumatların toplanması, qorunması və istifadəsi barədə əsas məqamlar verilmişdir:
      </p>

      <div className="space-y-6">
        {points.map((point, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              {point.icon}
              <h3 className="text-xl font-semibold text-[#290041]">{point.title}</h3>
            </div>
            <p className="text-[#290041]/70">{point.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-[#290041]/70 italic">
        Əlavə suallarınız üçün müştəri dəstəyi ilə əlaqə saxlayın.
      </p>
    </div>
  );
};

export default Privacy;
