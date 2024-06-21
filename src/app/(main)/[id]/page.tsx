import accommodationDataFetch from '@/components/accommodationDataAxios';

interface IParams {
  params: {
    id: string;
  };
}

interface Room {
  title: string;
  price: number;
  minPeople: number; // 기준인원
  maxPeople: number;
  img: string[];
}

interface IAccommodation {
  title: string;
  info: string;
  price: number;
  checkIn: string;
  checkOut: string;
  shower: boolean;
  aircone: boolean;
  tv: boolean;
  pc: boolean;
  internet: boolean;
  refrigerator: boolean;
  toiletries: boolean;
  kitchenware: boolean;
  parkingLodging: boolean;
  address: string;
  tel: string;
  dryer: boolean;
  roomCount: number;
  img: string[];
  room: Room[];
}

function AccommodationDetail({ params }: IParams) {
  // return <Slide imgArr={data?.img} />;
  const data = accommodationDataFetch();
  // console.log(data);
}

export default AccommodationDetail;
