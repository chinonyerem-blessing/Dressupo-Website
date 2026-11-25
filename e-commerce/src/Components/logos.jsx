// Import React and useState
import React, { useState } from 'react';

// Import logo images
import img1 from "../images/logo1.png";
import img2 from "../images/logo2.png";
import img3 from "../images/logo9.png";
import img4 from "../images/logo4.png";
import img5 from "../images/logo5.png";
import img6 from "../images/logo6.png";
import img7 from "../images/logo7.png";
import img8 from "../images/logo8.png";

// Import arrow icons
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Logos() {
  // Store all logo images in an array
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
  ];

  // Track the starting position of the images
  const [startIndex, setStartIndex] = useState(0);

  // Number of images to display at once
  const visibleCount = 4;

  // Move to the next set of images
  const handleNext = () => {
    if (startIndex + visibleCount < images.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  // Move to the previous set of images
  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  return ( 
    <div>
      <div className='divider'>
        <hr data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" />
      </div>

      <div>
        <div className="logos">
          {/* Previous button */}
          <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={handlePrev} disabled={startIndex === 0}><MdKeyboardArrowLeft /></button>

          {/* Display four images at a time */}
          {images.slice(startIndex, startIndex + visibleCount).map((src, index) => (
            <img className='myImag' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" key={index} src={src} alt={`img-${index}`} />))}

          {/* Next button */}
          <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" onClick={handleNext} disabled={startIndex + visibleCount >= images.length}><MdKeyboardArrowRight /></button>
        </div>
      </div>

      <div className='divider'>
        <hr data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" />
      </div>

    </div>
  );
};

export default Logos;