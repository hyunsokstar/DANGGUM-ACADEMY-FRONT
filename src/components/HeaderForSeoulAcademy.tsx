import React from 'react';
import Link from 'next/link';
import CommonButton from '@/components/Common/CommonButton';

const HeaderForSeoulAcademy: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-4xl font-bold">Seoul Academy</h1>
                <nav className="flex-grow mx-10">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <Link href="/schedule" className="hover:underline">스케쥴러</Link>
                        </li>
                        <li>
                            <Link href="#question-bank" className="hover:underline">문제 은행</Link>
                        </li>
                        <li>
                            <Link href="#admin" className="hover:underline">Admin</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex space-x-4">
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
                </div>
            </div>
        </header>
    );
};

export default HeaderForSeoulAcademy;