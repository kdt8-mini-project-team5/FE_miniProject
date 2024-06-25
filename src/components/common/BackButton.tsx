import { MdArrowBackIosNew } from 'react-icons/md';
import { useRouter } from 'next/navigation';

function BackButton() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-12 h-12 flex justify-center items-center rounded-full cursor-pointer hover:bg-alto"
      aria-label="backButton"
    >
      <MdArrowBackIosNew className="text-2xl" />
    </button>
  );
}

export default BackButton;
