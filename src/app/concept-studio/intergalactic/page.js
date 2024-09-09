"use client";
import { useState } from 'react';
import Image from 'next/image';
import style from '../section.module.css';
import Nav from '@/app/components/Nav';

const imgUrl = [
  "https://ik.imagekit.io/0xcqzy/cyberchords/NGC%207714%20Caption:%20This%20NASA....jpg?updatedAt=1725819890616",
  "https://ik.imagekit.io/0xcqzy/cyberchords/Galaxy%20NGC%201427A%20Plunges%20To....jpg?updatedAt=1725819891976",
  "https://ik.imagekit.io/0xcqzy/cyberchords/My%20photo%20of%20the%20Orion%20Nebul....jpg?updatedAt=1725819892493",
  "https://ik.imagekit.io/0xcqzy/cyberchords/UGC%205340%20Credits%20NASA,%20ESA,....jpg?updatedAt=1725819893696",
  "https://ik.imagekit.io/0xcqzy/cyberchords/NGC%203627%20Credits%20NASA,%20ESA,....jpg?updatedAt=1725819894810",


]


const Intergalactic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgUrl.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Nav></Nav>
      <div className={style.main}>
      <div className={style.primaryText}>Intergalactic</div>
      <div className={style.sliderContainer}>
        <div className={style.arrow} onClick={prevImage}>
          &#60;
        </div>
        <div className={style.imageWrapper}>
          <Image
            src={imgUrl[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={style.arrow} onClick={nextImage}>
          &#62;
        </div>
      </div>
      </div>
    </>
  );
};

export default Intergalactic;
