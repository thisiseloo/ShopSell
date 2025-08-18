import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col md:flex-row pb-[90px]">
      <div className="hidden md:flex w-1/2 bg-pink-50 items-center justify-center">
        <img
          src="/images/form.svg"
          alt="Auth illustration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gray-200 p-8 md:p-16">
        <h2 className="text-3xl font-bold mb-6 text-[#290041] text-center">
          {isLogin ? "Daxil ol" : "Qeydiyyatdan keç"}
        </h2>

        <form className="w-full max-w-sm space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Ad Soyad"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            placeholder="Şifrə"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button
            type="submit"
            className="w-full bg-[#290041] text-white py-2 rounded-lg hover:bg-pink-400 hover:text-[#290041] transition"
          >
            {isLogin ? "Daxil ol" : "Qeydiyyatdan keç"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          {isLogin ? "Hesabın yoxdur?" : "Artıq hesabın var?"}{" "}
          <button
            className="text-pink-500 font-semibold"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Qeydiyyatdan keç" : "Daxil ol"}
          </button>
        </p>
      </div>
    </div>
  );
}
