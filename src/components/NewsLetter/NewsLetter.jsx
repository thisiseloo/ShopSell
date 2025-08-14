import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewsLetter.css";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Zəhmət olmasa e-mail daxil edin.");
      return;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      alert("Düzgün e-mail daxil edin.");
      return;
    }
    alert(`Təşəkkürlər! Bülletenə abunə oldunuz — ${email}`);
    setEmail("");
  };

  return (
    <div className="newsletter-section bg-[#290041] text-white rounded-[30px] p-9 shadow-lg">
      <div className="container-fluid px-0">
        <div className="row align-items-center mx-0">
          {/* Sol tərəf */}
          <div className="col-lg-7 col-md-6 mb-4 mb-md-0 ps-3">
            <h1
              className="newsletter-title text-uppercase fw-bold display-5"
              style={{ fontSize: "40px", lineHeight: "1.2" }}
            >
              Ən son təkliflərimizdən
              <br />
              xəbərdar olun
            </h1>
          </div>

          {/* Sağ tərəf */}
          <div className="col-lg-5 col-md-6">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 pe-3">
              <div className="input-group custom-input">
                <span className="input-group-text bg-secondary text-white border-0">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-poçt ünvanınızı daxil edin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-outline-light custom-btn w-100">
                Abunə ol
              </button>
            </form>
            <p className="text-secondary mt-2 text-end pe-3 mb-0">
              Bülletenə abunə olun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;



