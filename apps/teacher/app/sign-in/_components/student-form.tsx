'use client'

import { useRouter } from "next/navigation";

export default function StudentForm() {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
