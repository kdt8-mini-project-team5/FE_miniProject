'use client';

import { useEffect } from 'react';
// import server from '@/mocks/server';

function MswComponent() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // if (typeof window === 'undefined') {
      //   // 서버 사이드 렌더링
      //   server.listen();
      // } else {
      //   // 클라이언트 사이드 렌더링
      (async () => {
        const { worker } = await import('@/mocks/browser');
        worker.start();
      })();
    }
    // }

    // cleanup 함수 추가 (서버와 클라이언트 모두)
    // return () => {
    //   if (process.env.NODE_ENV === 'development') {
    //     if (typeof window === 'undefined') {
    //       server.close();
    //     } else {
    //       (async () => {
    //         const { worker } = await import('@/mocks/browser');
    //         worker.stop();
    //       })();
    //     }
    //   }
    // };
  }, []);

  return null;
}

export default MswComponent;
