import axios from 'axios';

const accommodationDataFetch = () => {
  // const today = new Date();
  // const tomorrow = new Date(today);
  // tomorrow.setDate(today.getDate() + 1);
  // const todayToDate = `${today.getFullYear()}-${today.getMonth() < 9 ? '0' : ''}${today.getMonth() + 1}-${today.getDate()}`;
  // const tommorrowToDate = `${tomorrow.getFullYear()}-${tomorrow.getMonth() < 9 ? '0' : ''}${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`;
  // const URL = `api/accommodation/3?checkInDate=${todayToDate}&checkOutDate=${tommorrowToDate}`;
  const URL = '/api/accommodation';
  const data = axios.get(URL).then((res) => console.log(res));
  return data;
};

export default accommodationDataFetch;
