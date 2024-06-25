import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import type { AxiosError } from 'axios';

export async function middleware(req: NextRequest) {
  try {
    const response = await axios.get('http://localhost:3000/api/check', {
      headers: {
        'Content-Type': 'application/json',
        Cookie: req.headers.get('cookie') || '',
      },
    });

    if (response.status === 200) {
      // 로그인 되어 있음
      return NextResponse.next();
    }
  } catch (error) {
    // AxiosError 타입으로 에러를 단언합니다.
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 400) {
      // 로그인 되어 있지 않음
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // 다른 에러가 발생한 경우 로그인 페이지로 리디렉션
  return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
  matcher: ['/bookingList/:path*', '/booking/:path*'], // 로그인 상태를 확인할 경로 설정
};
