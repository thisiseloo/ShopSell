import React from "react";
import { useTranslation } from "react-i18next";

export default function PromoOverlay({ scrollToCategories }) {
  const { t } = useTranslation();

  return (
    <div className="relative bg-[#D4D2D3] w-full pt-[50px] sm:pt-0">
      <img
        src="/images/promo.jpg"
        alt="Promo"
        className="w-full h-[700px] sm:h-[550px] object-cover"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 sm:p-6 max-w-[1280px] w-full text-left">
        <h2
          className="text-[#1a0029] font-extrabold leading-tight text-[30px] sm:text-[45px] max-w-[800px]"
          dangerouslySetInnerHTML={{ __html: t("promo_title") }}
        />

        <p className="text-[#1a0029] mt-3 leading-relaxed text-[14px] sm:text-[18px] max-w-[660px]">
          {t("promo_desc")}
        </p>

        <div className="mt-3 flex justify-start">
          <button
            onClick={scrollToCategories}
            className="w-[150px] h-[40px] sm:w-[180px] sm:h-[50px] 
             bg-[#1a0029] text-white border border-transparent rounded-[50px] 
             hover:bg-gray-300 hover:!text-[#1a0029] hover:!border-[#1a0029] 
             transition-colors duration-300"
          >
            {t("shop_now")}
          </button>
        </div>

        <div className="mt-10 flex flex-wrap justify-start gap-x-20 gap-y-6 text-left">
          <div className="flex flex-col items-start max-w-[181px]">
            <span className="text-[#1a0029] font-bold text-[30px] sm:text-[35px]">
              200+
            </span>
            <span className="text-[#1a0029] text-[14px] sm:text-[18px]">
              {t("brands")}
            </span>
          </div>
          <div className="flex flex-col items-start max-w-[260px]">
            <span className="text-[#1a0029] font-bold text-[30px] sm:text-[35px]">
              2,000+
            </span>
            <span className="text-[#1a0029] text-[14px] sm:text-[18px]">
              {t("quality_products")}
            </span>
          </div>
          <div className="flex flex-col items-start max-w-[174px]">
            <span className="text-[#1a0029] font-bold text-[30px] sm:text-[35px]">
              30,000+
            </span>
            <span className="text-[#1a0029] text-[14px] sm:text-[18px]">
              {t("happy_customers")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
