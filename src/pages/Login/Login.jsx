import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setError(data.message || "Email/İstifadəçi adı və ya şifrə səhvdir");
      }
    } catch {
      setError("Serverə qoşulmaq mümkün olmadı");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-gray-200 
                    px-4 sm:px-6 md:px-8
                    mt-[20px] mb-[110px] lg:mt-0 lg:mb-0"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 sm:p-6 md:p-8 rounded shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-5 sm:mb-6 text-center">
          Hesaba giriş
        </h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded text-xs sm:text-sm md:text-base">
            {error}
          </div>
        )}
        <label className="block mb-2 font-semibold text-xs sm:text-sm md:text-base">
          Email və ya İstifadəçi adı
        </label>
        <input
          type="text"
          required
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full p-2 sm:p-2.5 md:p-3 border border-gray-300 rounded mb-4 text-xs sm:text-sm md:text-base"
          placeholder="Emailinizi və ya istifadəçi adınızı daxil edin"
        />
        <label className="block mb-2 font-semibold text-xs sm:text-sm md:text-base">
          Şifrə
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 sm:p-2.5 md:p-3 border border-gray-300 rounded mb-6 text-xs sm:text-sm md:text-base"
          placeholder="Şifrənizi daxil edin"
        />
        <button
          type="submit"
          className="w-full bg-[#290041] text-white py-2 sm:py-2.5 md:py-3 rounded hover:bg-[#290041]/80 transition text-xs sm:text-sm md:text-base"
        >
          Daxil ol
        </button>
        <p className="mt-4 text-center text-gray-600 text-xs sm:text-sm md:text-base">
          Hesabınız yoxdur?{" "}
          <Link to="/signup" className="text-pink-700 hover:underline">
            Qeydiyyatdan keçin
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;



