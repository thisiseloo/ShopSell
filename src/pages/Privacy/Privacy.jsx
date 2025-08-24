import React from "react";
import {
  PiNumberCircleOneLight,
  PiNumberCircleTwoLight,
  PiNumberCircleThreeLight,
} from "react-icons/pi";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  const points = [
    {
      icon: (
        <PiNumberCircleOneLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />
      ),
      title: t("privacy_point1_title"),
      text: t("privacy_point1_text"),
    },
    {
      icon: (
        <PiNumberCircleTwoLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />
      ),
      title: t("privacy_point2_title"),
      text: t("privacy_point2_text"),
    },
    {
      icon: (
        <PiNumberCircleThreeLight className="text-purple-900 w-6 h-6 sm:w-8 sm:h-8" />
      ),
      title: t("privacy_point3_title"),
      text: t("privacy_point3_text"),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:py-16 sm:px-6 mb-[90px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-purple-900">
        {t("privacy_main_title")}
      </h2>

      <p className="mb-6 sm:mb-8 text-center text-[#290041]/70 text-base sm:text-lg">
        {t("privacy_intro")}
      </p>

      <div className="space-y-4 sm:space-y-6">
        {points.map((point, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              {point.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-[#290041]">
                {point.title}
              </h3>
            </div>
            <p className="text-[#290041]/70 text-sm sm:text-base">
              {point.text}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 sm:mt-10 text-center text-[#290041]/70 italic text-sm sm:text-base">
        {t("privacy_footer_note")}
      </p>
    </div>
  );
};

export default Privacy;
