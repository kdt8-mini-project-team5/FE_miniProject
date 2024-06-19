'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useState } from 'react';
import SignUpSchema from '../../../components/SignUp/SignUpSchema';
import SignUpInputBox from '../../../components/SignUp/SignInputBox';

interface ISignUp {
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
  verificationCode: string;
}
function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
  } = useForm<ISignUp>({
    resolver: zodResolver(SignUpSchema),
  });

  const [isClicked, setIsClicked] = useState(false);

  const checkEmail = async () => {
    const result = await trigger('email');
    if (result) {
      setIsClicked(true);
    }
  };

  return (
    <div className="h-screen mx-auto flex items-center justify-center">
      <div className="w-1/3 flex flex-col gap-12">
        <div className="flex gap-2 justify-end">
          <Image src="/logo.png" width={40} height={40} alt="logo" />
          <h1 className="text-3xl text-primary">FAST</h1>
        </div>
        <form className="h-3/4 flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <SignUpInputBox
              type="text"
              register={register('name')}
              message={errors.name?.message}
            />
            {isClicked ? (
              <SignUpInputBox
                type="text"
                register={register('verificationCode', { required: 'givemoe' })}
                message={errors.verificationCode?.message}
              />
            ) : (
              <div className="flex">
                <SignUpInputBox
                  type="email"
                  register={register('email')}
                  message={errors.email?.message}
                />
                <button
                  type="submit"
                  className="bg-alto text-white rounded-lg w-6/12 font-bold"
                  onClick={checkEmail}
                >
                  send verification
                </button>
              </div>
            )}

            <SignUpInputBox
              type="phoneNumber"
              register={register('phoneNumber')}
              message={errors.phoneNumber?.message}
            />
            <SignUpInputBox
              type="password"
              register={register('password')}
              message={errors.password?.message}
            />
            <SignUpInputBox
              type="password"
              register={register('confirmPassword')}
              message={errors.confirmPassword?.message}
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit((data) => {
              console.log(data);
            })}
            className="bg-primary text-white text-2xl rounded-xl h-16"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
