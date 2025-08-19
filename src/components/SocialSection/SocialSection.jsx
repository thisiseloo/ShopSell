import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./SocialSection.css";

const images = [
  "https://i.pinimg.com/1200x/f4/f5/c9/f4f5c92cf3fe165f925bdff121862a81.jpg",
  "https://i.pinimg.com/1200x/29/3b/b8/293bb86a682d796dcf5fde3d91303822.jpg",
  "https://i.pinimg.com/1200x/a2/3a/eb/a23aebb70290bab7d6826fcd64075ec0.jpg",
];

const socialData = [
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/senin_səhifən",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/senin_səhifən",
  },
  {
    icon: FaTwitter,
    link: "https://www.twitter.com/senin_səhifən",
  },
];

const SocialSection = () => {
  const { t } = useTranslation();

  return (
    <div className="social-section">
      <h2 className="text-[#1a0029]">{t("socialTitle")}</h2>
      <p className="socialText text-[#1a0029]/80">{t("socialDescription")}</p>

      <div className="image-gallery">
        {images.map((src, index) => {
          const IconComponent = socialData[index].icon;
          const link = socialData[index].link;

          return (
            <div className="image-card" key={index}>
              <img src={src} alt={`social-${index}`} className="gallery-img" />

              <div className="overlay">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <IconComponent className="social-icon" />
                </a>
                <p className="overlay-text">{t("socialOverlayText")}</p>
                <div className="underline"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialSection;
