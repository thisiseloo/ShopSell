import React from "react";

export default function PromoOverlay({ scrollToCategories }) {
  return (
    <div className="relative w-full">
      <img
        src="/images/promo.jpg"
        alt="Promo"
        className="w-full h-[550px] object-cover"
      />

      {/* Overlay mətni */}
      <div
        className="
          absolute top-1/2 left-1/2 
          transform -translate-x-1/2 -translate-y-1/2 
          p-4 sm:p-6
          max-w-[1280px] w-full
          text-left
        "
      >
        {/* Başlıq */}
        <h2 className="text-gray-800 font-extrabold leading-tight text-[45px] max-w-[800px]">
          ÜSLUBUNUZU TAMAMLAYAN <br /> AYAQQABI VƏ ÇANTARI <br />
          KƏŞF EDİN
        </h2>

        {/* Paraqraf */}
        <p className="text-gray-800 mt-3 leading-relaxed text-[18px] max-w-[660px]">
          Zövqünüzə uyğun və fərdiliyinizi ön plana çıxaracaq şəkildə
          hazırlanmış, müxtəlif və incəliklə işlənmiş ayaqqabı və çantalarımızın
          geniş çeşidini nəzərdən keçirin.
        </p>

        {/* Düymə */}
        <div className="mt-3 flex justify-start">
         <button
  onClick={scrollToCategories}
  className="w-[180px] h-[50px] bg-gray-800 text-white text-[18px] rounded-[40px] border-[1px] hover:!text-gray-900 hover:bg-gray-300 hover:border-gray-900 transition"
>
  Alış-veriş edin
</button>

        </div>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap justify-start gap-x-20 gap-y-6 text-left">
          <div className="flex flex-col items-start max-w-[181px]">
            <span className="text-gray-800 font-bold text-[35px]">200+</span>
            <span className="text-gray-800 text-[18px]">Beynəlxalq Brendlər</span>
          </div>
          <div className="flex flex-col items-start max-w-[260px]">
            <span className="text-gray-900 font-bold text-[35px]">2,000+</span>
            <span className="text-gray-900 text-[18px]">Yüksək Keyfiyyətli Məhsullar</span>
          </div>
          <div className="flex flex-col items-start max-w-[174px]">
            <span className="text-gray-900 font-bold text-[35px]">30,000+</span>
            <span className="text-gray-900 text-[18px]">Məmnun Müştərilər</span>
          </div>
        </div>
      </div>
    </div>
  );
}
