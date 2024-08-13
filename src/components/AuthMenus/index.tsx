// src/components/AuthMenus.tsx
import React from 'react';
import Link from 'next/link';
import CommonButton from '@/components/Common/CommonButton';

interface AuthMenusProps {
    user: { email: string } | null;
}

const AuthMenus: React.FC<AuthMenusProps> = ({ user }) => {
    return (
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
    );
};

export default AuthMenus;