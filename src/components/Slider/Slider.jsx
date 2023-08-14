// Slider.js
import { imageDetails } from "../../datas/picturesData";
import { useState, useEffect } from "react";
import { BackgroundImage, ImageSlider } from "./Slider.styled";

function Slider() {
  const [activeImage, setActiveImage] = useState(0);

  // On mount and on every change of activeImage, schedule next image
  useEffect(() => {
    const next = (activeImage + 1) % imageDetails.length;
    const id = setTimeout(() => setActiveImage(next), 5000);
    return () => clearTimeout(id); // Clean up on unmount
  }, [activeImage]);

  return (
    <BackgroundImage>
      {imageDetails.map((image, index) => (
        <ImageSlider
          key={index}
          className={`image-slider ${activeImage === index ? "active" : ""}`}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </BackgroundImage>
  );
}

export default Slider;
