import { useRouter } from 'next/router';
import BASE_URL from './constants';
import { axiosGet } from './fetchURL';

const useCheckLogin = async () => {
  const URL = `${BASE_URL}/api/check`;
  const { error } = await axiosGet(URL);
  const router = useRouter();
  if (error) {
    router.back();
  }
};

export default useCheckLogin;
