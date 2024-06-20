import axios from 'axios';
import { ISignUp } from '../../app/(auth)/signup/page';

const BASE_URL = 'https://test.quickbank.co.kr:8443';

const requireAccessKey = (email: string) => {
  const accessKeyURL = `${BASE_URL}/api/register/email`;
  const dataToJson = JSON.stringify({ email });
  axios.post(accessKeyURL, dataToJson, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const checkAccessKey = (email: string, accessKey: string) => {
  const dataToJson = JSON.stringify({ email, accessKey });
  const checkAccessKeyURL = `${BASE_URL}/api/register/email/successKey`;
  axios.post(checkAccessKeyURL, dataToJson, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const signUp = (data: ISignUp) => {
  const registerURL = `${BASE_URL}/api/register`;
  const dataToJson = JSON.stringify({
    email: data.email,
    password: data.password,
    name: data.name,
    accessKey: data.accessKey,
  });
  axios.post(registerURL, dataToJson, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { requireAccessKey, checkAccessKey, signUp };
