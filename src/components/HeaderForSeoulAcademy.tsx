// src/components/HeaderForSeoulAcademy.tsx
import React from 'react';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import AuthMenus from '@/components/AuthMenus';
import MainMenusForHeader from '@/components/MainMenusForHeader';

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
            <div className="mx-auto flex justify-between items-center px-2">
                {/* 프로젝트 타이틀 */}
                <div className="flex-1">
                    <h1 className="text-4xl font-bold">Seoul Academy</h1>
                </div>

                {/* 메인 메뉴 */}
                <div className="flex-3  w-full mx-5">
                    <MainMenusForHeader />
                </div>

                {/* 로그인 정보 */}
                <div className="flex-1 flex justify-end">
                    <AuthMenus user={user} />
                </div>
            </div>
        </header>
    );
};

export default HeaderForSeoulAcademy;
