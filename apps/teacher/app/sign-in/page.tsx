'use client';

import { use } from "react";
import TeacherForm from "./_components/teacher-form";
import StudentForm from "./_components/student-form";

interface SignInPageProps { 
    searchParams: Promise<{
        loginType :'student' | 'teacher'
    }>
}

export default function SignInPage({ searchParams }: SignInPageProps) {
    

    const { loginType } = use(searchParams);

    const isStudent = loginType === 'student';

  if(isStudent) {
    return <StudentForm />
  }

  return <TeacherForm />
}
