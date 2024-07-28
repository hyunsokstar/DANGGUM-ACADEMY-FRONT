"use server";

export async function handleCreateAccount(formData: FormData) {
    // 3초 지연 추가
    await new Promise(resolve => setTimeout(resolve, 3000));

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
}