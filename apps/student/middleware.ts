import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  
  // /student에서 /sign-in으로 리디렉션 설정
    if (url.pathname === '/') {
      console.log(`Redirecting to ${process.env.TEACHER_URL}/sign-in?loginType=student`);
    return NextResponse.redirect(`${process.env.TEACHER_URL}/sign-in?loginType=student`);
  }

  return NextResponse.next();
}

