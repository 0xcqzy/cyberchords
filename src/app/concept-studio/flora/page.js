"use client";
import { useState } from 'react';
import Image from 'next/image';
import style from '../section.module.css';
import Nav from '@/app/components/Nav';

const imgUrl = [
  'https://ik.imagekit.io/0xcqzy/cyberchords/a%20close%20up%20of%20a%20green%20and%20w....jpg?updatedAt=1725824295576',
  'https://ik.imagekit.io/0xcqzy/cyberchords/a%20computer%20generated%20image%20....jpg?updatedAt=1725824297660',
  'https://ik.imagekit.io/0xcqzy/cyberchords/orchid%20phalaenopsis%203d%20Real....jpg?updatedAt=1725824296797',
  'https://ik.imagekit.io/0xcqzy/cyberchords/A%20wallpaper%20inspired%20fish%20f....jpg?updatedAt=1725824299150',
];

const Flora = () => {
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
      <div className={style.primaryText}>flora</div>
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

export default Flora;
