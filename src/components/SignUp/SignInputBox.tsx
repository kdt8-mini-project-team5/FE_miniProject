import { UseFormRegisterReturn } from 'react-hook-form';

interface ISignUp {
  readonly type: string;
  readonly message?: string;
  readonly register: UseFormRegisterReturn;
}

function SignUpInputBox({ type, message, register }: ISignUp) {
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
        className={`${message ? 'border-primary' : null} 
        border-2 
        border-white
        border-b-alto text-2xl p-2 placeholder:text-alto
        focus:outline-none
        focus:border-b-black
        flex-shrink
        w-full
        `}
      />
      {message && (
        <span
          className="absolute 
      -bottom-6 text-primary"
        >
          {message}
        </span>
      )}
    </div>
  );
}

export default SignUpInputBox;
