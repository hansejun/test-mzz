import Link from "next/link";
import { getUserRole } from "../../../../../libs/user-role";

export default async function ClassroomsPage() {
  const userRole = await getUserRole()
  return (
    <div>
      <span style={{
        color:'red',
        fontSize:'20px',
        fontWeight:'bold',
      }}>유저 역할:{userRole}</span>
          <h1>교사 클래스룸 페이지</h1>
          <Link href="/student/organizations/1/classrooms">학생 클래스룸으로 이동하기</Link>
    </div>
  );
}