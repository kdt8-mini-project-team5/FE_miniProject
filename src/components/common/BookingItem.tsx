import { Booking } from '@/app/bookingList/page';
import { Cart } from '@/app/cart/page';
import Image from 'next/image';
import React from 'react';

interface BookingItemProps {
  booking: Booking | Cart;
  isCheck?: boolean;
  onCheckItem?: (roomId: number) => void;
}

function BookingItem({ booking, isCheck, onCheckItem }: BookingItemProps) {
  const isBooking = (data: Booking | Cart): data is Booking => {
    return (data as Booking).orderId !== undefined;
  };

  const checkInDate = new Date(booking.checkInDatetime);
  const checkOutDate = new Date(booking.checkOutDatetime);

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const formatTime = (date: Date) => {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };
  const formatPrice = (price: number) => {
    return `${price.toLocaleString('ko-KR')}원`;
  };

  let bookingRoomPrice = 0;
  if (isBooking(booking)) {
    if (typeof booking.roomPrice === 'string') {
      bookingRoomPrice = parseFloat(booking.roomPrice);
    } else if (typeof booking.roomPrice === 'number') {
      bookingRoomPrice = booking.roomPrice;
    }
  }

  const displayedPrice = booking.totalPrice ?? bookingRoomPrice ?? 0;
  return (
    <article
      key={isBooking(booking) ? booking.orderId : booking.cartId}
      className="w-full bg-white p-5"
    >
      <header>
        {isBooking(booking) && (
          <p className="text-xs mb-2 text-dovegray">
            숙소 예약번호 {booking.orderId}
          </p>
        )}
        <h2 className="text-lg font-bold text-mineshaft">
          {booking.accommodationTitle}
        </h2>
        <hr className="border-gray-300 my-2 text-mineshaft" />
        <p className="text-lg mb-2 font-bold">{booking.roomTitle}</p>
      </header>
      <section className="flex w-full">
        {isBooking(booking) ? null : (
          <input
            type="checkbox"
            className="custom-checkbox mr-4 mt-1"
            checked={isCheck}
            onChange={() => onCheckItem && onCheckItem(booking.cartId)}
          />
        )}
        {booking.roomImg && (
          <figure className="relative w-20 h-20 mr-2 rounded-xl">
            <Image
              src={booking.roomImg}
              alt={booking.roomTitle}
              fill
              className="rounded-xl"
            />
          </figure>
        )}
        <div>
          <p className="text-xs mb-2 text-dovegray">{`${formatDate(checkInDate)} ~ ${formatDate(checkOutDate)}`}</p>
          <p className="text-xs mb-2 text-dovegray">{`체크인 ${formatTime(checkInDate)} | 체크아웃 ${formatTime(checkOutDate)}`}</p>
          <p className="text-xs mb-2 text-dovegray">{`기준 ${booking.minPeople}명 / 최대 ${booking.maxPeople}명`}</p>
        </div>
      </section>
      <footer className="flex justify-end items-center gap-2">
        <p className="text-lg text-dovegray">숙박</p>

        <p className="text-lg font-bold text-mineshaft">
          {formatPrice(displayedPrice)}
        </p>
      </footer>
    </article>
  );
}

export default BookingItem;
