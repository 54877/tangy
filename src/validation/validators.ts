import { getLengthValidator } from "./ruler";

//全域驗證長度規則
export function validateLengthRules<T>(
  key: keyof T,
  value: T[keyof T],
  errors: Partial<Record<keyof T, string>>,
) {
  const validators = getLengthValidator<T>(key);

  for (const validate of validators) {
    const error = validate(value);
    if (error && !errors[key]) {
      errors[key] = error;
      break;
    }
  }
}

//email格式驗證
export function validateEmailField<T>(
  key: keyof T,
  value: unknown,
  errors: Partial<Record<keyof T, string>>,
) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if ((key === "ownerEmail" || key === "email") && typeof value === "string") {
    if (value && !pattern.test(value)) {
      errors[key] = "請輸入正確email格式";
    }
  }
}
