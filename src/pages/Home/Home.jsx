import React, { useRef } from "react";
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

  return (
    <div>
      <PromoOverlay scrollToCategories={scrollToCategories} />
      <Brands />
      <ApproachDesigns />
      <Categories ref={categoriesRef} />
      <SocialSection />
      <Information />
      <Shopsell />
    </div>
  );
};

export default Home;
