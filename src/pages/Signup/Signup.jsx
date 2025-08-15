import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateUsername = (username) => /^[a-z0-9._]+$/.test(username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateUsername(name)) {
      setError(
        "İstifadəçi adınız yalnız kiçik hərflər, rəqəmlər, altdan xət (_) və nöqtə (.) ola bilər"
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("Şifrələr uyğun gəlmir");
      return;
    }
    if (password.length < 6) {
      setError("Şifrə ən azı 6 simvol olmalıdır");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Qeydiyyat uğurludur! İndi hesabınıza daxil olun.");
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch {
      setError("Serverə qoşulmaq mümkün olmadı");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 px-4 sm:px-6 md:px-8 mt-[20px] mb-[110px] lg:mt-0 lg:mb-0">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 sm:p-6 md:p-8 rounded shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#1a0029] font-bold mb-5 sm:mb-6 text-center">
          Qeydiyyat
        </h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded text-xs sm:text-sm md:text-base">
            {error}
          </div>
        )}

        <label className="block mb-2 font-semibold text-xs text-[#1a0029] sm:text-sm md:text-base">
          İstifadəçi adınız
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 sm:p-2.5 md:p-3 border border-gray-300 rounded mb-4 text-xs sm:text-sm md:text-base"
          placeholder="Adınızı daxil edin"
        />

        <label className="block mb-2 font-semibold text-xs text-[#1a0029] sm:text-sm md:text-base">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 sm:p-2.5 md:p-3 border border-gray-300 rounded mb-4 text-xs sm:text-sm md:text-base"
          placeholder="Emailinizi daxil edin"
        />

        <label className="block mb-2 font-semibold text-xs text-[#1a0029] sm:text-sm md:text-base">
          Şifrə
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 sm:p-2.5 md:p-3 border border-gray-300 rounded mb-4 text-xs sm:text-sm md:text-base"
          placeholder="Şifrənizi daxil edin"
        />

        <label className="block mb-2 font-semibold text-xs text-[#1a0029] sm:text-sm md:text-base">
          Şifrəni təkrar edin
        </label>
        <input
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 sm:p-2.5 md:p-3 border border-gray-300 rounded mb-6 text-xs sm:text-sm md:text-base"
          placeholder="Şifrənizi yenidən daxil edin"
        />

        <button
          type="submit"
          className="w-full bg-[#290041] text-white py-2 sm:py-2.5 md:py-3 rounded hover:bg-[#290041]/80 transition text-xs sm:text-sm md:text-base"
        >
          Qeydiyyatdan keç
        </button>

        <p className="mt-4 text-center  text-[#1a0029]/80 text-xs sm:text-sm md:text-base">
          Artıq hesabınız var?{" "}
          <Link to="/login" className="text-pink-700 hover:underline">
            Daxil olun
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
