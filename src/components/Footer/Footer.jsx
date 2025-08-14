import React from "react";
import Newsletter from "../NewsLetter/NewsLetter";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative">
      {/* Newsletter */}
      <div className="newsletter-overlap">
        <Newsletter />
      </div>

      <footer className="bg-[#1a0029] text-white pt-[180px] relative z-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-16 pb-8">
          {/* Sol - ShopSell */}
          <div className="sm:w-1/3">
            <img
              src="/images/Shopsell.png"
              alt="ShopSell Logo"
              className="w-28 sm:w-34"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Zövqünüzə uyğun olan və istifadə etməkdən qürur duyacağınız həm
              qadın, həm kişi, həm də uşaq üçün ayaqqabı və çantalarımız
              mövcuddur.
            </p>
          </div>

          {/* Sağ - Üç sütun birlikdə */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:w-2/3">
            {/* Məlumat və qaydalar */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Məlumat və Qaydalar
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="#"
                  className="text-gray-100 no-underline hover:underline hover:text-gray-200"
                >
                  Müştəri dəstəyi
                </a>
                <a
                  href="#"
                  className="text-gray-100 no-underline hover:underline hover:text-gray-200"
                >
                  Qaydalar və Şərtlər
                </a>
                <a
                  href="#"
                  className="text-gray-100 no-underline hover:underline hover:text-gray-200"
                >
                  Məxfilik siyasəti
                </a>
                <a
                  href="#"
                  className="text-gray-100 no-underline hover:underline hover:text-gray-200"
                >
                  Sifariş və Çatdırılma
                </a>
                <a
                  href="#"
                  className="text-gray-100 no-underline hover:underline hover:text-gray-200"
                >
                  Qaytarmalar
                </a>
              </div>
            </div>

            {/* Əlavə məlumat */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Əlavə Məlumat</h3>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="#"
                  className="text-gray-100 no-underline hover:underline hover:text-gray-200"
                >
                  Tez-tez verilən suallar
                </a>
                <a
                  href="#"
                  className="text-gray-100 no-underline hover:underline hover:text-gray-200"
                >
                  Ödənişlər
                </a>
                <span className="text-gray-100">
                  İş saatları: 09:00 - 12:00
                </span>
              </div>
            </div>

            {/* Sosial media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Bizimlə əlaqə saxlayın
              </h3>
              <div className="flex items-center gap-3 text-2xl">
                <a
                  href="#"
                  className="text-white hover:text-gray-200 no-underline"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 no-underline"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 no-underline"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-200 no-underline"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Alt yazı */}
        <div className="bg-[#290041] text-center py-4 text-sm text-gray-400">
          © 2025 ShopSell. Bütün hüquqlar qorunur. shopsell.az, Bakı şəhəri,
          Nizami rayonu, Bəhruz Nuriyev küçəsi 529
        </div>
      </footer>
    </div>
  );
};

export default Footer;


