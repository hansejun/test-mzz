import Link from "next/link";
import { getUserRole } from "../../../../libs/user-role";

export default async function ClassroomsPage() {
  const userRole = await getUserRole()
  return (
    <div>
            <span style={{
        color:'red',
        fontSize:'20px',
        fontWeight:'bold',
      }}>유저 역할:{userRole}</span>

          <h1>학생 클래스룸 페이지</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        color: 'blue',

      }}>
            <Link href="/">로그인 페이지로 이동하기</Link>
      <Link href="/organizations/1/settings">설정 페이지로 이동하기</Link>
  </div>
    </div>
  );
}
