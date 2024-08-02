'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CommonInput from '@/components/Common/CommonInput';
import CommonButton from '@/components/Common/CommonButton';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { handleLogin } from './action';

function SubmitButton() {
    return (
        <CommonButton
            type="submit"
            variant="primary"
            className="w-full"
        >
            로그인
        </CommonButton>
    );
}

export default function LoginPage() {
    const router = useRouter();
    const [state, formAction] = useFormState(handleLogin, null);

    useEffect(() => {
        if (state?.success) {
            // 로그인 성공 시 홈페이지로 리다이렉트
            router.push('/');
        }
    }, [state, router]);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
            <form action={formAction} className="space-y-4">
                <CommonInput
                    name="email"
                    type="email"
                    placeholder="이메일"
                    required
                    aria-label="이메일"
                />
                <CommonInput
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    required
                    aria-label="비밀번호"
                />

                {state?.message && (
                    <p className={`text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>
                        {state.message}
                    </p>
                )}

                <div className="pt-4">
                    <SubmitButton />
                </div>

                <div className="text-center text-sm">
                    <Link href="/forgot-password" className="text-blue-500 hover:underline">
                        비밀번호를 잊으셨나요?
                    </Link>
                </div>

                <div className="text-center text-sm">
                    계정이 없으신가요?{' '}
                    <Link href="/create-account" className="text-blue-500 hover:underline">
                        회원가입
                    </Link>
                </div>
            </form>
        </div>
    );
}