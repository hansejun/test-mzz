'use client'

import { useRouter } from "next/navigation";
import { setUserRole } from "../../../libs/user-role";

export default function StudentForm() {
    const router = useRouter();
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await setUserRole('STUDENT');
        router.push('/student/organizations/1/classrooms');
    }
  return <div>
      <h1>학생 로그인 폼</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="학생 이메일" />
          <input type="password" placeholder="학생 비밀번호" />
          <button type="submit">학생 로그인</button>
      </form>
    </div>

}
