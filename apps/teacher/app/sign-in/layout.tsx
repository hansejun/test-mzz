import Link from "next/link";

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return (
      <div>
          <div className="flex text-blue-400 gap-x-4">
              <Link href='/sign-in?loginType=student'>학생 로그인</Link>
              <Link href='/sign-in?loginType=teacher'>교사 로그인</Link>
          </div>
      {children}
    </div>
  );
}