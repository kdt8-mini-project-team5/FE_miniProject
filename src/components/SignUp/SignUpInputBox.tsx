import { UseFormRegisterReturn } from 'react-hook-form';

interface ISignUpInputBox {
  type: string;
  message?: string;
  register: UseFormRegisterReturn;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function SignUpInputBox({
  type,
  message,
  register,
  onKeyPress,
}: ISignUpInputBox) {
  const { onChange, onBlur, name, ref } = register || {};
  return (
    <div className="flex flex-col relative">
      <input
        type={type}
        placeholder={name}
        required
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        onKeyPress={onKeyPress}
        className={`${message ? 'border-primary' : ''} 
        border-2 
        border-white
        border-b-alto text-2xl p-2 placeholder:text-alto
        focus:outline-none
        focus:border-b-black
        flex-shrink
        w-full`}
      />
      {message && (
        <span className="absolute -bottom-6 text-primary">{message}</span>
      )}
    </div>
  );
}

export default SignUpInputBox;
