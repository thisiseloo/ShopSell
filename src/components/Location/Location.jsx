import React from "react";
import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1230px] mx-auto mt-[80px] mb-[80px] px-4 md:px-0 overflow-hidden">
      <div className="mb-6 text-center px-2 md:px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#290041] mb-3 md:mb-4">
          {t("location_title")}
        </h2>
        <p className="text-gray-600 text-base md:text-xl">
          {t("location_address")}
        </p>
      </div>

      <div className="flex w-full mt-[50px] md:h-[500px] rounded-[15px] border-1 border-purple-400 overflow-hidden">
        <div className="hidden md:block w-1/2 h-full">
          <img
            src="/images/location.png"
            alt={t("location_image_alt")}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 h-[300px] md:h-full">
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.123456789!2d49.123456!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d3c1234567%3A0xabcdef1234567890!2sBaku!5e0!3m2!1sen!2saz!4v1690000000000!5m2!1sen!2saz"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
