import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { RxCross2 } from 'react-icons/rx';
import BASE_URL from '../../lib/constants';
import { axiosGet } from '../../lib/fetchURL';
import BackButton from './BackButton';

const CheckLogin = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();
  // const [path, setPath] = useState(usePathname());
  const path = usePathname();
  const openModal = () => {
    dialogRef?.current?.showModal();
  };
  const closeModal = () => {
    dialogRef?.current?.close();
    setErr(null);
    router.back();
  };

  useEffect(() => {
    const noCheckPageArr = ['/', '/login', '/signup'];
    const checkLogin = async () => {
      const URL = `${BASE_URL}/api/check`;
      const { error } = await axiosGet(URL);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (error) {
        openModal();
        setErr(error);
      }
    };
    // 로그인 및 회원가입 페이지는 검사하지 않음
    if (!noCheckPageArr.includes(path)) {
      checkLogin();
    }
  }, [path]);

  return (
    <dialog
      ref={dialogRef}
      className="w-1/2 h-1/2 rounded-xl flex flex-col gap-10 justify-center items-center fixed mt-[50%]"
    >
      <h3 className="text-2xl font-bold">{err}</h3>
      <button
        type="button"
        className="h-20 bg-primary text-white rounded-2xl"
        onClick={() => router.push('/login')}
      >
        로그인 페이지로 가기
      </button>
      <BackButton />
      <button type="button" aria-label="close" onClick={closeModal}>
        <RxCross2 className="absolute top-0 right-2 cursor-pointer size-11" />
      </button>
    </dialog>
  );
};

export default CheckLogin;
