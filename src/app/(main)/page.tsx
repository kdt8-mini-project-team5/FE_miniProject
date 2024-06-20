'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaHotel, FaHome, FaBuilding } from 'react-icons/fa';
import { MdHolidayVillage, MdApartment } from 'react-icons/md';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Accommodation {
  id: number;
  title: string;
  minPrice: number;
  region: string;
  thumbnailUrl: string;
}

const images = [
  {
    id: 1,
    src: 'https://yaimg.yanolja.com/v5/2024/06/17/13/667036a30d52d6.02156142.png',
  },
  {
    id: 2,
    src: 'https://yaimg.yanolja.com/v5/2024/06/13/13/666af7ed835a01.22682192.png',
  },
  {
    id: 3,
    src: 'https://yaimg.yanolja.com/v5/2024/06/07/15/66632c134a56a6.85035219.png',
  },
  {
    id: 4,
    src: 'https://yaimg.yanolja.com/v5/2024/06/17/13/6670362e5a1619.24577291.png',
  },
  {
    id: 5,
    src: 'https://yaimg.yanolja.com/v5/2024/06/13/13/666af6abc49622.99666723.png',
  },
  {
    id: 6,
    src: 'https://yaimg.yanolja.com/v5/2024/06/18/13/6671908c944c30.84566795.png',
  },
];

function Page() {
  const [category, setCategory] = useState('관광호텔');
  // 그냥 보여주는 것
  const [data, setData] = useState<Accommodation[]>([]);
  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get('http://localhost:3001/accommodations');
        setData(res.data);
      } catch (error) {
        console.error('Failed to axios data:', error);
      }
    };
    axiosData();
  }, []);
  console.log(data);

  // const fetchAccommodation = async ({ pageParam = 1 }) => {
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:3001/accommodations?category=${category}&size=12`,
  //     );
  //     return res.data();
  //   } catch (error) {
  //     console.error('Failed to axios data:', error);
  //   }
  // };

  // const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  //   queryKey: ['accommodations'],
  //   queryFn: fetchAccommodation,
  //   getNextPageParam: (lastPage) => {
  //     // const lastAccommodation = lastPage[lastPage.length - 1];
  //     // return lastAccommodation.id;
  //     // getNextPageParam:(lastPage) => lastPage.nextCursor;
  //     return lastPage.nextCursor === -1 ? undefined : lastPage.nextCursor;
  //   },
  //   initialPageParam: 0,
  // });

  const handleCategory = (label: string) => {
    setCategory(label);
  };

  return (
    <div className="container w-innerWidth m-auto">
      <div className="flex justify-center space-x-4 m-12 gap-12">
        <div
          role="presentation"
          className="flex items-center text-2xl cursor-pointer"
          onClick={() => handleCategory('관광호텔')}
        >
          <FaHotel size={35} className="text-primary" />
          <div className="ml-3 flex flex-col items-center justify-center w-16">
            <div className="font-bold">호텔</div>
            <div
              className={`w-14 h-1 mt-1 bg-primary ${category === '관광호텔' ? 'block' : 'hidden'}`}
            />
          </div>
        </div>
        <div
          className="flex items-center text-2xl cursor-pointer"
          role="presentation"
          onClick={() => handleCategory('펜션')}
        >
          <MdHolidayVillage size={35} className="text-primary" />
          <div className="ml-3 flex flex-col items-center justify-center w-16">
            <div className="font-bold">펜션</div>
            <div
              className={`w-14 h-1 mt-1 bg-primary ${category === '펜션' ? 'block' : 'hidden'}`}
            />
          </div>
        </div>
        <div
          className="flex items-center text-2xl cursor-pointer"
          role="presentation"
          onClick={() => handleCategory('모텔')}
        >
          <FaBuilding size={35} className="text-primary" />
          <div className="ml-3 flex flex-col items-center justify-center w-16">
            <div className="font-bold">모텔</div>
            <div
              className={`w-14 h-1 mt-1 bg-primary ${category === '모텔' ? 'block' : 'hidden'}`}
            />
          </div>
        </div>
        <div
          className="flex items-center text-2xl cursor-pointer"
          role="presentation"
          onClick={() => handleCategory('민박')}
        >
          <FaHome size={35} className="text-primary" />
          <div className="ml-3 flex flex-col items-center justify-center w-16">
            <div className="font-bold">민박</div>
            <div
              className={`w-14 h-1 mt-1 bg-primary ${category === '민박' ? 'block' : 'hidden'}`}
            />
          </div>
        </div>
        <div
          className="flex items-center text-2xl cursor-pointer"
          role="presentation"
          onClick={() => handleCategory('콘도미니엄')}
        >
          <MdApartment size={35} className="text-primary" />
          <div className="ml-3 flex flex-col items-center justify-center w-16">
            <div className="font-bold">콘도</div>
            <div
              className={`w-14 h-1 mt-1 bg-primary ${category === '콘도미니엄' ? 'block' : 'hidden'}`}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Swiper
          spaceBetween={16}
          slidesPerView={3}
          navigation
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          className="w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-90 h-44">
                <Image
                  src={image.src}
                  alt="event image"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg cursor-pointer"
                  sizes="50vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section className="mt-16">
        <h2 className="text-left text-2xl font-bold mb-4">추천 숙소</h2>
        <div className="grid grid-cols-4 gap-8">
          {data?.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-md flex flex-col justify-between"
            >
              <div className="bg-concrete w-full h-64 relative">
                <Image
                  src={item.thumbnailUrl}
                  alt="image"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg bg-cover"
                  sizes="50vw"
                />
              </div>
              <div className="p-4">
                <div className="text-lg font-semibold mb-1">{item.title}</div>
                <div className="text-xs mb-1">{item.region}</div>
                <div className="text-gray-500 mt-2 text-right">
                  <span className="text-xs mr-2">최저가</span>
                  <span className="font-bold">
                    {item.minPrice.toLocaleString()}
                  </span>
                  원 ~
                </div>
                <button
                  type="button"
                  className="my-3 w-full py-2 bg-primary text-white text-center rounded-md"
                >
                  요금 확인
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
