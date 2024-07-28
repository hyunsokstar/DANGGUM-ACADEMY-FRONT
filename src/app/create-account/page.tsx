// src\app\create-account\page.tsx
'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import CommonInput from '@/components/Common/CommonInput';
import CommonButton from '@/components/Common/CommonButton';
import { handleCreateAccount } from './actions';  // 서버 액션 임포트

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <CommonButton
            type="submit"
            variant="primary"
            className="flex-1"
            loading={pending}
        >
            Submit
        </CommonButton>
    );
}

export default function CreateAccount() {
    const [state, dispatch] = useFormState(handleCreateAccount, null);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
            <form className="space-y-4" action={dispatch}>
                <CommonInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    error={state?.errors?.email?.[0]}
                />
                <CommonInput
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                    error={state?.errors?.username?.[0]}
                />
                <CommonInput
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    error={state?.errors?.password?.[0]}
                />
                <CommonInput
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    error={state?.errors?.confirmPassword?.[0]}
                />

                {state?.message && (
                    <p className={`text-center ${state.success ? 'text-green-500' : 'text-red-500'}`}>
                        {state.message}
                    </p>
                )}

                <div className="flex justify-between space-x-4 pt-4">
                    <SubmitButton />
                    <CommonButton
                        type="button"
                        variant="primary"
                        className="flex-1"
                    >
                        Cancel
                    </CommonButton>
                </div>
            </form>
        </div>
    );
}