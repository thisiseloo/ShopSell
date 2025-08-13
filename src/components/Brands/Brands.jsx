import React, { useRef, useState } from "react";
import "./Brands.css";

const logos = [
  "https://www.step.org.uk/app/uploads/2018/07/Puma-logo-PNG-Transparent-Background.png",
  "https://images.seeklogo.com/logo-png/16/1/adidas-logo-png_seeklogo-168370.png",
  "https://images.seeklogo.com/logo-png/6/1/gucci-logo-png_seeklogo-64069.png",
  "https://images.seeklogo.com/logo-png/28/1/chanel-logo-png_seeklogo-284915.png",
  "https://images.seeklogo.com/logo-png/4/1/dior-logo-png_seeklogo-41696.png",
  "https://images.seeklogo.com/logo-png/5/1/fendi-logo-png_seeklogo-53637.png",
  "https://images.seeklogo.com/logo-png/2/1/calvin-klein-logo-png_seeklogo-25076.png",
  "https://images.seeklogo.com/logo-png/9/1/nike-logo-png_seeklogo-99478.png",
  "https://images.seeklogo.com/logo-png/36/1/balenciaga-logo-png_seeklogo-365962.png",
  "https://images.seeklogo.com/logo-png/22/1/aldo-logo-png_seeklogo-220999.png",
  "https://images.seeklogo.com/logo-png/32/1/christian-louboutin-logo-png_seeklogo-320816.png",
  "https://images.seeklogo.com/logo-png/11/1/prada-logo-png_seeklogo-111420.png",
  "https://images.seeklogo.com/logo-png/40/1/kinetix-logo-png_seeklogo-405573.png",
  "https://images.seeklogo.com/logo-png/6/1/hermes-logo-png_seeklogo-66470.png",
  "https://images.seeklogo.com/logo-png/10/1/penti-logo-png_seeklogo-107424.png",
  "https://images.seeklogo.com/logo-png/22/2/guess-logo-png_seeklogo-221179.png",
  "https://images.seeklogo.com/logo-png/32/1/u-s-polo-assn-logo-png_seeklogo-321597.png",
  "https://images.seeklogo.com/logo-png/30/1/skechers-logo-png_seeklogo-304785.png",
  "https://images.seeklogo.com/logo-png/28/1/tommy-hilfiger-logo-png_seeklogo-289081.png",
  "https://images.seeklogo.com/logo-png/16/1/lacoste-logo-png_seeklogo-168453.png",
  "https://images.seeklogo.com/logo-png/6/1/greyder-logo-png_seeklogo-63404.png",
];

function Brands() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="slider-container">
      <div
        className="logo-slider"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
      >
        {logos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
