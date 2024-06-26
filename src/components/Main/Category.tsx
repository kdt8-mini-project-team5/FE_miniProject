import React from 'react';
import { FaHotel, FaHome, FaBuilding } from 'react-icons/fa';
import { MdHolidayVillage, MdApartment } from 'react-icons/md';

interface CategoryProps {
  selectedCategory: string;
  onSelectCategory: (label: string) => void;
}

const categories = [
  { label: '관광 호텔', icon: FaHotel, text: '호텔' },
  { label: '펜션', icon: MdHolidayVillage, text: '펜션' },
  { label: '모텔', icon: FaBuilding, text: '모텔' },
  { label: '민박', icon: FaHome, text: '민박' },
  { label: '콘도 미니엄', icon: MdApartment, text: '콘도' },
];

const Category = ({ selectedCategory, onSelectCategory }: CategoryProps) => {
  return (
    <div className="flex justify-center space-x-4 m-12 gap-12">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <div
            key={category.label}
            role="presentation"
            className="flex items-center text-2xl cursor-pointer"
            onClick={() => onSelectCategory(category.label)}
          >
            <Icon size={35} className="text-primary" />
            <div className="ml-3 flex flex-col items-center justify-center w-16">
              <div className="font-bold">{category.text}</div>
              <div
                className={`w-14 h-1 mt-1 bg-primary ${selectedCategory === category.label ? 'block' : 'hidden'}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
