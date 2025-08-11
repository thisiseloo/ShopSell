import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Shopsell from "../../components/Shopsell/Shopsell";
import Brands from "../../components/Brands/Brands";
import ApproachDesigns from "../../components/ApproachDesigns/ApproachDesigns";
import SocialSection from "../../components/SocialSection/SocialSection";
import Information from "../../components/Information/Information";
import PromoOverlay from "../../components/PromoOverlay.jsx/PromoOverlay";

const Home = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const categoriesRef = useRef(null);

  // 80px yuxarı offset ilə scroll
  const scrollToCategories = () => {
    if (categoriesRef.current) {
      const yOffset = -155;
      const y =
        categoriesRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleClick = () => {
    navigate("/fashion-history");
  };

  return (
    <div>
      <PromoOverlay scrollToCategories={scrollToCategories} />
      <Brands />
      <ApproachDesigns />

      <Categories ref={categoriesRef} />

      {/* <Brands /> */}

      <SocialSection />
      <Information />
      <div
        style={{
          textAlign: "center",
          padding: "100px 0",
          background: "#e5e7eb",
        }}
      >
        <h2
          style={{ fontSize: "36px", marginBottom: "10px", fontWeight: "600" }}
        >
          🧵 Moda Tarixinə Səyahət
        </h2>
        <p style={{ fontSize: "18px", color: "#555", marginBottom: "30px" }}>
          Keçmişin izlərini stilinlə kəşf et! <br /> Tarixi ayaqqabılar və
          çantalar haqqında maraqlı faktlar üçün tıkla.
        </p>

        <div
          onClick={handleClick}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          style={{
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.03)" : "scale(1)",
          }}
        >
          <img
            src="images/filmStips.jpg"
            alt="Moda Tarixi"
            style={{
              width: "910px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "15px",
              filter: isHovered ? "brightness(70%)" : "brightness(100%)",
              transition: "filter 0.3s ease",
            }}
          />
          <button
            style={{
              position: "absolute",
              bottom: "15px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "10px 25px",
              backgroundColor: "#ffffff00",
              border: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              marginBottom: "100px",
              fontSize: "35px",
              color: "#f2f2f2",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Səyahət et
          </button>
        </div>
      </div>
      <Shopsell />
    </div>
  );
};

export default Home;
