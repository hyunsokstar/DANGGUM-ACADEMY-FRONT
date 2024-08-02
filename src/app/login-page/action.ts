// src/app/login-page/action.ts
"use server";

import { z } from 'zod';
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

const LoginSchema = z.object({
    email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요." }),
    password: z.string().min(1, { message: "비밀번호를 입력해주세요." }),
});

export async function handleLogin(prevState: any, formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries());

    try {
        const validatedData = LoginSchema.parse(rawFormData);

        const user = await prisma.user.findUnique({
            where: { email: validatedData.email },
        });

        if (!user || !(await bcrypt.compare(validatedData.password, user.password))) {
            return { success: false, message: "이메일 또는 비밀번호가 올바르지 않습니다." };
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: '1h' }
        );

        // 쿠키에 토큰 저장
        cookies().set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600 // 1시간
        });


        return { success: true, message: "로그인 성공" };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors };
        }
        console.error("로그인 오류:", error);
        return { success: false, message: "로그인 처리 중 오류가 발생했습니다." };
    } finally {
        await prisma.$disconnect();
    }
}