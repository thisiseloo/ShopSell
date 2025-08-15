import React from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
  PiNumberCircleFourLight,
} from "react-icons/pi";

const Terms = () => {
  const rules = [
    {
      icon: <PiNumberCircleOneLight className="text-purple-900 w-8 h-8" />,
      title: "Ümumi qaydalar",
      text: "Saytdan istifadə edərək siz ShopSell-in qaydalarına riayət etməyi qəbul edirsiniz.",
    },
    {
      icon: <PiNumberCircleTwoLight className="text-purple-900 w-8 h-8" />,
      title: "Sifariş şərtləri",
      text: "Sifariş yalnız qeydiyyatdan keçmiş istifadəçilər üçün aktivdir. Məhsul seçimi və ödəniş zamanı düzgün məlumat daxil edin.",
    },
    {
      icon: <PiNumberCircleThreeLight className="text-purple-900 w-8 h-8" />,
      title: "Ödəniş şərtləri",
      text: "Ödənişlər yalnız təsdiq olunmuş ödəniş üsulları ilə qəbul edilir. Ödəniş tamamlanmadan sifariş göndərilmir.",
    },
    {
      icon: <PiNumberCircleFourLight className="text-purple-900 w-8 h-8" />,
      title: "Çatdırılma və qaytarma",
      text: "Məhsullar göstərilən ünvana çatdırılır və qaytarma siyasətinə uyğun olaraq geri qaytarıla bilər.",
    },
  ];

  return (
    <div className="max-w-4xl mb-[90px] mx-auto py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-purple-900">
        Qaydalar və Şərtlər
      </h2>

      <p className="mb-8 text-center text-[#290041]/70 text-lg">
        ShopSell-də alış-veriş etməzdən əvvəl saytın qaydaları və şərtləri ilə tanış olun:
      </p>

      <div className="space-y-6">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              {rule.icon}
              <h3 className="text-xl font-semibold text-[#290041]">{rule.title}</h3>
            </div>
            <p className="text-[#290041]/70">{rule.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-[#290041]/70 italic">
        Əlavə suallarınız üçün müştəri dəstəyi ilə əlaqə saxlayın.
      </p>
    </div>
  );
};

export default Terms;
