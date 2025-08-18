import React from "react";
import Newsletter from "../NewsLetter/NewsLetter";
import { Link } from "react-router-dom";
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
      <div className="newsletter-overlap">
        <Newsletter />
      </div>

      <footer className="bg-[#1a0029] text-white pt-[180px] relative z-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-16 pb-8">
          <div className="sm:w-1/3 text-center sm:text-left">
            <img
              src="/images/shopsell_logo.png"
              alt="ShopSell Logo"
              className="w-28 sm:w-34 mx-auto sm:mx-0"
            />
            <p className="text-sm text-gray-100 leading-relaxed mt-2">
              Zövqünüzə uyğun olan və istifadə etməkdən qürur duyacağınız həm
              qadın, həm kişi, həm də uşaq üçün ayaqqabı və çantalarımız
              mövcuddur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:w-2/3">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Məlumat və Qaydalar
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/support" className="text-gray-100 hover:underline">
                  Müştəri dəstəyi
                </Link>
                <Link to="/terms" className="text-gray-100 hover:underline">
                  Qaydalar və Şərtlər
                </Link>
                <Link to="/privacy" className="text-gray-100 hover:underline">
                  Məxfilik siyasəti
                </Link>
                <Link to="/shipping" className="text-gray-100 hover:underline">
                  Sifariş və Çatdırılma
                </Link>
                <Link to="/returns" className="text-gray-100 hover:underline">
                  Qaytarmalar
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Əlavə Məlumat</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/faq" className="text-gray-100 hover:underline">
                  Tez-tez verilən suallar
                </Link>
                <Link to="/payments" className="text-gray-100 hover:underline">
                  Ödənişlər
                </Link>
                <span className="text-gray-100">
                  İş saatları: 09:00 - 22:00
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Bizimlə əlaqə saxlayın
              </h3>
              <p className="text-white text-sm mt-3">
                Əlaqə: +994 55 622 71 01
              </p>
              <div className="flex items-center gap-3 justify-center sm:justify-start mt-[10px] mb-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 w-7 h-7 flex items-center justify-center text-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 w-7 h-7 flex items-center justify-center text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 w-7 h-7 flex items-center justify-center text-xl"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 w-7 h-7 flex items-center justify-center text-xl"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#290041] text-center py-4 text-sm text-gray-300">
          © 2025 ShopSell. Bütün hüquqlar qorunur. shopsell.az, Bakı şəhəri,
          Nizami rayonu, Bəhruz Nuriyev küçəsi 529
        </div>
      </footer>
    </div>
  );
};

export default Footer;
