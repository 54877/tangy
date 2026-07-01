import { validateField, type ValidationRules } from "./validateField";
import { validateLengthRules, validateEmailField } from "./validators";

//表單驗證
export type ValidateFormParams<T> = {
  values: T;
  fields: (keyof T)[];
  rules?: ValidationRules<T>;
  title?: string;
};

export function validateForm<T extends object>({
  values,
  fields,
  rules,
  title,
}: ValidateFormParams<T>): Partial<Record<keyof T, string>> {
  const errors: Partial<Record<keyof T, string>> = {};

  // 指定欄位驗證
  fields.forEach((field) => {
    const fieldErrors = validateField<T>({
      name: field,
      value: values[field],
      title,
      rules,
    });

    //只回傳第一個錯誤訊息
    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors[0];
    }
  });

  //全域規則驗證
  (Object.keys(values) as (keyof T)[]).forEach((key) => {
    const value = values[key];
    validateEmailField(key, value, errors);
    validateLengthRules(key, value, errors);
  });

  return errors;
}
