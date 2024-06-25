'use client';

import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import BookingItem from '@/components/common/BookingItem';
import Pagination from '@/components/BookingList/Pagination';
import Loading from '@/components/common/Loading';
import BackButton from '@/components/common/BackButton';

export interface Booking {
  orderId: string;
  accommodationTitle: string;
  roomTitle: string;
  roomImg: string;
  minPeople: number;
  maxPeople: number;
  checkInDatetime: string;
  checkOutDatetime: string;
  totalPrice: number;
}
const fetcher = (url: string) => axios.get(url).then((res) => res.data);
interface BookingResponse {
  bookingList: Booking[];
  totalElements: number;
}

function BookingsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const { data, error } = useSWR<BookingResponse>(
    `/api/booking?page=${currentPage}&size=${pageSize}`,
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />;
  const totalPages = Math.ceil(data.totalElements / pageSize);
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="w-innerWidth m-auto">
      <header className="relative my-8 flex justify-center">
        <div className="absolute left-0">
          <BackButton />
        </div>
        <h1 className="text-2xl font-bold">예약내역 확인</h1>
      </header>
      <main className="flex flex-col items-center">
        <section className="w-2/3 flex flex-col gap-4">
          {data.bookingList.map((booking) => (
            <BookingItem key={booking.orderId} booking={booking} />
          ))}
        </section>
        {totalPages !== 1 && (
          <nav className="mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onNext={handleNextPage}
              onPrevious={handlePreviousPage}
              onPageChange={handlePageChange}
            />
          </nav>
        )}
      </main>
    </div>
  );
}

export default BookingsPage;
