import BASE_URL from '@/lib/constants';
import { axiosPost } from '@/lib/fetchURL';

const login = async (email: string, password: string) => {
  const loginURL = `${BASE_URL}/api/login`;
  const dataToJson = JSON.stringify({
    email,
    password,
  });
  const { status } = await axiosPost<string>(loginURL, dataToJson);
  return status;
};

export default login;
