import React from "react";
import Newsletter from "../NewsLetter/NewsLetter";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="newsletter-overlap">
        <Newsletter />
      </div>

      <footer className="bg-[#1a0029] text-white pt-[180px] relative z-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-16 pb-8">
          <div className="sm:w-1/3 text-center sm:text-left">
            <h2
              className="text-4xl font-bold text-[#E8BBF5]"
              style={{
                fontFamily: '"Rubik Puddles", system-ui',
                fontWeight: 600,
                fontStyle: "normal",
              }}
            >
              Shop<span className="text-[#dbd2dd] text-2xl">Sell</span>
            </h2>

            <p className="text-sm text-gray-100 leading-relaxed mt-3">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:w-2/3">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("info_title")}</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/support" className="text-gray-100 hover:underline">
                  {t("support")}
                </Link>
                <Link to="/terms" className="text-gray-100 hover:underline">
                  {t("terms")}
                </Link>
                <Link to="/privacy" className="text-gray-100 hover:underline">
                  {t("privacy")}
                </Link>
                <Link to="/shipping" className="text-gray-100 hover:underline">
                  {t("shipping")}
                </Link>
                <Link to="/returns" className="text-gray-100 hover:underline">
                  {t("returns")}
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t("extra_title")}</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/faq" className="text-gray-100 hover:underline">
                  {t("faq")}
                </Link>
                <Link to="/payments" className="text-gray-100 hover:underline">
                  {t("payments")}
                </Link>
                <span className="text-gray-100">{t("work_hours")}</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t("contact_title")}
              </h3>
              <p className="text-white text-sm mt-3">{t("contact_phone")}</p>
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
          {t("copyright")}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
