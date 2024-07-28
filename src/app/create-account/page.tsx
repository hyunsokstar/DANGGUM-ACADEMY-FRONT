'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import CommonInput from '@/components/Common/CommonInput';
import CommonButton from '@/components/Common/CommonButton';
import { handleCreateAccount } from './actions';  // 서버 액션 임포트

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <CommonButton
            type="submit"
            variant="green"
            className="flex-1"
            loading={pending}
        >
            Submit
        </CommonButton>
    );
}

export default function CreateAccount() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
            <form className="space-y-4" action={handleCreateAccount}>
                <CommonInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                />
                <CommonInput
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                />
                <CommonInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                />
                <CommonInput
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    required
                />
                <div className="flex justify-between space-x-4 pt-4">
                    <SubmitButton />
                    <CommonButton
                        type="button"
                        variant="outline"
                        className="flex-1"
                    >
                        Cancel
                    </CommonButton>
                </div>
            </form>
        </div>
    );
}