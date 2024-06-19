'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import loginSchema from '../../../components/Login/loginSchema';
import LoginInputBox from '../../../components/Login/LoginInputBox';

interface ILogin {
  email: string;
  password: string;
}
function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <div className="h-screen mx-auto flex items-center justify-center">
      <div className="w-1/3 flex flex-col gap-12">
        <div className="flex gap-2">
          <Image src="/logo.png" width={110} height={100} alt="logo" />
          <h1 className="text-8xl text-primary">FAST</h1>
        </div>
        <form className="h-3/4 flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <LoginInputBox
              type="email"
              placeholder="abc@gmail.com"
              register={register('email')}
              message={errors.email?.message}
            />
            <LoginInputBox
              type="password"
              placeholder="비밀번호를 입력하세요."
              register={register('password')}
              message={errors.password?.message}
            />
          </div>
          <div className="flex flex-col gap-5">
            <button
              type="submit"
              onClick={handleSubmit((e) => {
                console.log(e);
              })}
              className="bg-primary text-white text-2xl rounded-xl h-16"
            >
              로그인
            </button>
            <button
              type="button"
              onClick={handleSubmit((e) => {
                console.log(e);
              })}
              className="bg-white text-primary text-2xl rounded-xl h-16 border-primary border-2"
            >
              이메일로 회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
