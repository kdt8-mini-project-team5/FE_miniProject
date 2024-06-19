import { z } from 'zod';

const MIN_PASSWORD_LEGNTH = 8;
const MIN_PASSWORD_LEGNTH_ERROR = '최소 8자 이상이어야 합니다.';
const MAX_PASSWORD_LEGNTH = 30;
const MAX_PASSWORD_LEGNTH_ERROR = '최대 30자입니다.';
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/;

const PASSWORD_REGEX_ERROR = '비밀번호는 대소문자, 특수기호를 포함해야 합니다.';

const PASSWORD_REQUIRED_ERROR = '비밀번호를 입력해주세요.';

const loginSchema = z.object({
  email: z.string().email({ message: '유효한 메일이 아닙니다.' }).toLowerCase(),
  password: z
    .string({
      required_error: PASSWORD_REQUIRED_ERROR,
    })
    .min(MIN_PASSWORD_LEGNTH, MIN_PASSWORD_LEGNTH_ERROR)
    .max(MAX_PASSWORD_LEGNTH, MAX_PASSWORD_LEGNTH_ERROR)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export default loginSchema;
