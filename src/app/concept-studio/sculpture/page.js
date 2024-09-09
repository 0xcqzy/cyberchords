"use client";
import { useState } from 'react';
import Image from 'next/image';
import style from '../section.module.css';
import Nav from '@/app/components/Nav';

const imgUrl = [
  "https://ik.imagekit.io/0xcqzy/cyberchords/_History%20Pixelates%20Us_%20Prod....jpg?updatedAt=1725823629398",
  "https://ik.imagekit.io/0xcqzy/cyberchords/A%20blender%20made%20hand..jpg?updatedAt=1725823627684",
  "https://ik.imagekit.io/0xcqzy/cyberchords/A%20blender%20made%20statue.Thank....jpg?updatedAt=1725823626628",
  "https://ik.imagekit.io/0xcqzy/cyberchords/A%20blender%20made%20scene.%20Thank....jpg?updatedAt=1725823627300",
]


const Sculpture = () => {
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
        <div className={style.primaryText}>Sculpture</div>
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

export default Sculpture;

