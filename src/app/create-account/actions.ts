"use server";

import { z } from 'zod';
import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

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
    const rawFormData = Object.fromEntries(formData.entries());

    try {
        const validatedData = CreateAccountSchema.parse(rawFormData);

        const hashedPassword = await bcrypt.hash(validatedData.password, 10);

        const user = await prisma.user.create({
            data: {
                email: validatedData.email,
                username: validatedData.username,
                password: hashedPassword,
            },
        });

        return { success: true, message: "회원가입이 완료되었습니다.", userId: user.id };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, errors: error.flatten().fieldErrors };
        }
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return { success: false, message: "이미 사용 중인 이메일 또는 사용자명입니다." };
            }
        }
        console.error("회원가입 오류:", error);
        return { success: false, message: "회원가입 처리 중 오류가 발생했습니다." };
    } finally {
        await prisma.$disconnect();
    }
}