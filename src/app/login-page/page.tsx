// src/app/login-page/page.tsx
'use client';
import React from 'react';
import CommonInput from '@/components/Common/CommonInput';
import CommonButton from '@/components/Common/CommonButton';
import Link from 'next/link';
import { useFormState } from 'react-dom';


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

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">로그인</h1>
            <form className="space-y-4">
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