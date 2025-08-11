// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await fetch("/api/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Qeydiyyat uğurludur! İndi hesabınıza daxil olun.");
//         navigate("/login");
//       } else {
//         setError(data.message || "Qeydiyyat zamanı xəta baş verdi");
//       }
//     } catch (err) {
//       setError("Server ilə əlaqə qurulmadı");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Qeydiyyat</h2>

//         {error && (
//           <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
//         )}

//         <label className="block mb-2 font-semibold">Adınız</label>
//         <input
//           type="text"
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           placeholder="Adınızı daxil edin"
//         />

//         <label className="block mb-2 font-semibold">Email</label>
//         <input
//           type="email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           placeholder="Emailinizi daxil edin"
//         />

//         <label className="block mb-2 font-semibold">Şifrə</label>
//         <input
//           type="password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-6"
//           placeholder="Şifrənizi daxil edin"
//         />

//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
//         >
//           Qeydiyyatdan keç
//         </button>

//         <p className="mt-4 text-center text-gray-600">
//           Artıq hesabınız var?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Daxil olun
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;

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
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Qeydiyyat</h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {error}
          </div>
        )}
        <label className="block mb-2 font-semibold">Adınız</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Adınızı daxil edin"
        />
        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Emailinizi daxil edin"
        />
        <label className="block mb-2 font-semibold">Şifrə</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-6"
          placeholder="Şifrənizi daxil edin"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Qeydiyyatdan keç
        </button>
        <p className="mt-4 text-center text-gray-600">
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
