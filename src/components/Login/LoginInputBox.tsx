import { UseFormRegisterReturn } from 'react-hook-form';

interface ILogin {
  readonly type: string;
  readonly placeholder: string;
  readonly message?: string;
  readonly register: UseFormRegisterReturn;
}

function LoginInputBox({ type, placeholder, message, register }: ILogin) {
  const { onChange, onBlur, name, ref } = register || {};
  return (
    <div className="flex flex-col relative">
      <label htmlFor={name} className="text-2xl">
        {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        className={`${message ? 'border-primary' : null} focus:outline-none border-2 text-2xl bg-concrete rounded-lg p-3 placeholder:text-alto`}
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

export default LoginInputBox;
