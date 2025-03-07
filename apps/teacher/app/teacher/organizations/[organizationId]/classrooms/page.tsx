import Link from "next/link";

export default function ClassroomsPage() {
  return (
    <div>
          <h1>교사 클래스룸 페이지</h1>
          <Link href="/student/organizations/1/classrooms">학생 클래스룸으로 이동하기</Link>
    </div>
  );
}