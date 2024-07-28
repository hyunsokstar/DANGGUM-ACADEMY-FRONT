// src/app/api/create-account/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { email, username, password } = await request.json();

        // 비밀번호 해싱
        const hashedPassword = await bcrypt.hash(password, 10);

        // 사용자 생성
        const user = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword,
            },
        });

        return NextResponse.json({ success: true, message: '회원가입이 완료되었습니다.', userId: user.id }, { status: 201 });
    } catch (error) {
        console.error('회원가입 에러:', error);
        return NextResponse.json({ success: false, message: '회원가입 처리 중 오류가 발생했습니다.' }, { status: 500 });
    }
}
