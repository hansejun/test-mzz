'use server'

import { cookies } from "next/headers";

export async function setUserRole(role: 'STUDENT' | 'TEACHER') { 
    const cookieStore = await cookies()


    cookieStore.set('userRole', role, {
        domain: process.env.NODE_ENV === 'production' ? '.virtualcamp.online' : undefined,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
        maxAge: 60 * 60 * 24 * 30, // 30일
        path: '/',
    })
}

export async function getUserRole() { 
    const cookieStore = await cookies()
    return cookieStore.get('userRole')?.value
}