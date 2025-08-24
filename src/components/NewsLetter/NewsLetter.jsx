import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewsLetter.css";
import { useTranslation } from "react-i18next";

function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert(t("newsletter_email_required"));
      return;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      alert(t("newsletter_email_invalid"));
      return;
    }
    alert(t("newsletter_email_success", { email }));
    setEmail("");
  };

  return (
    <div className="newsletter-section bg-[#290041] text-white rounded-[30px] p-8 shadow-lg">
      <div className="container-fluid px-0">
        <div className="row align-items-center mx-0">
          <div className="col-lg-7 col-md-6 mb-4 mb-md-0 ps-3">
            <div
              style={{ fontFamily: "'Noto Serif', serif", fontWeight: 800 }}
              className="newsletter-title text-white text-[30px] sm:text-[45px]"
            >
              {t("newsletter_title")}
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column gap-2 pe-3"
            >
              <div className="input-group custom-input">
                <span className="input-group-text bg-secondary text-white border-0">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder={t("newsletter_placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-light custom-btn w-100 hover:bg-gray-200 hover:text-[#290041] transition"
              >
                {t("newsletter_button")}
              </button>
            </form>
            <p className="text-secondary mt-2 text-end pe-3 mb-0">
              {t("newsletter_text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
