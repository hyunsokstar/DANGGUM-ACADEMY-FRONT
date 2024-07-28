// src\app\create-account\actions.ts
"use server";

import { z } from 'zod';

const CreateAccountSchema = z.object({
    email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요." }),
    username: z.string().min(3, { message: "사용자명은 최소 3자 이상이어야 합니다." }),
    password: z.string().min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." }),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
});

export async function handleCreateAccount(prevState: any, formData: FormData) {
    // 3초 지연 추가
    await new Promise(resolve => setTimeout(resolve, 1000));

    const rawFormData = Object.fromEntries(formData.entries());

    try {
        const validatedData = CreateAccountSchema.parse(rawFormData);

        console.log('회원가입 폼 입력 확인:');
        console.log('이메일:', validatedData.email);
        console.log('사용자명:', validatedData.username);
        console.log('비밀번호:', validatedData.password);

        console.log("서버에서 실행되었습니다!");

        return { success: true, message: "회원가입이 완료되었습니다." };
    } catch (error) {
        if (error instanceof z.ZodError) {
            // ZodError는 이미 필드별로 에러를 구조화하여 제공합니다.
            return { success: false, errors: error.flatten().fieldErrors };
        }
        return { success: false, message: "알 수 없는 오류가 발생했습니다." };
    }
}