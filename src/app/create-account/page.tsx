import React from 'react';
import CommonInput from '@/components/Common/CommonInput';
import CommonButton from '@/components/Common/CommonButton';

// 서버 액션 함수 추가
const handleForm = async (formData: FormData) => {
    "use server";
    const email = formData.get('email');
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (email && username && password && confirmPassword) {
        console.log('회원가입 폼 입력 확인:');
        console.log('이메일:', email);
        console.log('사용자명:', username);
        console.log('비밀번호:', password);
        console.log('비밀번호 확인:', confirmPassword);
    }
    console.log("서버에서 실행되었습니다!");
};

export default function CreateAccount() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
            <form className="space-y-4" action={handleForm}>
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
                    <CommonButton
                        type="submit"
                        variant="green"
                        className="flex-1"
                    >
                        Submit
                    </CommonButton>
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