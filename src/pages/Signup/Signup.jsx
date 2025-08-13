import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

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
        setError(data.message || "Qeydiyyat zamanı xəta baş verdi");
      }
    } catch {
      setError("Serverə qoşulmaq mümkün olmadı");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-lg sm:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Qeydiyyat</h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded text-sm sm:text-base">
            {error}
          </div>
        )}
        <label className="block mb-2 font-semibold text-sm sm:text-base">Adınız</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 text-sm sm:text-base"
          placeholder="Adınızı daxil edin"
        />
        <label className="block mb-2 font-semibold text-sm sm:text-base">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 text-sm sm:text-base"
          placeholder="Emailinizi daxil edin"
        />
        <label className="block mb-2 font-semibold text-sm sm:text-base">Şifrə</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-6 text-sm sm:text-base"
          placeholder="Şifrənizi daxil edin"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-sm sm:text-base"
        >
          Qeydiyyatdan keç
        </button>
        <p className="mt-4 text-center text-gray-600 text-sm sm:text-base">
          Artıq hesabınız var?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Daxil olun
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
