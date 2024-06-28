import { IAccommodation } from '@/app/(main)/[id]/page';
import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}
function Kakaomap({ data }: { data: IAccommodation }) {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = true;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1dbf251aae505aa5f3bff1ea4dd72df9&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const location = new window.kakao.maps.LatLng(
          data?.latitude,
          data?.longitude,
        );
        const options = {
          center: location,
          level: 3,
        };
        const bounds = new window.kakao.maps.LatLngBounds();
        const map = new window.kakao.maps.Map(container, options);
        const marker = new window.kakao.maps.Marker({
          position: location,
        });
        marker.setMap(map);
        bounds.extend(data?.latitude, data?.longitude);
        map.setBounds(bounds);
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
  }, [data?.latitude, data?.longitude]);
  return <div id="map" className="w-[550px] h-[400px]" />;
}

export default Kakaomap;
