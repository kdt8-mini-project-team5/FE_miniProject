'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const Haeder = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center h-full w-full justify-between">
      <Link href="/" className="flex items-center h-full">
        <Image src="/logo.png" alt="logo" width={70} height={70} />
        <div className="text-4xl font-bold">FAST</div>
      </Link>
      <div className="flex items-center h-full gap-7 font-bold">
        <Link
          href="/"
          className={`text-lg ${pathname === '/' ? 'text-primary' : ''}`}
        >
          메인페이지
        </Link>
        <Link
          href="/reservation"
          className={`text-lg ${pathname === '/reservation' ? 'text-primary' : ''}`}
        >
          예약내역
        </Link>
        <Link href="/" className="text-lg">
          <MdOutlineShoppingCart size={30} />
        </Link>
        <Link
          href="/login"
          type="button"
          className="bg-primary text-white rounded-xl w-36 h-12 flex items-center justify-center text-sm"
        >
          로그인/회원가입
        </Link>
      </div>
    </div>
  );
};

export default Haeder;
