import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  registerUser,
  loginUser,
  selectCurrentUser,
} from "../../redux/userSlice";

const AuthPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      const success = dispatch(registerUser(formData));
      if (success) {
        alert("Qeydiyyat uğurla tamamlandı! İndi hesabınıza daxil olun.");
        setIsRegister(false);
      } else {
        alert(
          "Qeydiyyat alınmadı. Zəhmət olmasa məlumatları düzgün daxil edin."
        );
      }
    } else {
      const success = dispatch(loginUser(formData));
      if (success) {
        alert("Hesaba uğurla daxil oldunuz!");
        navigate("/");
      } else {
        alert("Email və ya şifrə səhvdir. Yenidən cəhd edin.");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-[30px] md:mb-[100px] min-h-screen bg-[#ebe5e9] px-4 py-8 md:py-12">
      <div className="w-full max-w-[450px] bg-[#ebe5e9] border-1 border-[#aea3b5] shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-[#290041] text-center mb-6">
          {isRegister ? t("authRegisterTitle") : t("authLoginTitle")}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder={t("firstName")}
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
              />
              <input
                type="text"
                name="lastName"
                placeholder={t("lastName")}
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
              />
              <input
                type="number"
                name="age"
                placeholder={t("age")}
                value={formData.age}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
              />
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#614d6c] border-gray-300"
                  />
                  <span>{t("male")}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#614d6c] border-gray-300"
                  />
                  <span>{t("female")}</span>
                </label>
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  className="accent-[#290041]"
                />
                {t("agreeInfo")}
              </label>
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
          />
          <input
            type="password"
            name="password"
            placeholder={t("password")}
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-full border border-[#aea3b5] bg-[#f1eaef] focus:outline-none placeholder-[#614d6c] text-[#290041]"
          />

          <button
            type="submit"
            className="w-full py-2 bg-[#290041] text-white rounded-full font-semibold hover:bg-gray-800 transition"
          >
            {isRegister ? t("register") : t("login")}
          </button>

          <p className="text-center text-sm text-gray-600">
            {isRegister ? t("alreadyHaveAccount") : t("noAccount")}{" "}
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="text-[#7500b9] hover:underline"
            >
              {isRegister ? t("login") : t("register")}
            </button>
          </p>
        </form>
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
