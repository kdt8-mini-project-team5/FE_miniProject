import { IAccommodation } from '@/app/(main)/accommodation/[id]/page';
import BASE_URL from '@/lib/constants';
import { FetchResponse, axiosGet } from '@/lib/fetchURL';

interface INeedData {
  params: { id: string };
  checkInDate: string;
  checkOutDate: string;
}

const accommodationDataFetch = async ({
  params,
  checkInDate,
  checkOutDate,
}: INeedData): Promise<FetchResponse<IAccommodation>> => {
  const URL = `${BASE_URL}/api/accommodation/${params.id}?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`;
  const { data, status, errorMessage } = await axiosGet<IAccommodation>(URL);
  return { data, status, errorMessage };
};

export default accommodationDataFetch;
