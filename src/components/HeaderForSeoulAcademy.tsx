// src/components/HeaderForSeoulAcademy.tsx
import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import CommonButton from '@/components/Common/CommonButton';

interface User {
    userId: string;
    email: string;
}

const getUserFromToken = (token: string): User | null => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET!) as User;
    } catch (error) {
        console.error('Invalid token');
        return null;
    }
};

const HeaderForSeoulAcademy = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;
    const user = token ? getUserFromToken(token) : null;

    return (
        <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-4xl font-bold">Seoul Academy</h1>
                <nav className="flex-grow mx-10">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <Link href="/schedule" className="hover:underline">스케쥴러</Link>
                        </li>
                        {/* <li>
                            <Link href="#question-bank" className="hover:underline">문제 은행</Link>
                        </li> */}
                        <li>
                            <Link href="/image-write" className="hover:underline">수학 시험</Link>
                        </li>
                        {user && (
                            <li>
                                <Link href="#admin" className="hover:underline">Admin</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className="flex space-x-4 items-center">
                    {user ? (
                        <>
                            <span className="mr-4">{user.email}</span>
                            <form action="/api/logout" method="post">
                                <CommonButton
                                    variant="primary"
                                    size="sm"
                                    className="bg-white text-indigo-600 hover:bg-indigo-100 border-white"
                                    type="submit"
                                >
                                    로그아웃
                                </CommonButton>
                            </form>
                        </>
                    ) : (
                        <>
                            <Link href="/login-page" passHref>
                                <CommonButton
                                    variant="primary"
                                    size="sm"
                                    className="bg-white text-indigo-600 hover:bg-indigo-100 border-white"
                                >
                                    로그인
                                </CommonButton>
                            </Link>
                            <Link href="/signup-page" passHref>
                                <CommonButton
                                    variant="success"
                                    size="sm"
                                    className="bg-indigo-500 text-white hover:bg-indigo-400"
                                >
                                    회원가입
                                </CommonButton>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default HeaderForSeoulAcademy;