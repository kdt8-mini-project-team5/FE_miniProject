import { IAccommodation } from '@/app/(main)/[id]/page';
import BASE_URL from '@/lib/constants';
import axios, { AxiosResponse } from 'axios';

interface INeedData {
  params: { id: string };
  checkInDate: string;
  checkOutDate: string;
}

const accommodationDataFetch = async ({
  params,
  checkInDate,
  checkOutDate,
}: INeedData): Promise<AxiosResponse<IAccommodation>> => {
  const URL = `${BASE_URL}/api/accommodation/${params.id}?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`;
  // const URL = '/api/accommodation';
  // const URL = `http://121.189.180.62:8080/api/accommodation/${params.id}?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`;
  try {
    const data: AxiosResponse<IAccommodation> = await axios.get(URL);
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export default accommodationDataFetch;
