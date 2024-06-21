'use client';

import Image from 'next/image';
import Swiper from 'swiper';

function Slide(imgArr: string[]) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
      delay: 5,
      disableOnInteraction: false,
    },
  });
  return (
    <div className="w-innerWidth h-96 mx-auto">
      <div className="swiper flex flex-col h-[400px]">
        <div className="swiper-wrapper h-full">
          {imgArr.map((img) => (
            <Image src={img} alt="accommodation image" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide;
