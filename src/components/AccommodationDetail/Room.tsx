import { IRoom } from '@/app/(main)/[id]/page';
import Link from 'next/link';
import { MdOutlineShoppingCart } from 'react-icons/md';
import ImageSlider from './ImageSlider';

interface RoomProps {
  buildingName: string;
  room: IRoom;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  numPeople: string;
}

function Room({
  buildingName,
  room,
  roomId,
  checkInDate,
  checkOutDate,
  numPeople,
}: RoomProps) {
  return (
    <div className="flex py-4 border-dovegray border-b-2 ">
      <div className="w-5/12 h-[250px]">
        <ImageSlider imgArr={room.img} />
      </div>
      <div className="flex flex-col ml-4 border-mineshaft border-2 rounded-xl w-full h-[250px] px-6 py-4 justify-between">
        <h2 className="text-3xl font-semibold mb-2">{room.title}</h2>
        <span className="text-gray-600 mb-2 text-base">
          기준 {room.minPeople}명 / 최대 {room.maxPeople}명
        </span>
        <span className="text-4xl font-bold mb-4 text-right">
          {room.price}원
        </span>
        <div className="flex justify-end items-center gap-2">
          <button
            type="button"
            className="w-[45px] h-[45px] border-gray-400 border rounded-xl flex justify-center items-center"
            aria-label="button"
          >
            <MdOutlineShoppingCart size="30" />
          </button>
          <Link
            href={`/booking?title=${buildingName}&roomTitle=${room.title}&roomPrice=${room.price}&roomId=${roomId}&numPeople=${numPeople}&minPeople=${room.minPeople}&maxPeople=${room.maxPeople}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`}
          >
            <button
              type="button"
              className="bg-primary text-white w-[130px] h-[45px] rounded-xl text-lg"
            >
              예약하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Room;
