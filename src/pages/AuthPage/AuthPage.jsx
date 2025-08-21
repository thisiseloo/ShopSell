import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AuthPage = () => {
  const { t } = useTranslation();
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-[30px] md:mb-[100px] min-h-screen bg-[#ebe5e9] px-4 py-8 md:py-12">
      <div className="w-full max-w-[450px] bg-[#ebe5e9] border-1 border-[#aea3b5] shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#290041] text-center mb-6">
          {isRegister ? t("authRegisterTitle") : t("authLoginTitle")}
        </h2>

        {isRegister ? (
          <form className="space-y-4">
            <input
              type="text"
              placeholder={t("firstName")}
              className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
            />
            <input
              type="text"
              placeholder={t("lastName")}
              className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
            />
            <input
              type="email"
              placeholder={t("email")}
              className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
            />
            <input
              type="password"
              placeholder={t("password")}
              className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
            />
            <input
              type="number"
              placeholder={t("age")}
              className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
            />

            <div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="w-4 h-4 accent-[#614d6c] border-gray-300"
                  />
                  <span>{t("male")}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="w-4 h-4 accent-[#614d6c] border-gray-300"
                  />
                  <span>{t("female")}</span>
                </label>
              </div>
            </div>

            <hr className="my-6 border-gray-800" />

            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" required className="accent-[#290041]" />
              {t("agreeInfo")}
            </label>

            <button
              type="submit"
              className="w-full py-2 bg-[#290041] text-white rounded-full font-semibold hover:bg-gray-800 transition"
            >
              {t("register")}
            </button>

            <p className="text-center text-sm text-gray-600">
              {t("alreadyHaveAccount")}{" "}
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="text-[#7500b9] hover:underline"
              >
                {t("login")}
              </button>
            </p>

            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-gray-500 text-sm">{t("or")}</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <div className="flex justify-center gap-6 text-2xl">
              <button type="button">
                <img
                  src="/images/google.png"
                  alt="Google"
                  className="w-6 h-6"
                />
              </button>
              <button type="button">
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </button>
              <button type="button">
                <img src="/images/icloud.png" alt="Apple" className="w-6 h-6" />
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-4">
            <input
              type="email"
              placeholder={t("email")}
              className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
            />
            <input
              type="password"
              placeholder={t("password")}
              className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
            />

            <button
              type="submit"
              className="w-full py-2 bg-[#290041] text-white rounded-full font-semibold hover:bg-gray-800 transition"
            >
              {t("login")}
            </button>

            <p className="text-center text-sm text-gray-600">
              {t("noAccount")}{" "}
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="text-[#7500b9] hover:underline"
              >
                {t("register")}
              </button>
            </p>

            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-gray-500 text-sm">{t("or")}</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <div className="flex justify-center gap-6 text-2xl">
              <button type="button">
                <img
                  src="/images/google.png"
                  alt="Google"
                  className="w-6 h-6"
                />
              </button>
              <button type="button">
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </button>
              <button type="button">
                <img src="/images/icloud.png" alt="Apple" className="w-6 h-6" />
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="mt-10 md:mt-0 md:ml-8 flex justify-center items-start w-full max-w-[500px]">
        <img
          src="/images/login.png"
          alt="Illustration"
          className={`w-full ${
            isRegister
              ? "max-w-[350px] md:max-w-[450px] lg:max-w-[470px]"
              : "max-w-[250px] md:max-w-[300px] lg:max-w-[320px]"
          } h-auto object-contain`}
        />
      </div>
    </div>
  );
};

export default AuthPage;


