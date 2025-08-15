import React, { useRef } from "react";
import PromoOverlay from "../../components/PromoOverlay.jsx/PromoOverlay";
import Categories from "../../components/Categories/Categories";
import Brands from "../../components/Brands/Brands";
import ApproachDesigns from "../../components/ApproachDesigns/ApproachDesigns";
import SocialSection from "../../components/SocialSection/SocialSection";
import Information from "../../components/Information/Information";
import Comments from "../../components/Comments/Comments";
import Shopsell from "../../components/Shopsell/Shopsell";

const Home = () => {
  const categoriesRef = useRef(null);
const scrollToCategories = () => {
  if (categoriesRef.current) {
    categoriesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollBy(0, -155); // navbar hündürlüyü üçün offset
  }
};


  return (
    <div className="overflow-x-hidden">
      <PromoOverlay scrollToCategories={scrollToCategories} />
      <Brands />
      <ApproachDesigns />
      <Categories ref={categoriesRef} />
      <SocialSection />
      <Information />
      <Comments />
      <Shopsell />
    </div>
  );
};

export default Home;
