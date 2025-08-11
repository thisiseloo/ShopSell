import React from "react";
import Newsletter from "../NewsLetter/NewsLetter";

const Footer = () => {
  return (
    <div className="relative mt-32">
      {/* Newsletter - yarısı footer-in üstündə */}
      <div className="absolute left-1/2 -top-1/2 transform -translate-x-1/2 max-w-7xl w-full px-4 z-10 h-[190px]">
        <Newsletter />
      </div>

      <footer className="bg-[#1a0029] text-white pt-[120px] relative z-0">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Yardım və Məlumat */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Yardım və Məlumat</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Kömək edin</a>
              </li>
              <li>
                <a href="#">Çatdırılma</a>
              </li>
              <li>
                <a href="#">Sifarişin dəyişdirilməsi</a>
              </li>
              <li>
                <a href="#">Sifarişin qaytarılması</a>
              </li>
            </ul>
          </div>

          {/* Haqqımızda */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Haqqımızda</h3>
            <p className="text-sm text-gray-300">
              Keyfiyyətli ayaqqabı və çantaların ən böyük kolleksiyası. Müştəri
              məmnuniyyəti bizim əsas prioritetimizdir.
            </p>
          </div>

          {/* Çağrı Mərkəzi */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Çağrı Mərkəzi</h3>
            <p className="text-sm text-gray-300">Qaynar xətt: 910</p>
            <p className="text-sm text-gray-300">İş saatları: 09:00 - 12:00</p>
          </div>
        </div>

        {/* Alt yazı */}
        <div className="bg-[#290041] text-center py-4 text-sm text-gray-400">
          2025 ShopSell. Bütün hüquqlar qorunur.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
